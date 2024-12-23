import { Button } from "@/components/Buttons/Button";
import { PlanDetailType } from "@/types/plan";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  plan: PlanDetailType;
};

export function ReservationForm({ plan }: Props) {
  const [step, setStep] = useState(1);
  console.log(plan);

  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* ステップ1: 日程・人数選択 */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">{t("reservation.steps.schedule")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.checkIn")}
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.checkOut")}
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted">
                {t("reservation.labels.guests")}
              </label>
              <select className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>大人2名</option>
                <option>大人1名</option>
                <option>大人2名 + 子供1名</option>
                <option>大人2名 + 子供2名</option>
              </select>
            </div>
          </div>
          <Button fullWidth onClick={() => setStep(2)}>
            {t("reservation.buttons.next")}
          </Button>
        </div>
      )}

      {/* ステップ2: 予約者情報入力 */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">{t("reservation.steps.guest")}</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("reservation.placeholders.name")}
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("reservation.placeholders.email")}
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.phone")}
                </label>
                <input
                  type="tel"
                  placeholder={t("reservation.placeholders.phone")}
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">
                  {t("reservation.labels.notes")}
                </label>
                <textarea
                  placeholder={t("reservation.placeholders.notes")}
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none h-24"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" fullWidth onClick={() => setStep(1)}>
              {t("reservation.buttons.back")}
            </Button>
            <Button fullWidth onClick={() => setStep(3)}>
              {t("reservation.buttons.next")}
            </Button>
          </div>
        </div>
      )}

      {/* ステップ3: 確認画面 */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">{t("reservation.steps.confirm")}</h3>
            <div className="space-y-4 divide-y">
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.checkIn")}
                </span>
                <span>2024年4月1日</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.checkOut")}
                </span>
                <span>2024年4月2日</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.guests")}
                </span>
                <span>大人2名</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.name")}
                </span>
                <span>山田 太郎</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.email")}
                </span>
                <span>example@example.com</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">
                  {t("reservation.labels.phone")}
                </span>
                <span>090-1234-5678</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" fullWidth onClick={() => setStep(2)}>
              {t("reservation.buttons.back")}
            </Button>
            <Button fullWidth>{t("reservation.buttons.confirm")}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
