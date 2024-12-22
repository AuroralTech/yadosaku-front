import { Header } from "@/components/Common/Header";
import { ReservationForm } from "@/components/Reservation/ReservationForm";
import { ReservationSummary } from "@/components/Reservation/ReservationSummary";
import { usePlanDetail } from "@/components/PlanDetail/usePlanDetail";

export default function ReservationPage() {
  const { PLAN_DETAIL } = usePlanDetail();

  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6 space-y-6">
        <h1 className="text-xl font-bold">予約情報の入力</h1>
        <div className="space-y-6">
          <ReservationSummary plan={PLAN_DETAIL} />
          <ReservationForm plan={PLAN_DETAIL} />
        </div>
      </main>
    </div>
  );
}
