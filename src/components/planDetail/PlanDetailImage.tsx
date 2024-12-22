import Image from "next/image";
import { usePlanDetail } from "./usePlanDetail";

export const PlanDetailImage = () => {
  const { PLAN_DETAIL } = usePlanDetail();
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg">
      <Image
        src={PLAN_DETAIL.mainImage}
        alt={PLAN_DETAIL.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {PLAN_DETAIL.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 backdrop-blur-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {PLAN_DETAIL.name}
        </h1>
        <p className="text-white/90 text-sm">{PLAN_DETAIL.summary}</p>
      </div>
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm">
          <span className="text-accent mr-1">残り</span>
          <span className="font-medium">{PLAN_DETAIL.remaining}室</span>
        </span>
      </div>
    </div>
  );
};
