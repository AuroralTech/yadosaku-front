import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-container border-b border-zinc-100">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            宿サク
          </Link>
          <nav className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted hover:text-primary px-3 py-2">
              宿泊施設
            </Link>
            <Link href="#" className="text-muted hover:text-primary px-3 py-2">
              予約
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
