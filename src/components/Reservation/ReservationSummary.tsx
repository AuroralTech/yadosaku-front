import { PlanDetailType } from "@/types/plan";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  plan: PlanDetailType;
};

const texts = {
  ja: {
    per: {
      person: "人",
      room: "部屋",
    },
  },
  en: {
    per: {
      person: "per person",
      room: "per room",
    },
  },
  ko: {
    per: {
      person: "인",
      room: "객실",
    },
  },
  zh: {
    per: {
      person: "每人",
      room: "每间",
    },
  },
};

export function ReservationSummary({ plan }: Props) {
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <div className="bg-warm rounded-lg p-4">
      <div className="flex gap-4">
        <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0">
          <Image
            src={plan.mainImage}
            alt={plan.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold mb-1">{plan.name}</h2>
          <div className="text-sm text-muted space-y-1">
            <p>
              {plan.period.start} 〜 {plan.period.end}
            </p>
            <p className="font-medium text-primary">
              {plan.price.amount}
              <span className="text-muted font-normal ml-1">
                / {t.per[plan.price.unit]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
