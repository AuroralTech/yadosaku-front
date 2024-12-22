export default {
  common: {
    nav: {
      home: "YadoSaku",
      facilities: "숙박시설",
      reservations: "예약",
    },
  },
  plan: {
    price: {
      label: "요금",
      per: {
        person: "인",
        room: "객실",
      },
    },
    period: {
      label: "이용 기간",
    },
    remaining: {
      label: "남은",
      unit: "객실",
    },
    button: {
      reserve: "예약하기",
    },
    section: {
      allergens: {
        title: "알레르기 성분",
      },
      imageAlt: {
        meal: "이미지",
      },
    },
    facility: {
      name: "시설명",
      type: "유형",
      capacity: "정원",
      units: "객실 수",
    },
  },
  reservation: {
    title: "예약 정보 입력",
    steps: {
      schedule: "숙박 일정",
      guest: "예약자 정보",
      confirm: "예약 내용 확인",
    },
    labels: {
      checkIn: "체크인",
      checkOut: "체크아웃",
      guests: "인원",
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      notes: "비고",
    },
    buttons: {
      next: "다음",
      back: "이전",
      confirm: "예약 확정",
    },
    placeholders: {
      name: "홍길동",
      email: "example@example.com",
      phone: "090-1234-5678",
      notes: "요청사항이 있으시면 입력해 주세요",
    },
    remaining: {
      label: "남은",
      unit: "객실",
    },
  },
} as const;
