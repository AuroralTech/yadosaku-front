import { Header } from "@/components/common/Header";
import { Button } from "@/components/buttons/Button";
import Image from "next/image";
import { Section } from "@/components/sections/Section";

type MealSection = {
  title: string;
  items: string[];
  type?: "menu" | "equipment" | "other";
  icon?: "bullet" | "check";
};

type Meal = {
  type: "dinner" | "breakfast" | "lunch";
  name: string;
  description?: string;
  sections: MealSection[];
  allergens?: string[];
};

type PlanDetail = {
  id: string;
  name: string;
  price: string;
  remaining: number;
  period: {
    start: string;
    end: string;
  };
  facility: {
    name: string;
    type: string;
    style: string;
    capacity: number;
    units: number;
  };
  tags: string[];
  description: {
    main: string;
    concept: string[];
    benefits: string[];
  };
  images: string[];
  meals: Meal[];
  schedule: {
    time: string;
    description: string;
  }[];
  notes: string[];
  sections: {
    id: string;
    title: string;
    type: SectionType;
    variant?: "default" | "warning" | "highlight";
    contentKey?: keyof PlanDetail["description"];
    mealType?: "dinner" | "breakfast" | "lunch";
    order: number;
  }[];
};

// PLAN_DETAILの型を指定
const PLAN_DETAIL: PlanDetail = {
  id: "star-watching-2024",
  name: "Star Watching resort PICA 2024",
  price: "¥30,000~",
  remaining: 3,
  period: {
    start: "2024-11-01",
    end: "2025-03-31",
  },
  facility: {
    name: "PICA秩父",
    type: "コテージ",
    style: "星空キャンプスタイル",
    capacity: 6,
    units: 10,
  },
  tags: ["星空観察", "BBQ・朝食付き"],
  description: {
    main: "満天の星��の下で過ごす特別な体験。プロの天体観測指導員による星空観察会付き。BBQディナーと朝食付きで快適なステイを。",
    concept: [
      "星座早見盤を頼りに星旅へ。",
      "夜空に向けて望遠鏡を向けてみる",
      "スコープ覗くとそこには小さな宇宙が広がっていた",
      "望遠鏡を自分で組み立てて、明日はあの場所、明後日は、、、",
      "自分で作る「国立天文台望遠鏡キット」が付いた特別プラン。",
      "いつもている夜空が、もっと観たいに変わる。",
    ],
    benefits: [
      "■ 国立天文台望遠鏡キット（1組1個プレゼント／定価 9,680円）",
      "・国立天文台が企画、設計から製造までの全工程をプロデュース",
      "・学習用教材として活用可能",
      "・自分で組立てることでレンズや望遠鏡の仕組みを学習",
      "・スマートフォン、タブレットでの撮影に対応",
      "※量限定プランとなります、なくなり次第終了となります",
      "",
      "■ PICAオリジナル星座早見盤（1組1個プレゼント）",
      "",
      "■ 天体観測機材レンタル",
      "・天体望遠鏡(ビクセン・ポルタ)",
      "・双眼鏡(ビクセン・レガーロ)",
      "・コット(ビクセン・ソラリラ星空観測ベット)",
    ],
  },
  images: [
    "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/01.jpg",
    "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/02.jpg",
    "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/03.jpg",
  ],
  meals: [
    {
      type: "dinner",
      name: "定番！炭火BBQ",
      description: "ご自身で焼いて食べていただきます。",
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
      description: "星空観望会（毎週土曜日開催・フロント前集合）",
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
  notes: [
    "2名様よりご利用頂けます",
    "食事付きプランの為、ご利用の前日前までにご予約ください",
    "会員割引を含む、その他割引の併用はできません",
    "ピッピーフライデー・アフターホリデー併用不可",
    "4歳以上の方が料金の対象で、人数にカウントします（3歳以下は無料、定員にもカウントしません）",
    "アレルギーをお持ちのお客様は、フロントまでご相談ください",
    "衛生管理、生ものの持込みはお断りしております",
  ],
  sections: [
    {
      id: "concept",
      title: "プランコンセプト",
      type: "description",
      contentKey: "concept",
      order: 1,
    },

    {
      id: "facility",
      title: "施設情報",
      type: "facility",
      order: 2,
    },
    {
      id: "benefits",
      title: "プラン特典",
      type: "description",
      contentKey: "benefits",
      order: 3,
    },
    {
      id: "amenity",
      title: "アメニティ",
      type: "list",
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
      id: "notes",
      title: "注意事項",
      type: "notice",
      variant: "warning",
      order: 8,
    },
  ],
};

// セクションの種類を定義
type SectionType =
  | "description" // 説明文（プランコンセプト、プラン特典など）
  | "facility" // 施設情報
  | "meal" // 食事関連
  | "schedule" // スケジュール
  | "list" // 汎用リスト（アメニティなど）
  | "notice"; // 注意事項

// セクション定義の型
type SectionDefinition = {
  id: string;
  title: string;
  type: SectionType;
  variant?: "default" | "warning" | "highlight";
  contentKey?: keyof PlanDetail["description"];
  mealType?: "dinner" | "breakfast" | "lunch";
};

// セクションの内容をレンダリングするコンポーネント
function PlanSection({
  section,
  data,
}: {
  section: SectionDefinition;
  data: PlanDetail;
}) {
  switch (section.type) {
    case "description":
      const content = data.description[section.contentKey || "main"];
      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-2">
            {Array.isArray(content) ? (
              content.map((text, index) => (
                <p
                  key={index}
                  className="text-muted leading-relaxed whitespace-pre-line"
                >
                  {text}
                </p>
              ))
            ) : (
              <p className="text-muted">{content}</p>
            )}
          </div>
        </Section>
      );

    case "facility":
      return (
        <Section title={section.title} variant={section.variant}>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data.facility).map(([key, value]) => (
              <div key={key}>
                <span className="text-sm text-muted block">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </Section>
      );

    case "meal":
      const mealData = data.meals.find(
        (meal) => meal.type === section.mealType
      );
      if (!mealData) return null;

      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-4">
            <h3 className="font-medium mb-2">{mealData.name}</h3>
            {mealData.description && (
              <p className="text-sm text-muted mb-3">{mealData.description}</p>
            )}
            {mealData.sections.map((mealSection) => (
              <Section
                key={mealSection.title}
                title={mealSection.title}
                items={mealSection.items.map((item) => ({
                  text: item,
                  icon: mealSection.icon || "bullet",
                }))}
              />
            ))}
            {mealData.allergens && (
              <div className="bg-warm rounded p-2 mt-4">
                <p className="text-sm text-muted">
                  <span className="font-medium">アレルギー品目：</span>
                  {mealData.allergens.join("、")}
                </p>
              </div>
            )}
          </div>
        </Section>
      );

    case "schedule":
      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-4">
            {data.schedule.map((item) => (
              <div key={item.time} className="flex items-start">
                <span className="text-primary font-medium w-24 shrink-0">
                  {item.time}
                </span>
                <span className="text-muted">{item.description}</span>
              </div>
            ))}
          </div>
        </Section>
      );

    case "notice":
      return (
        <Section
          title={section.title}
          variant={section.variant}
          items={data.notes.map((note) => ({
            text: note,
            icon: "asterisk",
          }))}
        />
      );

    case "list":
      // アメニティの場合の例
      const amenityItems = [
        "タオル・バスタオル",
        "歯ブラシ",
        "シャンプー・リンス",
        "ボディーソープ",
      ];
      return (
        <Section
          title={section.title}
          variant={section.variant}
          items={amenityItems.map((item) => ({
            text: item,
            icon: "check",
          }))}
        />
      );

    default:
      return null;
  }
}

// メインコンポーネントの修正
export default function PlanDetail() {
  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6 space-y-8">
        {/* メインビジュアル */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
          <Image
            src={PLAN_DETAIL.images[0]}
            alt={PLAN_DETAIL.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm">
              <span className="text-accent mr-1">残り</span>
              <span className="font-medium">{PLAN_DETAIL.remaining}室</span>
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {/* セクションの表示（orderでソート） */}
          {PLAN_DETAIL.sections
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <PlanSection
                key={section.id}
                section={section}
                data={PLAN_DETAIL}
              />
            ))}

          {/* 予約ボタン */}
          <div className="sticky bottom-4">
            <Button variant="solid" fullWidth>
              予約する
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
