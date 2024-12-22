import { Button } from "@/components/Buttons/Button";

export const PromotionCard = () => {
  return (
    <section className="bg-gradient-to-br from-warm to-secondary rounded-lg p-4">
      <div>
        <span className="text-sm text-accent font-medium mb-1 block">
          期間限定
        </span>
        <h3 className="text-lg font-bold mb-1">早期予約割引</h3>
        <p className="text-muted text-sm mb-4">30日前までの予約で最大25%オフ</p>
        <Button variant="outline" fullWidth>
          詳細を見る
        </Button>
      </div>
    </section>
  );
};
