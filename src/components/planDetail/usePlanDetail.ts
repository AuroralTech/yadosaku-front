import { useLanguage } from "@/contexts/LanguageContext";
import { PlanDetailType } from "@/types/plan";

export const usePlanDetail = () => {
  const { t } = useLanguage();
  const PLAN_DETAIL: PlanDetailType = {
    id: "star-watching-2024",
    name: "Star Watching resort PICA 2024",
    price: {
      amount: "¥30,000~",
      unit: "person",
    },
    remaining: 3,
    summary:
      "満天の星空の下で過ごす特別な体験。プロの天体観測指導員による星空観察会付き。BBQディナーと朝食付きで快適なステイを。",
    period: {
      start: "2024-11-01",
      end: "2025-03-31",
    },
    facility: {
      name: "PICA秩父",
      type: "コテージ",
      capacity: 6,
      units: 10,
    },
    tags: ["星空観察", "BBQ・朝食付き"],
    descriptions: [
      {
        id: "concept",
        title: "プランコンセプト",
        content: [
          "座早見盤を頼りに星旅へ。",
          "夜空に向けて望遠鏡を向けてみる",
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
          "・自分で組立てることでレンズや望遠鏡の仕組みを学習",
          "・スマートフォン、タブレットでの撮影に対応",
          "※数量限定プランとなります、なくなり次第終了となります",
          "",
          "■ PICAオリジナル星座早見盤（1組1個プレゼント）",
          "",
          "■ 天体観測機材レンタル",
          "・天体望遠鏡（ビクセンルタ）",
          "・双眼鏡（ビクセン・レガーロ）",
          "・コット（ビクセン・ソラリラ星空観測ベッド）",
        ],
        style: "bullet",
        icon: "check",
      },
    ],
    mainImage:
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/01.jpg",
    images: [
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/02.jpg",
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/03.jpg",
    ],
    meals: [
      {
        type: "dinner",
        name: "星空ディナー",
        description: "星空の下で楽しむ特別なディナーコース",
        images: [
          "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/06.jpg",
        ],
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
        images: [
          "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/07.jpg",
        ],
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
  };
  return { PLAN_DETAIL, t };
};
