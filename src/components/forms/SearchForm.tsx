export const SearchForm = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">チェックイン</label>
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
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            プラン名
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="プラン名で絞り込む"
              className="w-full p-3 border border-zinc-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none pl-10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              🔍
            </span>
          </div>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-4">
        検索する
      </button>
    </div>
  );
};
