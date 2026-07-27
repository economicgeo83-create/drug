/**
 * 약, 알고 사용하기 - 국민 의약품 안심 안내 포털
 * Local Medicine Database (data.js)
 * 
 * [공공데이터 사용 및 알림]
 * 본 데이터는 포털 웹사이트의 검색 및 안내 기능을 확인하기 위해 식약처 및 의약품안전나라 공개 양식을 참조하여 작성된 [개발용 예시 데이터]입니다.
 * 실제 서비스 적용 전 공공데이터포털(data.go.kr) 또는 의약품안전나라의 최신 공공데이터로 교체해야 합니다.
 * 본 정보는 참고용이며 [의학적 판단에 사용 금지]입니다.
 */

window.medicineDataNotice = {
  isExampleData: true,
  noticeMessage: "개발용 예시 데이터 (실제 서비스 적용 전 공공데이터로 교체 필요 / 의학적 판단에 사용 금지)",
  lastVerified: "2026-07-01"
};

const medicineData = [
  {
    id: "MED-2026-001",
    productName: "타이레놀정500밀리그램 (개발용 예시)",
    ingredientName: "아세트아미노펜 (Acetaminophen)",
    ingredientAmount: "아세트아미노펜 500mg",
    company: "(주)한국존슨앤드존슨",
    category: "해열·진통·소염제",
    prescriptionType: "일반의약품",
    dosageForm: "정제 (알약)",
    efficacy: "감기로 인한 발열 및 통증, 두통, 신경통, 근육통, 월경통, 치통, 관절통의 완화",
    dosage: "만 12세 이상 소아 및 성인: 1회 1~2정씩 1일 3~4회 (4~6시간 간격) 필요시 복용. 1일 최대 4,000mg(8정)을 초과하여 복용하지 않습니다.",
    precautions: {
      beforeUse: [
        "이 약에 과민증이 있는 경우 복용하지 마십시오.",
        "소화성궤양, 심각한 혈액이상, 간장애, 신장장애, 심장기능부전 환자는 미리 의사·약사와 상의하십시오."
      ],
      duringUse: [
        "매일 세 잔 이상 정기적으로 술을 마시는 사람이 이 약을 복용할 경우 간손상이 유발될 수 있으므로 반드시 의사 또는 약사와 상의하십시오.",
        "아세트아미노펜을 포함하는 다른 제품과 함께 복용하지 마십시오 (일일 최대 용량 초과 위험)."
      ],
      contraindications: [
        "이 약에 과민증 반응 경험자",
        "중증 간장애 환자"
      ],
      pregnancyAndLactation: [
        "임산부 및 수유부는 복용 전 반드시 전문가와 상의하십시오. 치료상의 유익성이 위험성을 상회한다고 판단되는 경우에만 투여합니다."
      ],
      childrenAndElderly: [
        "만 12세 미만 소아는 소아용 아세트아미노펜 제제를 사용하십시오.",
        "고령자는 생리기능이 저하되어 있을 수 있으므로 감량 등 주의가 필요합니다."
      ],
      driving: [
        "운전 및 기계 조작 능력에 미치는 영향은 공개자료에서 확인되지 않음"
      ]
    },
    storage: {
      temperature: "밀폐용기, 실온(1~30℃) 보관",
      lightAndMoisture: "직사광선과 습기를 피해 서늘한 곳에 보관",
      container: "어린이의 손이 닿지 않는 원래 용기에 보관",
      afterOpening: "개봉 후 유효기간 및 상태를 확인하고 이물질이 들어가지 않도록 밀봉"
    },
    disposal: "남은 약은 변기나 하수구에 버리지 마시고, 가깝거나 거주 중인 지자체 보건소, 약국 또는 지자체 폐의약품 전용 수거함에 배출하십시오.",
    adverseReactions: {
      common: [
        "드물게 벼락두통, 속쓰림, 가벼운 피부 발진"
      ],
      consultPromptly: [
        "구토, 식욕부진, 두드러기, 식은땀, 피부나 눈이 노랗게 변함(간기능 이상 의심 증상)"
      ],
      emergency: [
        "호흡곤란, 얼굴·입술·혀의 부종, 중증 피부 이상반응(스티븐스-존슨 증후군)"
      ]
    },
    interactions: {
      medicines: [
        "다른 아세트아미노펜 포함 복합 감기약 및 진통제 (중복 복용 금지)",
        "항경련제(페니토인, 카르바마제핀 등), 바르비탈계 의약품"
      ],
      food: [
        "특별한 음식 제한은 없으나, 자극적인 음식과 과식을 피하십시오."
      ],
      alcohol: [
        "복용 중 음주는 엄격히 금지됩니다. (간 독성 위험 급증)"
      ],
      supplementsAndHerbal: [
        "간 대사에 영향을 주는 일부 건강기능식품(밀크씨슬 고용량 등) 복용 시 의사·약사 상의 필요"
      ]
    },
    source: {
      organization: "식품의약품안전처 / 의약품안전나라 (개발용 예시)",
      datasetName: "의약품 개별 허가·신고 품목정보 (개발용 예시)",
      sourcePageName: "의약품안전나라 품목상세정보",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-002",
    productName: "아스피린정100밀리그램 (개발용 예시)",
    ingredientName: "아스피린 (Aspirin)",
    ingredientAmount: "아스피린 100mg",
    company: "바이엘코리아(주)",
    category: "혈전용해제 / 진통제",
    prescriptionType: "전문의약품",
    dosageForm: "정제 (장용정)",
    efficacy: "심혈관 질환 위험 감소, 혈전 생성 억제, 뇌심혈관 질환 예방",
    dosage: "성인 1일 1회 1정. 의사의 처방 및 지시에 따라 정확히 복용하십시오.",
    precautions: {
      beforeUse: [
        "위궤양, 출혈 경향이 있는 환자는 투여하지 마십시오.",
        "수술 및 치과 시술 예정자는 미리 의사에게 아스피린 복용 사실을 알리십시오."
      ],
      duringUse: [
        "위장관 출혈 증상(검은색 변, 吐血 등)이 나타나는지 주의 깊게 관찰하십시오.",
        "임의로 복용을 중단하거나 용량을 변경하지 마십시오."
      ],
      contraindications: [
        "위장관 출혈 환자, 혈友병 환자, 중증 간장애·신장장애 환자",
        "아스피린 또는 기타 소염진통제에 천식 발작 경험이 있는 환자"
      ],
      pregnancyAndLactation: [
        "임신 3분기(임신 마지막 3개월) 여성은 투여 금지. 수유부 복용 금지."
      ],
      childrenAndElderly: [
        "15세 이하 수두 또는 독감 환아는 라이 증후군 위험으로 투여 금지.",
        "고령자는 위장관 출혈 및 궤양 위험이 높아 주의가 필요합니다."
      ],
      driving: [
        "운전 및 기계 조작 능력에 미치는 영향은 공개자료에서 확인되지 않음"
      ]
    },
    storage: {
      temperature: "기밀용기, 30℃ 이하 건조한 곳 보관",
      lightAndMoisture: "습기에 매우 취약하므로 뚜껑을 잘 닫아 보관",
      container: "원래의 PTP 포장 또는 용기에 보관",
      afterOpening: "개봉 후 신속히 복용"
    },
    disposal: "폐의약품 수거 장소와 배출 방법은 지역에 따라 다를 수 있습니다. 거주 지역의 지방자치단체, 보건소 또는 약국 안내를 확인하세요.",
    adverseReactions: {
      common: [
        "속쓰림, 위통, 구내염, 멍이 잘 듦"
      ],
      consultPromptly: [
        "귀이명(이명), 지속적인 위장 장애, 코피가 멈추지 않음"
      ],
      emergency: [
        "토혈(피를 토함), 토사물이 짜장 색상을 띔, 검은색 끈적이는 변, 심한 호흡곤란"
      ]
    },
    interactions: {
      medicines: [
        "다른 항응고제(와파린 등) 및 항혈소판제 (출혈 위험 상승)",
        "메토트렉세이트, 다른 비스테로이드성 소염진통제(NSAIDs)"
      ],
      food: [
        "위장 자극을 줄이기 위해 식후 복용 권장"
      ],
      alcohol: [
        "음주 시 위장관 출혈 위험이 크게 증가합니다."
      ],
      supplementsAndHerbal: [
        "은행잎 추출물(징코), 오메가-3 고용량, 비타민 E (출혈 경향 증가 주의)"
      ]
    },
    source: {
      organization: "식품의약품안전처 (개발용 예시)",
      datasetName: "의약품 품목 허가 정보 (개발용 예시)",
      sourcePageName: "의약품안전나라 상세페이지",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-003",
    productName: "겔포스엘현탁액 (개발용 예시)",
    ingredientName: "인산알루미늄겔 / 수산화마그네슘",
    ingredientAmount: "인산알루미늄겔 12.38g, 수산화마그네슘 0.4g 외",
    company: "보령제약(주)",
    category: "제산제 및 위장약",
    prescriptionType: "일반의약품",
    dosageForm: "현탁액 (짜먹는 액체)",
    efficacy: "위산과다, 속쓰림, 위통, 위부불쾌감, 체함, 구토, 위십이지장궤양 통증 완화",
    dosage: "성인 1회 1포씩 1일 3회 식간(식사와 식사 사이) 및 취침 전 복용. 복용 간격은 4시간 이상으로 합니다.",
    precautions: {
      beforeUse: [
        "투석 요법을 받고 있는 환자는 복용하지 마십시오.",
        "신장장애 환자, 변비 환자는 복용 전 의사·약사와 상의하십시오."
      ],
      duringUse: [
        "2주간 복용하여도 증상 개선이 없는 경우 복용을 중단하고 상의하십시오."
      ],
      contraindications: [
        "투석 치료 환자 (알루미늄 뇌증 위험)"
      ],
      pregnancyAndLactation: [
        "임산부는 복용 전 의사 또는 약사와 상담하십시오."
      ],
      childrenAndElderly: [
        "만 3세 미만 유아에게는 투여하지 않습니다.",
        "고령자는 뼈 질환이나 마그네슘 혈증 위험에 주의하십시오."
      ],
      driving: [
        "해당 공개자료에 별도 기재 없음"
      ]
    },
    storage: {
      temperature: "기밀용기, 실온(1~30℃) 보관",
      lightAndMoisture: "직사광선을 피하고 습기가 적은 서늘한 곳",
      container: "포장 포지 그대로 보관하며 얼리지 말 것",
      afterOpening: "개봉한 포는 즉시 복용"
    },
    disposal: "폐의약품 수거 장소와 배출 방법은 지역에 따라 다를 수 있습니다. 거주 지역의 지방자치단체, 보건소 또는 약국 안내를 확인하세요.",
    adverseReactions: {
      common: [
        "변비 또는 설사, 구강 건조"
      ],
      consultPromptly: [
        "복부 팽만감, 구토, 뼈의 통증이나 약화"
      ],
      emergency: [
        "알루미늄 또는 마그네슘 중독 증세, 전신 쇠약 및 의식 혼미"
      ]
    },
    interactions: {
      medicines: [
        "테트라사이클린계 항생제 (약물 흡수 방해로 1~2시간 시차 두고 복용)",
        "철분제, 케토코나졸"
      ],
      food: [
        "산성 음료(산성 과일주스 등)와 함께 복용 시 알루미늄 흡수가 증가할 수 있습니다."
      ],
      alcohol: [
        "음주는 위산 분비를 촉진하므로 삼가하십시오."
      ],
      supplementsAndHerbal: [
        "공개자료에서 확인되지 않음"
      ]
    },
    source: {
      organization: "한국의약품안전관리원 (개발용 예시)",
      datasetName: "안전사용길잡이 (개발용 예시)",
      sourcePageName: "의약품통합정보시스템",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-004",
    productName: "이부프로펜정400밀리그램 (개발용 예시)",
    ingredientName: "이부프로펜 (Ibuprofen)",
    ingredientAmount: "이부프로펜 400mg",
    company: "(주)한미약품",
    category: "해열·진통·소염제 (NSAID)",
    prescriptionType: "일반의약품",
    dosageForm: "정제 (알약)",
    efficacy: "류마티스관절염, 변형성관절염, 두통, 치통, 두통, 관절염, 외상후 소염·진통",
    dosage: "성인 1회 200~400mg 1일 3~4회 식후 복용. 1일 최대 3,200mg을 초과하지 않습니다.",
    precautions: {
      beforeUse: [
        "위장관 궤양, 심한 간장애, 신장장애, 고혈압 환자는 상의 후 복용하십시오."
      ],
      duringUse: [
        "위장 장애를 예방하기 위해 식사 직후 충분한 물과 함께 복용하십시오."
      ],
      contraindications: [
        "위장관 궤양 환자, 중증 심부전 환자, 아스피린 천식 환자"
      ],
      pregnancyAndLactation: [
        "임신 말기(임신 6개월 이후) 투여 금지 (태아 순환기계 이상 위험)."
      ],
      childrenAndElderly: [
        "체중 30kg 미만 어린이는 소아용 용량을 준수하십시오.",
        "고령자는 위장관 부작용 위험이 높아 최소 유효량으로 복용합니다."
      ],
      driving: [
        "복용 후 어지러움이 발생하는 경우 운전 및 기계 조작을 피하십시오."
      ]
    },
    storage: {
      temperature: "밀폐용기, 실온(1~30℃) 보관",
      lightAndMoisture: "차광 보관 및 습기 주의",
      container: "원래 용기 보관",
      afterOpening: "유효기간 내 사용"
    },
    disposal: "폐의약품은 생활쓰레기나 변기에 버리지 마시고 지자체 수거 체계에 따라 분리 배출하세요.",
    adverseReactions: {
      common: [
        "속쓰림, 소화불량, 구토, 어지러움"
      ],
      consultPromptly: [
        "소화성 궤양, 위장관 출혈, 부종, 혈압 상승"
      ],
      emergency: [
        "아나필락시스 쇼크, 흑색변, 급성 신부전 증상"
      ]
    },
    interactions: {
      medicines: [
        "다른 비스테로이드성 소염진통제(NSAIDs), 이뇨제, 고혈압약(ACE 억제제)"
      ],
      food: [
        "위장 보호를 위해 식사 후 즉시 복용"
      ],
      alcohol: [
        "음주 시 위장관 출혈 위험 증가"
      ],
      supplementsAndHerbal: [
        "오메가-3, 징코빌로바 등 혈액 응고 영향 제제 주의"
      ]
    },
    source: {
      organization: "식품의약품안전처 (개발용 예시)",
      datasetName: "공공데이터포털 의약품허가정보 (개발용 예시)",
      sourcePageName: "의약품 허가품목 DB",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-005",
    productName: "후시딘연고 (개발용 예시)",
    ingredientName: "퓨시드산나트륨 (Sodium Fusidate)",
    ingredientAmount: "1g 중 퓨시드산나트륨 20mg",
    company: "동화약품(주)",
    category: "외용 피부 항생제",
    prescriptionType: "일반의약품",
    dosageForm: "연고 (외용제)",
    efficacy: "세균성 피부 감염증(농피증, 모낭염, 종기, 화상·외상에 의한 2차 감염)의 치료",
    dosage: "환부를 깨끗이 한 후 1일 1~2회 적당량을 질환 부위에 직접 바르거나 멸균 거즈에 발라 붙입니다.",
    precautions: {
      beforeUse: [
        "이 약 또는 퓨시드산 관련 화합물에 과민증 반응 경험자는 사용하지 마십시오."
      ],
      duringUse: [
        "눈 및 눈 주위에는 바르지 마십시오. 감염 부위 외에 광범위하게 바르지 마십시오."
      ],
      contraindications: [
        "이 약 성분 과민증 환자, 퓨시드산 내성균 감염 환자"
      ],
      pregnancyAndLactation: [
        "임산부 및 임신 가능성이 있는 여성은 필요 최소한으로 사용하십시오."
      ],
      childrenAndElderly: [
        "소아 및 고령자 사용 시 특별한 제한사항은 없으나 미숙아 사용 주의",
        "해당 공개자료에 별도 기재 없음"
      ],
      driving: [
        "해당 사항 없음 (외용제)"
      ]
    },
    storage: {
      temperature: "기밀용기, 실온(1~30℃) 보관",
      lightAndMoisture: "직사광선을 피하고 서늘한 곳",
      container: "원래 튜브 캡을 꼭 닫아 보관",
      afterOpening: "개봉 후 6개월 이내 사용 권장"
    },
    disposal: "튜브 폐기 시 잔량을 휴지에 닦아낸 후 지자체 폐의약품 수거 체계 또는 개별 안내에 따라 배출하세요.",
    adverseReactions: {
      common: [
        "바른 부위의 가벼운 발적, 자극감, 건조감"
      ],
      consultPromptly: [
        "발진, 붉은 반점, 습진 심화, 주사 부위 통증"
      ],
      emergency: [
        "접촉성 피부염 심화, 전신적 알레르기 반응(결막염, 안구부종)"
      ]
    },
    interactions: {
      medicines: [
        "다른 외용 피부약과 동시 연고 사용 시 약효 저하 가능"
      ],
      food: [
        "해당 사항 없음 (외용제)"
      ],
      alcohol: [
        "해당 사항 없음"
      ],
      supplementsAndHerbal: [
        "공개자료에서 확인되지 않음"
      ]
    },
    source: {
      organization: "의약품안전나라 (개발용 예시)",
      datasetName: "의약품 품목정보 (개발용 예시)",
      sourcePageName: "외용제 안전안내",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-006",
    productName: "아마릴정2밀리그램 (개발용 예시)",
    ingredientName: "글리메피리드 (Glimepiride)",
    ingredientAmount: "글리메피리드 2mg",
    company: "(주)한독",
    category: "당뇨병 치료제 (설포닐우레아계)",
    prescriptionType: "전문의약품",
    dosageForm: "정제 (알약)",
    efficacy: "제2형 당뇨병 환자의 혈당 조절 개선 (식사요법 및 운동요법 보조)",
    dosage: "1일 1회 아침 식사 직전 또는 첫 번째 식사 직전에 복용. 의사 처방에 따라 초기 용량을 정하고 혈당치에 따라 조정합니다.",
    precautions: {
      beforeUse: [
        "제1형 당뇨병 환자, 당뇨병성 케토아시도시스 환자는 투여 금지.",
        "저혈당 위험을 인지하고 저혈당 대비용 사탕이나 당분을 항상 지참하십시오."
      ],
      duringUse: [
        "식사를 거르지 말고 규칙적으로 식사하십시오. 혈당 수치를 정기적으로 측정하십시오."
      ],
      contraindications: [
        "글리메피리드 과민증 환자, 중증 간장애 또는 신장장애 환자, 임산부"
      ],
      pregnancyAndLactation: [
        "임산부 및 수유부 투여 금지 (인슐린 제제로 변경 필요)."
      ],
      childrenAndElderly: [
        "소아에 대한 안전성은 확립되어 있지 않음.",
        "고령자는 저혈당 발생 위험이 매우 높으므로 신중한 용량 조절 필요."
      ],
      driving: [
        "저혈당 발생 시 시력 장애, 집중력 저하가 올 수 있으므로 운전 시 각별히 주의하십시오."
      ]
    },
    storage: {
      temperature: "밀폐용기, 30℃ 이하 보관",
      lightAndMoisture: "빛과 습기로부터 보호",
      container: "어린이 손이 닿지 않는 포장 용기 그대로 보관",
      afterOpening: "유효기간 확인 필수"
    },
    disposal: "폐의약품 수거 장소와 배출 방법은 지역에 따라 다를 수 있습니다. 거주 지역 보건소 또는 약국 안내를 확인하세요.",
    adverseReactions: {
      common: [
        "가벼운 식욕 증가, 일시적인 시력 변화"
      ],
      consultPromptly: [
        "저혈당 증상(식은땀, 떨림, 두근거림, 현기증, 창백함)"
      ],
      emergency: [
        "중증 저혈당으로 인한 의식 불명, 혼수, 경련"
      ]
    },
    interactions: {
      medicines: [
        "다른 당뇨병 치료제, 인슐린, ACE 억제제, 알로푸리놀 (저혈당 위험 증가)",
        "이뇨제, 코르티코스테로이드 (혈당 상승 유발 가능)"
      ],
      food: [
        "규칙적인 식사 준수가 필수적이며 과도한 금식 금지"
      ],
      alcohol: [
        "음주는 심각한 저혈당 또는 디설피람 유사 반응을 일으킬 수 있어 급격히 위험합니다."
      ],
      supplementsAndHerbal: [
        "혈당에 영향을 주는 건기식(바나바잎, 크롬 고용량 등) 복용 전 의사 상담 필수"
      ]
    },
    source: {
      organization: "건강보험심사평가원 / 식약처 (개발용 예시)",
      datasetName: "의약품안전사용서비스(DUR) (개발용 예시)",
      sourcePageName: "전문의약품 안전안내",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-007",
    productName: "노바스크정5밀리그램 (개발용 예시)",
    ingredientName: "암로디핀베실산염 (Amlodipine Besylate)",
    ingredientAmount: "암로디핀으로서 5mg",
    company: "한국화이자제약(주)",
    category: "고혈압 및 협심증 치료제",
    prescriptionType: "전문의약품",
    dosageForm: "정제 (알약)",
    efficacy: "고혈압 치료, 관상동맥의 경련증에 의한 혈관경련성 협심증 완화",
    dosage: "성인 1일 1회 5mg 투여. 환자의 반응에 따라 1일 최대 10mg까지 증량 가능하며 의사 지시에 따릅니다.",
    precautions: {
      beforeUse: [
        "이 약에 과민증이 있거나 중증의 저혈압 환자는 투여하지 마십시오."
      ],
      duringUse: [
        "혈압을 정기적으로 측정하고, 기립성 저혈압(갑자기 일어설 때 어지러움)에 주의하십시오."
      ],
      contraindications: [
        "디히드로피리딘계 화합물 과민증 환자, 중증 저혈압 환자"
      ],
      pregnancyAndLactation: [
        "임산부 및 임신 가능성이 있는 여성은 임의 투여 금지. 수유 중에는 수유 중단 권장."
      ],
      childrenAndElderly: [
        "6~17세 소아 고혈압 환자 용량 지침 준수.",
        "고령자는 약물 배설이 지연될 수 있으므로 낮은 용량부터 시작합니다."
      ],
      driving: [
        "어지러움, 두통, 피로감이 나타날 수 있으므로 운전 시 주의가 필요합니다."
      ]
    },
    storage: {
      temperature: "밀폐용기, 실온(1~30℃) 보관",
      lightAndMoisture: "차광 보관 (빛을 받지 않도록 함)",
      container: "원래 용기 보관",
      afterOpening: "밀봉 보관"
    },
    disposal: "폐의약품 수거 장소와 배출 방법은 지역에 따라 다를 수 있습니다. 거주 지자체 보건소 또는 약국에 전달하세요.",
    adverseReactions: {
      common: [
        "발목 부종, 안면 홍조, 두통, 어지러움, 피로"
      ],
      consultPromptly: [
        "심한 잇몸 증식, 지속적인 기립성 어지러움, 심장 두근거림"
      ],
      emergency: [
        "급격한 혈압 저하로 인한 흉통 심화, 극심한 호흡곤란"
      ]
    },
    interactions: {
      medicines: [
        "심바스타틴(고지혈증약, 고용량 병용 시 부작용 위험)",
        "자몽주스"
      ],
      food: [
        "자몽주스와 함께 복용하지 마십시오 (약물 혈중 농도 상승 위험)."
      ],
      alcohol: [
        "음주는 혈압 강하 작용을 가중시켜 현기증을 유발할 수 있습니다."
      ],
      supplementsAndHerbal: [
        "세인트존스워트(성요한풀) 추출물 복용 시 약효 감소 가능"
      ]
    },
    source: {
      organization: "식품의약품안전처 (개발용 예시)",
      datasetName: "의약품 상세 품목DB (개발용 예시)",
      sourcePageName: "DUR 성분별 주의사항",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-008",
    productName: "알마겔정 (개발용 예시)",
    ingredientName: "알마게이트 (Almagate)",
    ingredientAmount: "알마게이트 500mg",
    company: "유한양행(주)",
    category: "제산제",
    prescriptionType: "일반의약품",
    dosageForm: "정제 (씹어먹는 알약)",
    efficacy: "위·십이지장궤양, 위염, 위산과다, 속쓰림, 구역, 구토, 위통 등 증상 완화",
    dosage: "성인 및 12세 이상 소아: 1회 1g(2정)을 1일 3회 식후 30분~1시간에 씹어서 복용. 필요시 취침 전 추가 복용 가능.",
    precautions: {
      beforeUse: [
        "신장장애 환자, 알츠하이머병 환자는 복용 전 상담 필요"
      ],
      duringUse: [
        "2주 정도 복용해도 증상이 개선되지 않을 경우 전문가 상담"
      ],
      contraindications: [
        "이 약 성분 과민증 환자"
      ],
      pregnancyAndLactation: [
        "임산부는 치료상의 유익성이 위험성을 상회하는 경우에만 복용"
      ],
      childrenAndElderly: [
        "12세 미만 어린이 용법 미확립.",
        "고령자 변비·설사 경향 주의"
      ],
      driving: [
        "해당 공개자료에 별도 기재 없음"
      ]
    },
    storage: {
      temperature: "밀폐용기, 실온 보관",
      lightAndMoisture: "습기를 피하여 보관",
      container: "원래 PTP 포장 유지",
      afterOpening: "즉시 복용"
    },
    disposal: "지방자치단체 및 가깝거나 거주 중인 지자체 폐의약품 수거함 배출",
    adverseReactions: {
      common: [
        "변비 또는 묽은 변"
      ],
      consultPromptly: [
        "지속적인 소화장애, 복통"
      ],
      emergency: [
        "공개자료에서 확인되지 않음"
      ]
    },
    interactions: {
      medicines: [
        "테트라사이클린계 항생물질(흡수 저하)"
      ],
      food: [
        "음식물과 크게 상충되지 않음"
      ],
      alcohol: [
        "음주 삼가"
      ],
      supplementsAndHerbal: [
        "공개자료에서 확인되지 않음"
      ]
    },
    source: {
      organization: "의약품안전나라 (개발용 예시)",
      datasetName: "일반의약품 안내 (개발용 예시)",
      sourcePageName: "제산제 가이드",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-009",
    productName: "판콜에스내복액 (개발용 예시)",
    ingredientName: "아세트아미노펜 / 클로르페니라민 / DL-메틸에페드린 외",
    ingredientAmount: "아세트아미노펜 300mg, 클로르페니라민말레산염 2.5mg 외",
    company: "동화약품(주)",
    category: "종합감기약",
    prescriptionType: "일반의약품",
    dosageForm: "내복액 (마시는 감기약)",
    efficacy: "감기의 제증상(콧물, 코막힘, 재채기, 인후통, 기침, 가래, 오한, 발열, 두통, 관절통, 근육통)의 완화",
    dosage: "성인 1회 30mL(1병) 1일 3회 식후 30분에 복용합니다.",
    precautions: {
      beforeUse: [
        "다른 감기약, 진통제, 항히스타민제와 함께 복용하지 마십시오."
      ],
      duringUse: [
        "복용 후 졸음이 올 수 있으므로 운전 및 위험한 기계 조작을 금합니다."
      ],
      contraindications: [
        "이 약 성분 과민증 환자, MAO 억제제 복용 중인 환자"
      ],
      pregnancyAndLactation: [
        "임산부 및 수유부는 복용 금지 또는 전문가 상담 필수"
      ],
      childrenAndElderly: [
        "만 15세 미만 소아 복용 금지.",
        "고령자는 전립선 비대, 배뇨 장애 등에 유의"
      ],
      driving: [
        "졸음을 유발할 수 있으므로 자동차 운전 및 위험한 기계 조작을 절대 하지 마십시오."
      ]
    },
    storage: {
      temperature: "기밀용기, 실온(1~30℃) 보관",
      lightAndMoisture: "차광 보관",
      container: "원래 병 포장",
      afterOpening: "개봉 후 즉시 복용"
    },
    disposal: "남은 액상 의약품은 하수구에 버리지 말고 약국이나 지자체 폐의약품 수거함에 배출하십시오.",
    adverseReactions: {
      common: [
        "졸음, 입안 건조, 어지러움, 소화불량"
      ],
      consultPromptly: [
        "배뇨 장애, 심장 두근거림, 불안, 발진"
      ],
      emergency: [
        "급성 전신 피진성 고름집증, 호흡곤란, 아나필락시스"
      ]
    },
    interactions: {
      medicines: [
        "다른 아세트아미노펜 제제, 진해거담제, 항히스타민제, 비진정제"
      ],
      food: [
        "카페인 함유 음료(커피, 에너지음료) 과다 섭취 주의"
      ],
      alcohol: [
        "음주 절대 금지 (졸음 및 간 독성 극대화)"
      ],
      supplementsAndHerbal: [
        "공개자료에서 확인되지 않음"
      ]
    },
    source: {
      organization: "식품의약품안전처 (개발용 예시)",
      datasetName: "의약품 허가품목DB (개발용 예시)",
      sourcePageName: "감기약 복용가이드",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  },
  {
    id: "MED-2026-010",
    productName: "락토핏생유산균 골드 (개발용 예시)",
    ingredientName: "프로바이오틱스 / 아연",
    ingredientAmount: "프로바이오틱스 10억 CFU, 아연 8.5mg",
    company: "종근당건강(주)",
    category: "건강기능식품 (유산균)",
    prescriptionType: "일반의약품",
    dosageForm: "분말 (스틱 포)",
    efficacy: "유산균 증식 및 유해균 억제, 배변활동 원활, 장 건강 및 정상적인 면역기능에 도움",
    dosage: "1일 1회, 1회 1포를 식전·식후 관계없이 물 없이 또는 물과 함께 섭취하십시오.",
    precautions: {
      beforeUse: [
        "질환이 있거나 의약품 복용 시 전문가와 상담하십시오."
      ],
      duringUse: [
        "알레르기 체질 등은 개인에 따라 과민반응을 나타낼 수 있습니다."
      ],
      contraindications: [
        "특이체질, 알레르기 체질의 경우 성분을 확인 후 섭취"
      ],
      pregnancyAndLactation: [
        "임산부 및 수유부는 섭취 전 의사·약사와 상담 권장"
      ],
      childrenAndElderly: [
        "어린이가 섭취할 때는 일일섭취량 방법을 지도하십시오."
      ],
      driving: [
        "해당 사항 없음"
      ]
    },
    storage: {
      temperature: "실온 보관 (고온다습한 곳 피함)",
      lightAndMoisture: "직사광선을 피하여 서늘한 곳",
      container: "개별 스틱 포장 유효",
      afterOpening: "스틱 개봉 후 즉시 섭취"
    },
    disposal: "포장재는 재활용 쓰레기로 배출하세요.",
    adverseReactions: {
      common: [
        "섭취 초기 가벼운 복부 팽만감, 가스 차는 느낌"
      ],
      consultPromptly: [
        "지속적인 설사, 복통, 피부 알레르기 반응"
      ],
      emergency: [
        "면역결핍 환자의 경우 기회감염 위험 (전문가 즉시 방문)"
      ]
    },
    interactions: {
      medicines: [
        "항생제와 함께 복용 시 유산균의 사멸 가능성 (항생제 복용 2~3시간 후 유산균 섭취 권장)"
      ],
      food: [
        "뜨거운 물과 함께 복용 시 유산균 생존율 감소 가능"
      ],
      alcohol: [
        "과도한 음주는 장내 유익균 활동을 저해합니다."
      ],
      supplementsAndHerbal: [
        "기타 면역 관련 영양제와 병용 가능하나 과다 섭취 주의"
      ]
    },
    source: {
      organization: "식품의약품안전처 (개발용 예시)",
      datasetName: "건강기능식품 품목제조신고 DB (개발용 예시)",
      sourcePageName: "건기식 안전정보",
      referenceDate: "2026-07-01",
      dataUpdatedDate: "2026-07-01"
    }
  }
];
