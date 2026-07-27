/**
 * 약, 알고 사용하기 - 국민 의약품 안심 안내 포털 (app.js)
 * Vanilla JavaScript 기반 클라이언트 제어 모듈
 * 
 * [보안 및 접근성 원칙]
 * 1. innerHTML 직접 사용자 입력 삽입 차단 (DOM XSS 방지)
 * 2. file:// 로컬 환경 100% 호환 (fetch 사용 안함, data.js medicineData 활용)
 * 3. 키보드 접근성, 모달 포커스 트랩, aria-live 스크린리더 지원
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 상태 관리 변수 ---
  var state = {
    allData: Array.isArray(window.medicineData) ? window.medicineData : [],
    filteredData: [],
    currentPage: 1,
    itemsPerPage: 10,
    searchKeyword: '',
    filterType: 'all',
    filterForm: 'all',
    filterCategory: 'all',
    recentSearches: [],
    lastFocusedElement: null
  };

  // --- DOM 요소 참조 ---
  var searchForm = document.getElementById('searchForm');
  var searchInput = document.getElementById('searchInput');
  var filterTypeSelect = document.getElementById('filterType');
  var filterFormSelect = document.getElementById('filterForm');
  var filterCategorySelect = document.getElementById('filterCategory');
  var filterResetBtn = document.getElementById('filterResetBtn');
  var recentKeywordsList = document.getElementById('recentKeywordsList');
  var clearRecentBtn = document.getElementById('clearRecentBtn');

  var resultsGrid = document.getElementById('resultsGrid');
  var totalResultsCount = document.getElementById('totalResultsCount');
  var activeFilterBadge = document.getElementById('activeFilterBadge');
  var searchAnnounce = document.getElementById('searchAnnounce');
  var paginationWrap = document.getElementById('paginationWrap');

  var medicineModal = document.getElementById('medicineModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalProductTitle = document.getElementById('modalProductTitle');
  var modalBodyContent = document.getElementById('modalBodyContent');

  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mainNav = document.getElementById('mainNav');
  var backToTopBtn = document.getElementById('backToTopBtn');

  var interactionCheckForm = document.getElementById('interactionCheckForm');
  var checklistResultBanner = document.getElementById('checklistResultBanner');

  // --- 초기화 로직 ---
  function init() {
    loadRecentSearches();
    renderRecentSearches();
    applyFiltersAndSearch();
    bindEvents();
  }

  // --- 이벤트 바인딩 ---
  function bindEvents() {
    // 폼 제출 (검색)
    if (searchForm) {
      searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var rawInput = searchInput ? searchInput.value : '';
        var keyword = rawInput.trim();

        if (keyword.length === 0) {
          alert('제품명, 성분명 또는 분류명을 입력하세요.');
          if (searchInput) searchInput.focus();
          return;
        }

        state.searchKeyword = keyword;
        state.currentPage = 1;
        saveRecentSearch(keyword);
        applyFiltersAndSearch();
      });
    }

    // 필터 변경 시 자동 검색
    if (filterTypeSelect) {
      filterTypeSelect.addEventListener('change', function () {
        state.filterType = this.value;
        state.currentPage = 1;
        applyFiltersAndSearch();
      });
    }

    if (filterFormSelect) {
      filterFormSelect.addEventListener('change', function () {
        state.filterForm = this.value;
        state.currentPage = 1;
        applyFiltersAndSearch();
      });
    }

    if (filterCategorySelect) {
      filterCategorySelect.addEventListener('change', function () {
        state.filterCategory = this.value;
        state.currentPage = 1;
        applyFiltersAndSearch();
      });
    }

    // 필터 초기화
    if (filterResetBtn) {
      filterResetBtn.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        if (filterTypeSelect) filterTypeSelect.value = 'all';
        if (filterFormSelect) filterFormSelect.value = 'all';
        if (filterCategorySelect) filterCategorySelect.value = 'all';

        state.searchKeyword = '';
        state.filterType = 'all';
        state.filterForm = 'all';
        state.filterCategory = 'all';
        state.currentPage = 1;
        applyFiltersAndSearch();
      });
    }

    // 최근 검색어 전체 삭제
    if (clearRecentBtn) {
      clearRecentBtn.addEventListener('click', function () {
        state.recentSearches = [];
        try {
          localStorage.removeItem('medicine_recent_searches');
        } catch (err) {
          // localStorage 예외 방어
        }
        renderRecentSearches();
      });
    }

    // 모달 닫기
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    if (medicineModal) {
      medicineModal.addEventListener('click', function (e) {
        if (e.target === medicineModal) {
          closeModal();
        }
      });
    }

    // 키보드 Esc 닫기 및 포커스 트랩
    document.addEventListener('keydown', function (e) {
      if (medicineModal && medicineModal.classList.contains('open')) {
        if (e.key === 'Escape' || e.keyCode === 27) {
          closeModal();
        } else if (e.key === 'Tab' || e.keyCode === 9) {
          trapModalFocus(e);
        }
      }
    });

    // 모바일 햄버거 메뉴
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', function () {
        var isOpen = mainNav.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // 스크롤 탑 버튼
    window.addEventListener('scroll', function () {
      if (!backToTopBtn) return;
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 상호작용 체크리스트 변경
    if (interactionCheckForm) {
      interactionCheckForm.addEventListener('change', updateChecklistResult);
    }
  }

  // --- 검색 및 필터링 핵심 로직 ---
  function applyFiltersAndSearch() {
    var kw = state.searchKeyword.toLowerCase();

    state.filteredData = state.allData.filter(function (item) {
      // 1. 키워드 검사 (제품명, 성분명, 업체명, 분류명, 효능)
      var matchKw = true;
      if (kw) {
        var prod = (item.productName || '').toLowerCase();
        var ingr = (item.ingredientName || '').toLowerCase();
        var comp = (item.company || '').toLowerCase();
        var cat = (item.category || '').toLowerCase();
        var eff = (item.efficacy || '').toLowerCase();

        matchKw = prod.indexOf(kw) !== -1 ||
                  ingr.indexOf(kw) !== -1 ||
                  comp.indexOf(kw) !== -1 ||
                  cat.indexOf(kw) !== -1 ||
                  eff.indexOf(kw) !== -1;
      }

      // 2. 전문/일반 필터
      var matchType = true;
      if (state.filterType !== 'all') {
        matchType = item.prescriptionType === state.filterType;
      }

      // 3. 제형 필터
      var matchForm = true;
      if (state.filterForm !== 'all') {
        var formStr = item.dosageForm || '';
        matchForm = formStr.indexOf(state.filterForm) !== -1;
      }

      // 4. 분류 필터
      var matchCategory = true;
      if (state.filterCategory !== 'all') {
        var catStr = item.category || '';
        matchCategory = catStr.indexOf(state.filterCategory) !== -1;
      }

      return matchKw && matchType && matchForm && matchCategory;
    });

    renderResults();
    renderPagination();
    updateFilterBadge();
  }

  // --- 검색 결과 렌더링 ---
  function renderResults() {
    if (!resultsGrid || !totalResultsCount) return;

    totalResultsCount.textContent = state.filteredData.length;

    // 스크린리더 알림
    if (searchAnnounce) {
      searchAnnounce.textContent = '검색 결과 ' + state.filteredData.length + '건이 조회되었습니다.';
    }

    // 기존 결과 삭제
    while (resultsGrid.firstChild) {
      resultsGrid.removeChild(resultsGrid.firstChild);
    }

    if (state.filteredData.length === 0) {
      renderNoResults();
      return;
    }

    // 페이지네이션 슬라이싱
    var startIndex = (state.currentPage - 1) * state.itemsPerPage;
    var endIndex = Math.min(startIndex + state.itemsPerPage, state.filteredData.length);
    var pageItems = state.filteredData.slice(startIndex, endIndex);

    pageItems.forEach(function (med) {
      var card = createMedicineCard(med);
      resultsGrid.appendChild(card);
    });
  }

  // 결과 카드 DOM 안전 생성
  function createMedicineCard(med) {
    var card = document.createElement('article');
    card.className = 'medicine-card';

    // 헤더 (구분 태그 + 제품명)
    var header = document.createElement('div');
    header.className = 'med-card-header';

    var titleBox = document.createElement('div');
    
    var badge = document.createElement('span');
    badge.className = 'med-badge ' + (med.prescriptionType === '전문의약품' ? 'badge-prescription' : 'badge-general');
    badge.textContent = med.prescriptionType || '의약품';

    var title = document.createElement('h3');
    title.className = 'med-title';
    title.textContent = med.productName || '제품명 없음';

    var subtitle = document.createElement('div');
    subtitle.className = 'med-subtitle';
    subtitle.textContent = (med.ingredientName || '') + ' | ' + (med.company || '');

    titleBox.appendChild(badge);
    titleBox.appendChild(title);
    titleBox.appendChild(subtitle);
    header.appendChild(titleBox);

    // 본문 요약 리스트
    var infoList = document.createElement('div');
    infoList.className = 'med-info-list';

    var item1 = document.createElement('div');
    item1.className = 'med-info-item';
    item1.innerHTML = '<strong>분류:</strong> ';
    var catText = document.createTextNode(med.category || '공개자료에서 확인되지 않음');
    item1.appendChild(catText);

    var item2 = document.createElement('div');
    item2.className = 'med-info-item';
    item2.innerHTML = '<strong>제형:</strong> ';
    var formText = document.createTextNode(med.dosageForm || '공개자료에서 확인되지 않음');
    item2.appendChild(formText);

    var item3 = document.createElement('div');
    item3.className = 'med-info-item';
    var effText = (med.efficacy || '공개자료에서 확인되지 않음');
    if (effText.length > 75) {
      effText = effText.substring(0, 75) + '...';
    }
    item3.innerHTML = '<strong>효능 요약:</strong> ';
    var effNode = document.createTextNode(effText);
    item3.appendChild(effNode);

    infoList.appendChild(item1);
    infoList.appendChild(item2);
    infoList.appendChild(item3);

    // 푸터 (상세보기 버튼)
    var footer = document.createElement('div');
    footer.className = 'med-card-footer';

    var sourceTag = document.createElement('span');
    sourceTag.style.fontSize = '0.8rem';
    sourceTag.style.color = '#64748B';
    sourceTag.textContent = '출처: ' + (med.source ? med.source.organization : '식약처');

    var detailBtn = document.createElement('button');
    detailBtn.type = 'button';
    detailBtn.className = 'btn-detail';
    detailBtn.textContent = '상세보기';
    detailBtn.setAttribute('aria-label', (med.productName || '의약품') + ' 상세정보 보기');

    detailBtn.addEventListener('click', function (e) {
      state.lastFocusedElement = e.currentTarget;
      openModal(med);
    });

    footer.appendChild(sourceTag);
    footer.appendChild(detailBtn);

    card.appendChild(header);
    card.appendChild(infoList);
    card.appendChild(footer);

    return card;
  }

  // 검색 결과 없음 표시
  function renderNoResults() {
    var box = document.createElement('div');
    box.className = 'no-results-box';

    var title = document.createElement('h3');
    title.className = 'no-results-title';
    title.textContent = '조건에 일치하는 의약품 검색 결과가 없습니다.';

    var list = document.createElement('ul');
    list.className = 'no-results-list';

    var li1 = document.createElement('li');
    li1.textContent = '· 입력하신 검색어의 철자가 정확한지 확인해 주세요.';
    var li2 = document.createElement('li');
    li2.textContent = '· 제품명 또는 성분명의 일부만 단어 단위로 입력해 보세요.';
    var li3 = document.createElement('li');
    li3.textContent = '· 선택하신 필터(구분/제형/분류) 조건을 [전체]로 변경 후 다시 검색해 보세요.';
    var li4 = document.createElement('li');
    li4.textContent = '· 정확한 최신 의약품 정보는 식약처 [의약품안전나라] 공식 포털에서 추가 확인하실 수 있습니다.';

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);

    box.appendChild(title);
    box.appendChild(list);
    resultsGrid.appendChild(box);
  }

  // 페이지네이션 렌더링
  function renderPagination() {
    if (!paginationWrap) return;
    while (paginationWrap.firstChild) {
      paginationWrap.removeChild(paginationWrap.firstChild);
    }

    var totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage);
    if (totalPages <= 1) return;

    // 이전 버튼
    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'page-btn';
    prevBtn.textContent = '‹';
    prevBtn.setAttribute('aria-label', '이전 페이지');
    if (state.currentPage === 1) prevBtn.disabled = true;
    prevBtn.addEventListener('click', function () {
      if (state.currentPage > 1) {
        state.currentPage--;
        renderResults();
        renderPagination();
        scrollToSearchSection();
      }
    });
    paginationWrap.appendChild(prevBtn);

    // 페이지 번호 버튼
    for (var i = 1; i <= totalPages; i++) {
      (function (pageNum) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'page-btn' + (pageNum === state.currentPage ? ' active' : '');
        btn.textContent = pageNum;
        btn.setAttribute('aria-label', pageNum + ' 페이지로 이동');
        if (pageNum === state.currentPage) {
          btn.setAttribute('aria-current', 'page');
        }
        btn.addEventListener('click', function () {
          state.currentPage = pageNum;
          renderResults();
          renderPagination();
          scrollToSearchSection();
        });
        paginationWrap.appendChild(btn);
      })(i);
    }

    // 다음 버튼
    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'page-btn';
    nextBtn.textContent = '›';
    nextBtn.setAttribute('aria-label', '다음 페이지');
    if (state.currentPage === totalPages) nextBtn.disabled = true;
    nextBtn.addEventListener('click', function () {
      if (state.currentPage < totalPages) {
        state.currentPage++;
        renderResults();
        renderPagination();
        scrollToSearchSection();
      }
    });
    paginationWrap.appendChild(nextBtn);
  }

  function scrollToSearchSection() {
    var sec = document.getElementById('searchSection');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }

  // 필터 상단 바 텍스트 업데이트
  function updateFilterBadge() {
    if (!activeFilterBadge) return;
    var tags = [];
    if (state.searchKeyword) tags.push('검색어: "' + state.searchKeyword + '"');
    if (state.filterType !== 'all') tags.push('구분: ' + state.filterType);
    if (state.filterForm !== 'all') tags.push('제형: ' + state.filterForm);
    if (state.filterCategory !== 'all') tags.push('분류: ' + state.filterCategory);

    if (tags.length > 0) {
      activeFilterBadge.textContent = '적용 필터 [' + tags.join(', ') + ']';
    } else {
      activeFilterBadge.textContent = '전체 목록 보기';
    }
  }

  // --- 최근 검색어 관리 ---
  function loadRecentSearches() {
    try {
      var saved = localStorage.getItem('medicine_recent_searches');
      if (saved) {
        state.recentSearches = JSON.parse(saved);
      }
    } catch (err) {
      state.recentSearches = [];
    }
  }

  function saveRecentSearch(keyword) {
    if (!keyword) return;
    // 중복 제거
    state.recentSearches = state.recentSearches.filter(function (k) { return k !== keyword; });
    // 맨 앞에 추가
    state.recentSearches.unshift(keyword);
    // 최대 5개 제한
    if (state.recentSearches.length > 5) {
      state.recentSearches = state.recentSearches.slice(0, 5);
    }
    try {
      localStorage.setItem('medicine_recent_searches', JSON.stringify(state.recentSearches));
    } catch (err) {
      // 예외 방어
    }
    renderRecentSearches();
  }

  function renderRecentSearches() {
    if (!recentKeywordsList) return;
    while (recentKeywordsList.firstChild) {
      recentKeywordsList.removeChild(recentKeywordsList.firstChild);
    }

    if (state.recentSearches.length === 0) {
      var emptySpan = document.createElement('span');
      emptySpan.style.color = '#64748B';
      emptySpan.style.fontSize = '0.85rem';
      emptySpan.textContent = '최근 검색어가 없습니다.';
      recentKeywordsList.appendChild(emptySpan);
      return;
    }

    state.recentSearches.forEach(function (kw) {
      var tag = document.createElement('span');
      tag.className = 'keyword-tag';

      var kwBtn = document.createElement('span');
      kwBtn.style.cursor = 'pointer';
      kwBtn.textContent = kw;
      kwBtn.addEventListener('click', function () {
        if (searchInput) searchInput.value = kw;
        state.searchKeyword = kw;
        state.currentPage = 1;
        applyFiltersAndSearch();
      });

      var delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'del-btn';
      delBtn.innerHTML = '&times;';
      delBtn.setAttribute('aria-label', kw + ' 검색어 삭제');
      delBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        removeRecentSearch(kw);
      });

      tag.appendChild(kwBtn);
      tag.appendChild(delBtn);
      recentKeywordsList.appendChild(tag);
    });
  }

  function removeRecentSearch(keyword) {
    state.recentSearches = state.recentSearches.filter(function (k) { return k !== keyword; });
    try {
      localStorage.setItem('medicine_recent_searches', JSON.stringify(state.recentSearches));
    } catch (err) {
      // 예외 방어
    }
    renderRecentSearches();
  }

  // --- 상세 모달 제어 ---
  function openModal(med) {
    if (!medicineModal || !modalProductTitle || !modalBodyContent) return;

    modalProductTitle.textContent = med.productName || '의약품 상세정보';
    
    // 모달 바디 내용 초기화
    while (modalBodyContent.firstChild) {
      modalBodyContent.removeChild(modalBodyContent.firstChild);
    }

    // 1. 기본정보 블록
    var sec1 = createDetailSectionBlock('기본정보');
    var grid1 = document.createElement('div');
    grid1.className = 'detail-grid-two';
    grid1.innerHTML = 
      '<div><strong>제품명:</strong> ' + safeText(med.productName) + '</div>' +
      '<div><strong>성분명 및 함량:</strong> ' + safeText(med.ingredientAmount || med.ingredientName) + '</div>' +
      '<div><strong>업체명:</strong> ' + safeText(med.company) + '</div>' +
      '<div><strong>구분:</strong> ' + safeText(med.prescriptionType) + '</div>' +
      '<div><strong>제형:</strong> ' + safeText(med.dosageForm) + '</div>' +
      '<div><strong>품목 식별번호:</strong> ' + safeText(med.id) + '</div>';
    sec1.appendChild(grid1);

    // 2. 효능·효과
    var sec2 = createDetailSectionBlock('효능·효과');
    var p2 = document.createElement('p');
    p2.textContent = med.efficacy || '공개자료에서 확인되지 않음';
    sec2.appendChild(p2);

    // 3. 용법·용량
    var sec3 = createDetailSectionBlock('용법·용량');
    var p3 = document.createElement('p');
    p3.textContent = med.dosage || '공개자료에서 확인되지 않음';
    sec3.appendChild(p3);

    // 4. 복용 시 주의사항 (6종)
    var sec4 = createDetailSectionBlock('복용 시 주의사항');
    var prec = med.precautions || {};
    var precList = document.createElement('ul');
    precList.className = 'detail-bullet-list';

    addBulletItem(precList, '복용 전 확인할 사항', prec.beforeUse);
    addBulletItem(precList, '복용 중 주의할 사항', prec.duringUse);
    addBulletItem(precList, '복용을 피해야 하는 경우 (금기)', prec.contraindications);
    addBulletItem(precList, '임신·수유 관련 주의', prec.pregnancyAndLactation);
    addBulletItem(precList, '소아·고령자 관련 주의', prec.childrenAndElderly);
    addBulletItem(precList, '운전 및 기계 조작 관련 주의', prec.driving);

    sec4.appendChild(precList);

    // 5. 보관 방법
    var sec5 = createDetailSectionBlock('보관 방법');
    var st = med.storage || {};
    var grid5 = document.createElement('div');
    grid5.className = 'detail-grid-two';
    grid5.innerHTML = 
      '<div><strong>보관 온도:</strong> ' + safeText(st.temperature) + '</div>' +
      '<div><strong>빛·습기 주의:</strong> ' + safeText(st.lightAndMoisture) + '</div>' +
      '<div><strong>용기 및 어린이 방지:</strong> ' + safeText(st.container) + '</div>' +
      '<div><strong>개봉 후 주의사항:</strong> ' + safeText(st.afterOpening) + '</div>';
    sec5.appendChild(grid5);

    // 6. 폐기 방법
    var sec6 = createDetailSectionBlock('폐기 방법');
    var p6 = document.createElement('p');
    p6.textContent = med.disposal || '폐의약품 수거 장소와 배출 방법은 지역에 따라 다를 수 있습니다. 거주 지역의 지방자치단체, 보건소 또는 약국 안내를 확인하세요.';
    sec6.appendChild(p6);

    // 7. 이상반응 (3단계)
    var sec7 = createDetailSectionBlock('이상반응 정보');
    var adv = med.adverseReactions || {};
    var advList = document.createElement('ul');
    advList.className = 'detail-bullet-list';

    addBulletItem(advList, '흔히 보고된 이상반응 (경과관찰)', adv.common);
    addBulletItem(advList, '신속한 상담이 필요한 증상', adv.consultPromptly);
    addBulletItem(advList, '즉시 응급대응이 필요한 중대한 증상', adv.emergency);

    sec7.appendChild(advList);

    // 8. 상호작용
    var sec8 = createDetailSectionBlock('상호작용 주의 (약물·음식·음주 등)');
    var inter = med.interactions || {};
    var interList = document.createElement('ul');
    interList.className = 'detail-bullet-list';

    addBulletItem(interList, '다른 의약품과의 상호작용', inter.medicines);
    addBulletItem(interList, '음식과의 상호작용', inter.food);
    addBulletItem(interList, '음주 관련 주의사항', inter.alcohol);
    addBulletItem(interList, '건강기능식품 및 한약 관련 주의', inter.supplementsAndHerbal);

    sec8.appendChild(interList);

    // 9. 출처 및 기준일
    var sec9 = createDetailSectionBlock('정보 출처 및 기준일');
    var src = med.source || {};
    var srcBox = document.createElement('div');
    srcBox.style.backgroundColor = '#F1F5F9';
    srcBox.style.padding = '0.85rem';
    srcBox.style.borderRadius = '6px';
    srcBox.style.fontSize = '0.85rem';
    srcBox.innerHTML = 
      '<div><strong>제공기관:</strong> ' + safeText(src.organization) + '</div>' +
      '<div><strong>공공자료 명칭:</strong> ' + safeText(src.datasetName) + ' (' + safeText(src.sourcePageName) + ')</div>' +
      '<div><strong>자료 기준일 / 갱신일:</strong> ' + safeText(src.referenceDate) + ' / ' + safeText(src.dataUpdatedDate) + '</div>' +
      '<div style="margin-top:0.35rem; color:#64748B;">* 본 화면은 웹사이트에 저장된 기준일 현재의 공공자료를 바탕으로 표시됩니다. 최신 허가사항 및 변경사항은 관계 기관의 공식 서비스를 다시 확인하세요.</div>';
    sec9.appendChild(srcBox);

    // 모달 바디에 블록들 추가
    modalBodyContent.appendChild(sec1);
    modalBodyContent.appendChild(sec2);
    modalBodyContent.appendChild(sec3);
    modalBodyContent.appendChild(sec4);
    modalBodyContent.appendChild(sec5);
    modalBodyContent.appendChild(sec6);
    modalBodyContent.appendChild(sec7);
    modalBodyContent.appendChild(sec8);
    modalBodyContent.appendChild(sec9);

    // 모달 표시
    medicineModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!medicineModal) return;
    medicineModal.classList.remove('open');
    document.body.style.overflow = '';

    // 포커스 원래 버튼으로 복귀
    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
      state.lastFocusedElement.focus();
    }
  }

  // 모달 내부 포커스 트랩
  function trapModalFocus(e) {
    if (!medicineModal) return;
    var focusables = medicineModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusables.length === 0) return;

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }

  // 상세 헬퍼 함수
  function createDetailSectionBlock(titleText) {
    var div = document.createElement('div');
    div.className = 'detail-section-block';
    var h3 = document.createElement('h3');
    h3.className = 'detail-section-title';
    h3.textContent = titleText;
    div.appendChild(h3);
    return div;
  }

  function addBulletItem(ulElement, label, items) {
    var li = document.createElement('li');
    var textContent = '';

    if (Array.isArray(items) && items.length > 0) {
      textContent = items.join(', ');
    } else if (typeof items === 'string' && items.trim().length > 0) {
      textContent = items;
    } else {
      textContent = '공개자료에서 확인되지 않음';
    }

    li.innerHTML = '<strong>' + label + ':</strong> ';
    var node = document.createTextNode(textContent);
    li.appendChild(node);
    ulElement.appendChild(li);
  }

  function safeText(str) {
    if (!str || String(str).trim() === '') {
      return '해당 공개자료에 별도 기재 없음';
    }
    return String(str);
  }

  // --- 상호작용 체크리스트 결과 인터랙션 ---
  function updateChecklistResult() {
    if (!interactionCheckForm || !checklistResultBanner) return;
    var checkedBoxes = interactionCheckForm.querySelectorAll('input[type="checkbox"]:checked');
    var checkedValues = [];
    for (var i = 0; i < checkedBoxes.length; i++) {
      checkedValues.push(checkedBoxes[i].value);
    }

    if (checkedValues.length === 0) {
      checklistResultBanner.textContent = '선택한 항목에 따라 함께 복용하는 의약품이나 건강기능식품이 있다면 제품명과 성분명을 정리하여 의사 또는 약사에게 확인하세요.';
    } else {
      checklistResultBanner.textContent = '선택 항목 [' + checkedValues.join(', ') + ']: 병용 복용 시 의약품 간 상호작용이나 흡수율 변화가 일어날 수 있습니다. 제품명과 성분명을 작성하여 의사 또는 약사에게 확인하세요.';
    }
  }

  // 앱 실행
  init();
});
