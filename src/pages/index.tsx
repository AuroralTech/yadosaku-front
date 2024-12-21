import { Header } from "@/components/common/Header";
import { SearchForm } from "@/components/forms/SearchForm";
import { PlanCard } from "@/components/cards/PlanCard";
import { PromotionCard } from "@/components/cards/PromotionCard";

const POPULAR_PLANS = [
  {
    name: "Star Watching resort PICA 2024",
    price: "¥30,000~",
    remaining: 3,
    tags: ["星空観察", "BBQ・朝食付き"],
    image:
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb7000000125o-img/01.jpg",
  },
  {
    name: "ちちぶの「もっ得」プラン",
    price: "¥35,000~",
    remaining: 5,
    tags: ["アクティビティ", "温泉"],
    image:
      "https://pica-resort.jp/chichibu/stay/plan/rp7bb70000000l12-img/01.jpg",
  },
  {
    name: "TAKIBI resort PICA 2024",
    price: "¥25,000~",
    remaining: 2,
    tags: ["キャンプ", "BBQ・朝食付き"],
    image:
      "https://www.pica-resort.jp/chichibu/stay/plan/c6cejs0000000643-img/01.jpg",
  },
  {
    name: "フォレストアドベンチャーパックプラン",
    price: "¥22,000~",
    remaining: 1,
    tags: ["アクティビティ", "キャンプ"],
    image:
      "https://www.pica-resort.jp/chichibu/stay/plan/rp7bb700000001ed-img/2020_forestadventure_spring.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-container">
      <Header />
      <main className="px-4 py-6">
        {/* メインビジュアル */}
        <div className="relative rounded-xl overflow-hidden mb-6 bg-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
          <div className="relative z-20 p-6">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                日程
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                PICA 秩父
              </h2>
              <p className="text-muted mb-6">
                総合公園「秩父ミューズパーク」内にある、都内から気軽に行ける秩父のコテージキャンプ場。コテージでBBQが楽しめ、レストラン・大浴場も併設のアウトドアリゾート。
              </p>
            </div>
            <SearchForm />
          </div>
        </div>

        {/* おすすめセクション */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-primary font-medium text-sm block mb-1">
                おすすめ
              </span>
              <h2 className="text-xl font-bold text-foreground">
                人気のプラン
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {POPULAR_PLANS.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>
        <PromotionCard />
      </main>
    </div>
  );
}
