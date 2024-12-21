export type LocalizedString = {
  ja: string;
  en: string;
  ko: string;
  zh: string;
};

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
  images?: string[];
};

type Description = {
  id: string;
  title: string;
  content: string[];
  style?: "normal" | "bullet" | "numbered" | "heading";
  icon?: "check" | "bullet" | "asterisk";
};

export type PlanDetail = {
  id: string;
  name: string;
  price: {
    amount: string;
    unit: "person" | "room";
  };
  remaining: number;
  summary: string;
  mainImage: string;
  images: string[];
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
  descriptions: Description[];
  meals: Meal[];
  schedule: {
    time: string;
    description: string;
  }[];
  list: {
    title: string;
    content: string[];
    style: "normal" | "bullet" | "numbered" | "heading";
    icon: "none" | "check" | "bullet" | "asterisk";
  }[];
  sections: {
    id: string;
    title: string;
    type: SectionType;
    variant?: "default" | "warning" | "highlight";
    descriptionId?: string;
    mealType?: "dinner" | "breakfast" | "lunch";
    order: number;
  }[];
};

// セクションの種類を定義
type SectionType =
  | "description" // 説明文（プランコンセプト、プラン特典など）
  | "facility" // 施設情報
  | "meal" // 食事関連（夕食、朝食、食など）
  | "schedule" // スケジュール
  | "list" // 汎用リスト（アメニティや注意事項など）
  | "image"; // 画像ギャラリー

// セクション定義の型
export type SectionDefinition = {
  id: string;
  title: string;
  type: SectionType;
  variant?: "default" | "warning" | "highlight";
  descriptionId?: string;
  mealType?: "dinner" | "breakfast" | "lunch";
};
