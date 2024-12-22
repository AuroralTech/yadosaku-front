import { PlanDetailType } from "@/types/plan";
import Image from "next/image";

type Props = {
  plan: PlanDetailType;
};

export function ReservationSummary({ plan }: Props) {
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
                / {plan.price.unit === "person" ? "人" : "部屋"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
