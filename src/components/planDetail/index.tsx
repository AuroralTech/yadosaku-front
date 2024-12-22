import { Button } from "../Buttons/Button";
import { Header } from "../Common/Header";
import { PlanSection } from "./PlanSection";
import { usePlanDetail } from "./usePlanDetail";
import { PlanDetailImage } from "./PlanDetailImage";
import { PriceCard } from "./PriceCard";
import Link from "next/link";

export const PlanDetail = () => {
  const { PLAN_DETAIL } = usePlanDetail();
  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6 space-y-8">
        {/* メインビジュアル */}
        <PlanDetailImage />
        {/* プランの詳細 */}
        <PriceCard />
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
          <div className="sticky bottom-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <Link href={`/plan/${PLAN_DETAIL.id}/reserve`}>
              <Button variant="solid" fullWidth>
                予約する
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
