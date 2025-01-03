export type LocaleCode = "ja" | "en" | "ko" | "zh";
export type PriceUnit = "person" | "room";

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

// セクションの種類を定義
export type SectionType =
  | "description" // 説明文（プランコンセプト、プラン特典など）
  | "facility" // 施設情報
  | "meal" // 食事関連（夕食、朝食、食など）
  | "schedule" // スケジュール
  | "list" // 汎用リスト（アメニティや注意事項など）
  | "image"; // 画像ギャラリー

export type SectionDefinitionType = {
  id: string;
  title: string;
  type: SectionType;
  variant?: "default" | "warning" | "highlight";
  descriptionId?: string;
  mealType?: "dinner" | "breakfast" | "lunch";
  order: number;
};

export type PlanDetailType = {
  id: string;
  name: string;
  price: {
    amount: string;
    unit: PriceUnit;
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
    capacity?: number;
    units?: number;
  };
  tags: string[];
  descriptions: Description[];
  meals: Meal[];
  schedule: Array<{
    time: string;
    description: string;
  }>;
  list: Array<{
    title: string;
    content: string[];
    style: "normal" | "bullet" | "numbered" | "heading";
    icon: "none" | "check" | "bullet" | "asterisk";
  }>;
  sections: SectionDefinitionType[];
};

export type CommonPlanDetail = {
  id: string;
  price: {
    amount: string;
    unit: PriceUnit;
  };
  remaining: number;
  period: {
    start: string;
    end: string;
  };
  mainImage: string;
  images: string[];
};

export type LocalizedPlanDetail = {
  common: CommonPlanDetail;
  ja: Omit<
    PlanDetailType,
    "id" | "price" | "remaining" | "period" | "mainImage" | "images"
  >;
  en?: Omit<
    PlanDetailType,
    "id" | "price" | "remaining" | "period" | "mainImage" | "images"
  >;
  ko?: Omit<
    PlanDetailType,
    "id" | "price" | "remaining" | "period" | "mainImage" | "images"
  >;
  zh?: Omit<
    PlanDetailType,
    "id" | "price" | "remaining" | "period" | "mainImage" | "images"
  >;
};
