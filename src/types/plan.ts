type LocalizedString = {
  ja: string;
  en: string;
  ko: string;
  zh: string;
};

type MealSection = {
  title: LocalizedString;
  items: LocalizedString[];
  type?: "menu" | "equipment" | "other";
  icon?: "bullet" | "check";
};

type Meal = {
  type: "dinner" | "breakfast" | "lunch";
  name: LocalizedString;
  description?: LocalizedString;
  sections: MealSection[];
  allergens?: string[];
};

type Description = {
  id: string;
  title: LocalizedString;
  content: LocalizedString[];
  style?: "normal" | "bullet" | "numbered" | "heading";
  icon?: "none" | "check" | "bullet" | "asterisk";
};

export type PlanDetail = {
  id: string;
  name: LocalizedString;
  price: {
    amount: string;
    unit: "person" | "room";
  };
  remaining: number;
  summary: LocalizedString;
  mainImage: string;
  images: string[];
  period: {
    start: string;
    end: string;
  };
  facility: {
    name: LocalizedString;
    type: LocalizedString;
    style: LocalizedString;
    capacity: number;
    units: number;
  };
  tags: LocalizedString[];
  descriptions: Description[];
  meals: Meal[];
  schedule: {
    time: string;
    description: LocalizedString;
  }[];
  list: {
    title: LocalizedString;
    content: LocalizedString[];
    style: "normal" | "bullet" | "numbered" | "heading";
    icon: "none" | "check" | "bullet" | "asterisk";
  }[];
  sections: {
    id: string;
    title: LocalizedString;
    type: SectionType;
    variant?: "default" | "warning" | "highlight";
    descriptionId?: string;
    mealType?: "dinner" | "breakfast" | "lunch";
    order: number;
  }[];
};

type SectionType =
  | "description"
  | "facility"
  | "meal"
  | "schedule"
  | "list"
  | "image";

export type SectionDefinition = {
  id: string;
  title: string;
  type: SectionType;
  variant?: "default" | "warning" | "highlight";
  descriptionId?: string;
  mealType?: "dinner" | "breakfast" | "lunch";
  order: number;
};
