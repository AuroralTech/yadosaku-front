import { Button } from "@/components/Buttons/Button";
import { PlanDetailType } from "@/types/plan";
import { useState } from "react";

type Props = {
  plan: PlanDetailType;
};

export function ReservationForm({ plan }: Props) {
  const [step, setStep] = useState(1);
  console.log(plan);

  return (
    <div className="space-y-6">
      {/* ステップ1: 日程・人数選択 */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">宿泊日程</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted">チェックイン</label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">チェックアウト</label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted">人数</label>
              <select className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>大人2名</option>
                <option>大人1名</option>
                <option>大人2名 + 子供1名</option>
                <option>大人2名 + 子供2名</option>
              </select>
            </div>
          </div>
          <Button fullWidth onClick={() => setStep(2)}>
            次へ進む
          </Button>
        </div>
      )}

      {/* ステップ2: 予約者情報入力 */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">予約者情報</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted">お名前</label>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">メールアドレス</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">電話番号</label>
                <input
                  type="tel"
                  placeholder="090-1234-5678"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">特記事項</label>
                <textarea
                  placeholder="ご要望等がございましたらご記入ください"
                  className="w-full p-3 border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none h-24"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" fullWidth onClick={() => setStep(1)}>
              戻る
            </Button>
            <Button fullWidth onClick={() => setStep(3)}>
              次へ進む
            </Button>
          </div>
        </div>
      )}

      {/* ステップ3: 確認画面 */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">予約内容の確認</h3>
            <div className="space-y-4 divide-y">
              <div className="py-2">
                <span className="text-sm text-muted block">チェックイン</span>
                <span>2024年4月1日</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">チェックアウト</span>
                <span>2024年4月2日</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">人数</span>
                <span>大人2名</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">お名前</span>
                <span>山田 太郎</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">メールアドレス</span>
                <span>example@example.com</span>
              </div>
              <div className="py-2">
                <span className="text-sm text-muted block">電話番号</span>
                <span>090-1234-5678</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" fullWidth onClick={() => setStep(2)}>
              戻る
            </Button>
            <Button fullWidth>予約を確定する</Button>
          </div>
        </div>
      )}
    </div>
  );
}
