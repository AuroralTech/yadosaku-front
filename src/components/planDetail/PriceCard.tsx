import { usePlanDetail } from "./usePlanDetail";

export const PriceCard = () => {
  const { PLAN_DETAIL, t } = usePlanDetail();
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-zinc-100">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-muted block mb-1">
            {t("plan.price.label")}
          </span>
          <span className="text-2xl font-bold text-foreground">
            {PLAN_DETAIL.price.amount}
            <span className="text-sm font-normal text-muted ml-1">
              / {t(`plan.price.per.${PLAN_DETAIL.price.unit}`)}
            </span>
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted block mb-1">
            {t("plan.period.label")}
          </span>
          <span className="text-sm font-medium">
            {PLAN_DETAIL.period.start} 〜 {PLAN_DETAIL.period.end}
          </span>
        </div>
      </div>
    </div>
  );
};
