import { Header } from "@/components/Common/Header";
import { ReservationForm } from "@/components/Reservation/ReservationForm";
import { ReservationSummary } from "@/components/Reservation/ReservationSummary";
import { usePlanDetail } from "@/components/PlanDetail/usePlanDetail";
import { useLanguage } from "@/contexts/LanguageContext";

const texts = {
  ja: {
    title: "予約情報の入力",
  },
  en: {
    title: "Reservation Details",
  },
  ko: {
    title: "예약 정보 입력",
  },
  zh: {
    title: "预订信息",
  },
};

export default function ReservationPage() {
  const { PLAN_DETAIL } = usePlanDetail();
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6 space-y-6">
        <h1 className="text-xl font-bold">{t.title}</h1>
        <div className="space-y-6">
          <ReservationSummary plan={PLAN_DETAIL} />
          <ReservationForm plan={PLAN_DETAIL} />
        </div>
      </main>
    </div>
  );
}
