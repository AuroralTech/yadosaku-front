export default {
  common: {
    nav: {
      facilities: "住宿设施",
      reservations: "预订",
    },
  },
  plan: {
    price: {
      label: "价格",
      per: {
        person: "人",
        room: "间",
      },
    },
    period: {
      label: "使用期间",
    },
    remaining: {
      label: "剩余",
      unit: "间",
    },
    button: {
      reserve: "预订",
    },
    section: {
      allergens: {
        title: "过敏原",
      },
      imageAlt: {
        meal: "图片",
      },
    },
    facility: {
      name: "设施名称",
      type: "类型",
      capacity: "容纳人数",
      units: "房间数",
    },
  },
  reservation: {
    title: "预订信息",
    steps: {
      schedule: "住宿日程",
      guest: "预订者信息",
      confirm: "确认预订内容",
    },
    labels: {
      checkIn: "入住",
      checkOut: "退房",
      guests: "人数",
      name: "姓名",
      email: "邮箱",
      phone: "电话",
      notes: "备注",
    },
    buttons: {
      next: "下一步",
      back: "返回",
      confirm: "确认预订",
    },
    placeholders: {
      name: "张三",
      email: "example@example.com",
      phone: "090-1234-5678",
      notes: "如有特殊要求请在此填写",
    },
    remaining: {
      label: "剩余",
      unit: "间",
    },
  },
} as const;
