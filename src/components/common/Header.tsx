export function Header() {
  return (
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
  );
}
