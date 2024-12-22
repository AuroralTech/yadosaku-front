export default {
  common: {
    nav: {
      facilities: "宿泊施設",
      reservations: "予約",
    },
  },
  plan: {
    price: {
      label: "プラン料金",
      per: {
        person: "人",
        room: "部屋",
      },
    },
    period: {
      label: "提供期間",
    },
    remaining: {
      label: "残り",
      unit: "室",
    },
    button: {
      reserve: "予約する",
    },
    section: {
      allergens: {
        title: "アレルギー品目",
      },
      imageAlt: {
        meal: "画像",
      },
    },
    facility: {
      name: "施設名",
      type: "タイプ",
      capacity: "定員",
      units: "部屋数",
    },
  },
  reservation: {
    title: "予約情報の入力",
    steps: {
      schedule: "宿泊日程",
      guest: "予約者情報",
      confirm: "予約内容の確認",
    },
    labels: {
      checkIn: "チェックイン",
      checkOut: "チェックアウト",
      guests: "人数",
      name: "お名前",
      email: "メールアドレス",
      phone: "電話番号",
      notes: "特記事項",
    },
    buttons: {
      next: "次へ進む",
      back: "戻る",
      confirm: "予約を確定する",
    },
    placeholders: {
      name: "山田 太郎",
      email: "example@example.com",
      phone: "090-1234-5678",
      notes: "ご要望等がございましたらご記入ください",
    },
  },
} as const;
