import type {
  PlanDetailType,
  PriceUnit,
  LocalizedPlanDetail,
} from "@/types/plan";
import { useLanguage } from "@/contexts/LanguageContext";

export const usePlanDetail = () => {
  const { locale, t } = useLanguage();

  // 言語ごとに異なる内容を持つオブジェクト
  const planDetail: LocalizedPlanDetail = {
    common: {
      id: "star-watching-2024",
      price: {
        amount: "¥30,000~",
        unit: "person",
      },
      remaining: 3,
      period: {
        start: "2024-11-01",
        end: "2025-03-31",
      },
      mainImage:
        "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/01.jpg",
      images: [
        "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/02.jpg",
        "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/03.jpg",
      ],
    },
    ja: {
      name: "星空観察リゾート PICA 2024",
      summary:
        "満天の星空の下で過ごす特別な体験。プロの天体観測指導員による星空観察会付き。BBQディナーと朝食付きで快適なステイを。",
      facility: {
        name: "PICA秩父",
        type: "コテージ",
      },
      tags: ["星空観察", "BBQ・朝食付き"],
      descriptions: [
        {
          id: "concept",
          title: "プランコンセプト",
          content: [
            "座早見盤を頼りに星旅へ。",
            "夜空に向けて望遠鏡向けてみる",
            "スコープを覗くとそこには小さな宇宙が広がっていた",
            "望遠鏡を自分で組み立てて、明日はあの場所、明後日は...",
            "自分で作る「国立天文台望遠鏡キット」が付いた特別プラン。",
            "いつも見ている夜空が、もっと観たいに変わる。",
          ],
          style: "normal",
        },
        {
          id: "benefits",
          title: "プラン特典",
          content: [
            "■ 国立天文台望遠鏡キット（1組1個プレゼント／定価 9,680円）",
            "・国立天文台が企画、設計から製造までの全工程をプロデュース",
            "・学習用教材として活用可能",
            "・自分で組立てるとでレンズや望遠鏡の仕組みを学習",
            "・スマートフォン、タブレットでの撮影に対応",
            "※数量限定プランとなります、なくなり次第終了となります",
            "",
            "■ PICAオリジナル星座早見盤（1組1個プレゼント）",
            "",
            "■ 天体観測機材レンタル",
            "・天体望遠鏡（ビクセンルタ）",
            "・双眼鏡（ビクセン・ガーロ）",
            "・コット（ビクセン・ソラリラ星空観測ベッド）",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      meals: [
        {
          type: "dinner",
          name: "星空ディナー",
          description: "星空の下で楽しむ特別なディナーコース",
          sections: [
            {
              title: "メニュー",
              type: "menu",
              icon: "bullet",
              items: [
                "豚肩ロース、鶏もも、味噌豚、ウインナー",
                "季節の野菜盛り合わせ",
                "米（0.5合）※メスティンにて自炊",
                "塩、ブラックペッパー、BBQソース",
              ],
            },
            {
              title: "付属設備・備品",
              type: "equipment",
              icon: "bullet",
              items: [
                "トング",
                "炭2.5kg",
                "炭ばさみ",
                "着火剤",
                "網",
                "紙皿",
                "割りばし",
              ],
            },
          ],
          allergens: ["卵", "小麦", "乳"],
        },
        {
          type: "breakfast",
          name: "クロワッサンサンドモーニング",
          sections: [
            {
              title: "メニュー",
              type: "menu",
              icon: "bullet",
              items: [
                "クロワッサンサンド（ロースハム、たまごサラダ、グリーンカール、スライスチーズ）",
                "カップスープ",
                "カップサラダ",
                "ジュース",
              ],
            },
          ],
          allergens: ["小麦", "卵", "乳"],
        },
      ],
      schedule: [
        {
          time: "15:00",
          description: "チェックイン",
        },
        {
          time: "16:00",
          description:
            "望遠鏡の作り方レクチャー（フロントにて）※国立天文台望遠鏡キットをお持ちください",
        },
        {
          time: "17:00",
          description: "BBQディナー",
        },
        {
          time: "19:00",
          description: "星観望会（毎週土曜日開催・フロント前集合）",
        },
        {
          time: "7:00-9:00",
          description: "朝食",
        },
        {
          time: "10:00",
          description: "チェックアウト",
        },
      ],
      list: [
        {
          title: "注意事項",
          content: [
            "2名様よりご利用いただけます",
            "食事付きプランのため、ご利用の前日までにご予約ください",
            "会員割引を含む、その他割引の併用はできません",
            "ハッピーフライデー・アフターホリデー併用不可",
            "4歳以上の方が料金の対象で、人にカウントします（3歳以下は無料、定員にもカウントしません）",
            "アレルギーをお持ちのお客様は、フロントまでご相談ください",
            "衛生理上、生ものの持込みはお断りしております",
          ],
          style: "bullet",
          icon: "asterisk",
        },
        {
          title: "アメニティ",
          content: [
            "タオル・バスタオル",
            "歯ブラシ",
            "シャンプー・リンス",
            "ボディーソープ",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      sections: [
        {
          id: "facility",
          title: "施設情報",
          type: "facility",
          order: 1,
        },
        {
          id: "concept",
          title: "プランコンセプト",
          type: "description",
          descriptionId: "concept",
          order: 2,
        },
        {
          id: "amenity",
          title: "アメニティ",
          type: "list",
          order: 3,
        },
        {
          id: "benefits",
          title: "プラン特典",
          type: "description",
          descriptionId: "benefits",
          order: 4,
        },
        {
          id: "dinner",
          title: "夕食",
          type: "meal",
          mealType: "dinner",
          order: 5,
        },
        {
          id: "breakfast",
          title: "朝食",
          type: "meal",
          mealType: "breakfast",
          order: 6,
        },
        {
          id: "schedule",
          title: "1日のスケジュール",
          type: "schedule",
          order: 7,
        },
        {
          id: "images",
          title: "写真",
          type: "image",
          order: 8,
        },
        {
          id: "notes",
          title: "注意事項",
          type: "list",
          variant: "warning",
          order: 9,
        },
      ],
    },
    en: {
      name: "Star Watching Resort PICA 2024",
      summary:
        "A special experience under a starry sky. Includes a stargazing session with professional astronomers. Comfortable stay with BBQ dinner and breakfast.",
      facility: {
        name: "PICA Chichibu",
        type: "Cottage",
      },
      tags: ["Star Watching", "BBQ & Breakfast Included"],
      descriptions: [
        {
          id: "concept",
          title: "Plan Concept",
          content: [
            "Journey to the stars with a star chart.",
            "Point your telescope to the night sky",
            "A small universe unfolds when you look through the scope",
            "Assemble your telescope, and tomorrow explore new places...",
            "A special plan including a 'National Astronomical Observatory Telescope Kit'.",
            "The night sky you always see becomes something you want to observe more.",
          ],
          style: "normal",
        },
        {
          id: "benefits",
          title: "Plan Benefits",
          content: [
            "■ National Astronomical Observatory Telescope Kit (1 per group / retail price ¥9,680)",
            "・Produced entirely by the National Astronomical Observatory",
            "・Can be used as educational material",
            "・Learn about lens and telescope mechanisms through assembly",
            "・Compatible with smartphone and tablet photography",
            "※ Limited quantity plan, available while supplies last",
            "",
            "■ PICA Original Star Chart (1 per group)",
            "",
            "■ Astronomical Equipment Rental",
            "・Telescope (Vixen Ruta)",
            "・Binoculars (Vixen Regalo)",
            "・Cot (Vixen Solalira Star Observation Bed)",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      meals: [
        {
          type: "dinner",
          name: "Stargazing Dinner",
          description: "Special dinner course under the starry sky",
          sections: [
            {
              title: "Menu",
              type: "menu",
              icon: "bullet",
              items: [
                "Pork shoulder, chicken thigh, miso pork, sausages",
                "Seasonal vegetable assortment",
                "Rice (0.5 cup) *Self-cooking with mess tin",
                "Salt, black pepper, BBQ sauce",
              ],
            },
            {
              title: "Equipment & Supplies",
              type: "equipment",
              icon: "bullet",
              items: [
                "Tongs",
                "Charcoal 2.5kg",
                "Charcoal tongs",
                "Fire starter",
                "Grill net",
                "Paper plates",
                "Disposable chopsticks",
              ],
            },
          ],
          allergens: ["Eggs", "Wheat", "Dairy"],
        },
        {
          type: "breakfast",
          name: "Croissant Sandwich Morning",
          sections: [
            {
              title: "Menu",
              type: "menu",
              icon: "bullet",
              items: [
                "Croissant sandwich (roast ham, egg salad, green curl, sliced cheese)",
                "Cup soup",
                "Cup salad",
                "Juice",
              ],
            },
          ],
          allergens: ["Wheat", "Eggs", "Dairy"],
        },
      ],
      schedule: [
        {
          time: "15:00",
          description: "Check-in",
        },
        {
          time: "16:00",
          description:
            "Telescope assembly lecture (at front desk) *Please bring your National Astronomical Observatory Telescope Kit",
        },
        {
          time: "17:00",
          description: "BBQ Dinner",
        },
        {
          time: "19:00",
          description:
            "Star watching session (Every Saturday, meet at front desk)",
        },
        {
          time: "7:00-9:00",
          description: "Breakfast",
        },
        {
          time: "10:00",
          description: "Check-out",
        },
      ],
      list: [
        {
          title: "Important Notes",
          content: [
            "Available for 2 or more guests",
            "Please make reservations by the day before as meals are included",
            "Cannot be combined with other discounts including member discounts",
            "Not applicable with Happy Friday/After Holiday discounts",
            "Guests aged 4 and above are counted for pricing (under 3 years free, not counted in capacity)",
            "Please consult the front desk if you have any allergies",
            "For hygiene reasons, bringing raw foods is not permitted",
          ],
          style: "bullet",
          icon: "asterisk",
        },
        {
          title: "Amenities",
          content: [
            "Towels & bath towels",
            "Toothbrush",
            "Shampoo & conditioner",
            "Body soap",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      sections: [
        {
          id: "facility",
          title: "Facility Information",
          type: "facility",
          order: 1,
        },
        {
          id: "concept",
          title: "Plan Concept",
          type: "description",
          descriptionId: "concept",
          order: 2,
        },
        {
          id: "amenity",
          title: "Amenities",
          type: "list",
          order: 3,
        },
        {
          id: "benefits",
          title: "Plan Benefits",
          type: "description",
          descriptionId: "benefits",
          order: 4,
        },
        {
          id: "dinner",
          title: "Dinner",
          type: "meal",
          mealType: "dinner",
          order: 5,
        },
        {
          id: "breakfast",
          title: "Breakfast",
          type: "meal",
          mealType: "breakfast",
          order: 6,
        },
        {
          id: "schedule",
          title: "Daily Schedule",
          type: "schedule",
          order: 7,
        },
        {
          id: "images",
          title: "Photos",
          type: "image",
          order: 8,
        },
        {
          id: "notes",
          title: "Important Notes",
          type: "list",
          variant: "warning",
          order: 9,
        },
      ],
    },
    ko: {
      name: "별빛 관찰 리조트 PICA 2024",
      summary:
        "맑은 밤하늘 아래에서 보내는 특별한 경험. 전문 천체 관측 강사와 함께하는 별자리 관찰회 포함. BBQ 저녁 식사와 아침 식사가 포함된 편안한 스테이.",
      facility: {
        name: "PICA 치치부",
        type: "코티지",
      },
      tags: ["별자리 관찰", "BBQ・조식 포함"],
      descriptions: [
        {
          id: "concept",
          title: "플랜 컨셉",
          content: [
            "별자리 조견표와 함께 별들을 찾아 떠나는 여행.",
            "밤하늘을 향해 망원��을 들이대보세요",
            "접안렌즈를 통해 보이는 작은 우주",
            "직접 조립하는 망원경으로, 내일은 저기, 모레는...",
            "'국립천문대 망원경 키트'가 포함된 특별한 플랜.",
            "늘 보던 밤하늘이 더 보고 싶어지는 순간.",
          ],
          style: "normal",
        },
        {
          id: "benefits",
          title: "플랜 특전",
          content: [
            "■ 국립천문대 망원경 키트 (1팀 1개 증정 / 정가 9,680엔)",
            "・국립천문대가 기획부터 설계, 제조까지 전 과정 프로듀스",
            "・학습용 교재로 활용 가능",
            "・직접 조립하면서 즈와 망원경의 구조 학습",
            "・스마트폰, 태블릿으로 촬영 가능",
            "※ 수량 한정 플랜으로, 소진 시 중료됩니다",
            "",
            "■ PICA 오리지널 별자리 조견표 (1팀 1개 증정)",
            "",
            "■ 천체 관측 장비 대여",
            "・천체 망원경 (Vixen Ruta)",
            "・쌍안경 (Vixen Regalo)",
            "・코트 (Vixen Solalira 별자리 관측 베드)",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      meals: [
        {
          type: "dinner",
          name: "별빛 디너",
          description: "별이 빛나는 하늘 아래에서 즐기는 특별한 디너 코스",
          sections: [
            {
              title: "메뉴",
              type: "menu",
              icon: "bullet",
              items: [
                "돼지 어깨살, 닭다리살, 된장 돼지고기, 소시지",
                "계절 채소 모듬",
                "쌀 (0.5합) ※메스틴으로 직접 조리",
                "소금, 후추, BBQ 소스",
              ],
            },
            {
              title: "구비 용품",
              type: "equipment",
              icon: "bullet",
              items: [
                "집게",
                "숯 2.5kg",
                "숯 집게",
                "착화제",
                "그릴망",
                "종이접시",
                "일회용 젓가락",
              ],
            },
          ],
          allergens: ["계란", "밀", "유제품"],
        },
        {
          type: "breakfast",
          name: "크루아상 샌드위치 모닝",
          sections: [
            {
              title: "메뉴",
              type: "menu",
              icon: "bullet",
              items: [
                "크루아상 샌드위치 (로스트햄, 에그 샐러드, 그린컬, 슬라이스 치즈)",
                "컵스프",
                "컵샐러드",
                "주스",
              ],
            },
          ],
          allergens: ["밀", "계란", "유제품"],
        },
      ],
      schedule: [
        {
          time: "15:00",
          description: "체크인",
        },
        {
          time: "16:00",
          description:
            "망원경 조립 강좌 (프런트에서) ※국립천문대 망원경 키트를 지참해 주세요",
        },
        {
          time: "17:00",
          description: "BBQ 디너",
        },
        {
          time: "19:00",
          description: "별자리 관찰회 (매주 토요일 개최・프런트 앞 집합)",
        },
        {
          time: "7:00-9:00",
          description: "조식",
        },
        {
          time: "10:00",
          description: "체크아웃",
        },
      ],
      list: [
        {
          title: "주의사항",
          content: [
            "2인 이상부터 이용 가능합니다",
            "식사가 포함된 플랜이므로 전날까지 예약해 주시기 바랍니다",
            "회원 할인�� 포함한 기타 할인 중복 적용이 불가합니다",
            "해피 프라이데이・애프터 홀리데이 할인 적용 불가",
            "4세 이상부터 요금이 부과되며 인원수에 포함됩니다 (3세 이하 무료, 정원에 불포함)",
            "알레르기가 있는 고객님은 프런트로 문의해 주시기 바랍니다",
            "위생상 날음식 반입은 금지되어 있습니다",
          ],
          style: "bullet",
          icon: "asterisk",
        },
        {
          title: "구비용품",
          content: ["수건・목욕 타월", "칫솔", "샴푸・린스", "바디워시"],
          style: "bullet",
          icon: "check",
        },
      ],
      sections: [
        {
          id: "facility",
          title: "시설 정보",
          type: "facility",
          order: 1,
        },
        {
          id: "concept",
          title: "플랜 컨셉",
          type: "description",
          descriptionId: "concept",
          order: 2,
        },
        {
          id: "amenity",
          title: "구비용품",
          type: "list",
          order: 3,
        },
        {
          id: "benefits",
          title: "플랜 특전",
          type: "description",
          descriptionId: "benefits",
          order: 4,
        },
        {
          id: "dinner",
          title: "저녁 식사",
          type: "meal",
          mealType: "dinner",
          order: 5,
        },
        {
          id: "breakfast",
          title: "조식",
          type: "meal",
          mealType: "breakfast",
          order: 6,
        },
        {
          id: "schedule",
          title: "일정",
          type: "schedule",
          order: 7,
        },
        {
          id: "images",
          title: "사진",
          type: "image",
          order: 8,
        },
        {
          id: "notes",
          title: "주의사항",
          type: "list",
          variant: "warning",
          order: 9,
        },
      ],
    },
    zh: {
      name: "星空观察度假村 PICA 2024",
      summary:
        "在满天繁星下度过特别的体验。包含专业天文观测指导员带领的观星会。含BBQ晚餐和早餐的舒适住宿。",
      facility: {
        name: "PICA秩父",
        type: "度假小屋",
      },
      tags: ["星空观察", "含BBQ・早餐"],
      descriptions: [
        {
          id: "concept",
          title: "计划概念",
          content: [
            "与星图一起踏上星旅。",
            "将望远镜指向夜空",
            "通过望远镜看到的小宇宙",
            "自己组装望远镜，明天探索新地方...",
            "包含国立天文台望远镜套件的特别计划。",
            "你一直看到的星空，变得更加想观察。",
          ],
          style: "normal",
        },
        {
          id: "benefits",
          title: "计划特典",
          content: [
            "■ 国立天文台望远镜套件（每组1个，零售价¥9,680）",
            "・由国立天文台从设计到制造的全过程生产",
            "・可用作学习材料",
            "・通过组装学习镜头和望远镜的结构",
            "・与智能手机和平板电脑兼容",
            "※ 限量版计划，售完即止",
            "",
            "■ PICA原创星图（每组1个）",
            "",
            "■ 天文观测设备租赁",
            "・望远镜（Vixen Ruta）",
            "・双筒望远镜（Vixen Regalo）",
            "・帐篷（Vixen Solalira星空观测床）",
          ],
          style: "bullet",
          icon: "check",
        },
      ],
      meals: [
        {
          type: "dinner",
          name: "星空晚餐",
          description: "在星空下享受��别的晚餐",
          sections: [
            {
              title: "菜单",
              type: "menu",
              icon: "bullet",
              items: [
                "猪肩肉、鸡肉、味噌猪肉、香肠",
                "季节性蔬菜组合",
                "米饭（0.5合）※用饭盒自炊",
                "盐、黑胡椒、BBQ酱",
              ],
            },
            {
              title: "设备及用品",
              type: "equipment",
              icon: "bullet",
              items: [
                "夹子",
                "木炭2.5kg",
                "木炭夹",
                "点火器",
                "烤网",
                "纸盘",
                "一次性筷子",
              ],
            },
          ],
          allergens: ["鸡蛋", "小麦", "乳制品"],
        },
        {
          type: "breakfast",
          name: "克鲁阿桑三明治早餐",
          sections: [
            {
              title: "菜单",
              type: "menu",
              icon: "bullet",
              items: [
                "克鲁阿桑三明治（烤火腿、鸡蛋沙拉、绿色卷、切片奶酪）",
                "杯汤",
                "杯沙拉",
                "果汁",
              ],
            },
          ],
          allergens: ["小麦", "鸡蛋", "乳制品"],
        },
      ],
      schedule: [
        {
          time: "15:00",
          description: "入住登记",
        },
        {
          time: "16:00",
          description: "望远镜组装讲座（在接待处）※请携带国立天文台望远镜套件",
        },
        {
          time: "17:00",
          description: "BBQ晚餐",
        },
        {
          time: "19:00",
          description: "星空观察会（每周六举行，在接待处前集合）",
        },
        {
          time: "7:00-9:00",
          description: "早餐",
        },
        {
          time: "10:00",
          description: "退房",
        },
      ],
      list: [
        {
          title: "注意事项",
          content: [
            "2人或以上即可使用",
            "由于包含餐食，请务必在前一天预约",
            "无法与其他折扣（包括会员折扣）叠加使用",
            "不适用Happy Friday/After Holiday折扣",
            "4岁以上的人士需支付费用，并计入人数（3岁以下免费，不占用名额）",
            "如有任何食物过敏，请咨询前台",
            "出于卫生原因，禁止携带生食",
          ],
          style: "bullet",
          icon: "asterisk",
        },
        {
          title: "设施",
          content: ["毛巾、浴巾", "牙刷", "洗发水、护发素", "身体乳"],
          style: "bullet",
          icon: "check",
        },
      ],
      sections: [
        {
          id: "facility",
          title: "设施信息",
          type: "facility",
          order: 1,
        },
        {
          id: "concept",
          title: "计划概念",
          type: "description",
          descriptionId: "concept",
          order: 2,
        },
        {
          id: "amenity",
          title: "设施",
          type: "list",
          order: 3,
        },
        {
          id: "benefits",
          title: "计划特典",
          type: "description",
          descriptionId: "benefits",
          order: 4,
        },
        {
          id: "dinner",
          title: "晚餐",
          type: "meal",
          mealType: "dinner",
          order: 5,
        },
        {
          id: "breakfast",
          title: "早餐",
          type: "meal",
          mealType: "breakfast",
          order: 6,
        },
        {
          id: "schedule",
          title: "日程",
          type: "schedule",
          order: 7,
        },
        {
          id: "images",
          title: "照片",
          type: "image",
          order: 8,
        },
        {
          id: "notes",
          title: "注意事项",
          type: "list",
          variant: "warning",
          order: 9,
        },
      ],
    },
  };

  // 言語に依存しない共通データ
  const commonData = {
    id: "star-watching-2024",
    price: {
      amount: "¥30,000~",
      unit: "person" as PriceUnit,
    },
    remaining: 3,
    period: {
      start: "2024-11-01",
      end: "2025-03-31",
    },
    facility: {
      capacity: 6,
      units: 10,
    },
    mainImage:
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/01.jpg",
    images: [
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/02.jpg",
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/03.jpg",
    ],
  };

  // 現在の言語に応じたデータを取得
  const getLocalizedContent = () => {
    // 指定された言語のコンテンツがある場合はそれを使用
    if (planDetail[locale]) {
      return planDetail[locale];
    }
    // なければ英語を使用
    if (planDetail.en) {
      return planDetail.en;
    }
    // 最終手段として日本語を使用
    return planDetail.ja;
  };

  // 現在の言語に応じたデータと共通データをマージ
  const PLAN_DETAIL: PlanDetailType = {
    ...commonData,
    ...getLocalizedContent(),
  };

  return { PLAN_DETAIL, t };
};
