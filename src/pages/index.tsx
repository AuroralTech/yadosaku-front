import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-container">
      {/* ヘッダー */}
      <header className="bg-container border-b border-zinc-100">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">宿サク</h1>
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-muted hover:text-primary px-3 py-2">
                宿泊施設
              </a>
              <a href="#" className="text-muted hover:text-primary px-3 py-2">
                予約
              </a>
            </nav>
          </div>
        </div>
      </header>

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

            {/* 検索フォーム */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    プラン名
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="プランを検索"
                      className="w-full p-3 border border-zinc-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none pl-10"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                      🔍
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">
                    チェックイン
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-zinc-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">
                    チェックアウト
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-zinc-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">人数</label>
                  <select className="w-full p-3 border border-zinc-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>大人2名</option>
                    <option>大人1名</option>
                    <option>大人2名 + 子供</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-4">
                検索する
              </button>
            </div>
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
            {[
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
            ].map((place) => (
              <div
                key={place.name}
                className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-zinc-100 relative">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm">
                      <span className="text-accent mr-1">残り</span>
                      <span className="font-medium">{place.remaining}室</span>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{place.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {place.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-primary font-bold">{place.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* プロモーション */}
        <section className="bg-gradient-to-br from-warm to-secondary rounded-lg p-4">
          <div>
            <span className="text-sm text-accent font-medium mb-1 block">
              期間限定
            </span>
            <h3 className="text-lg font-bold mb-1">早期予約割引</h3>
            <p className="text-muted text-sm mb-4">
              30日前までの予約で最大25%オフ
            </p>
            <button className="w-full bg-white hover:bg-accent hover:text-white border border-accent text-accent py-2 rounded-lg transition-colors">
              詳細を見る
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
