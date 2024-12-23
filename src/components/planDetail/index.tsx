import { Button } from "../Buttons/Button";
import { Header } from "../Common/Header";
import { PlanSection } from "./PlanSection";
import { usePlanDetail } from "./usePlanDetail";
import { PlanDetailImage } from "./PlanDetailImage";
import { PriceCard } from "./PriceCard";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const texts = {
  ja: {
    reserve: "予約する",
  },
  en: {
    reserve: "Reserve Now",
  },
  ko: {
    reserve: "예약하기",
  },
  zh: {
    reserve: "立即预订",
  },
};

export const PlanDetail = () => {
  const { PLAN_DETAIL } = usePlanDetail();
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6 space-y-8">
        <PlanDetailImage />
        <PriceCard />
        <div className="space-y-6">
          {PLAN_DETAIL.sections
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <PlanSection
                key={section.id}
                section={section}
                data={PLAN_DETAIL}
              />
            ))}
          <div className="sticky bottom-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <Link href={`/plan/${PLAN_DETAIL.id}/reserve`}>
              <Button variant="solid" fullWidth>
                {t.reserve}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
