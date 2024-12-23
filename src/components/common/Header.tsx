import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
] as const;

export const Header = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-container border-b border-zinc-100">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            {t("common.nav.home")}
          </Link>
          <div className="flex items-center gap-2">
            <Link href="#" className="text-muted hover:text-primary">
              {t("common.nav.facilities")}
            </Link>
            <Link href="#" className="text-muted hover:text-primary">
              {t("common.nav.reservations")}
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm text-muted hover:text-primary">
                <span>🌐</span>
                <span>
                  {languages.find((lang) => lang.code === locale)?.label}
                </span>
              </button>
              <div className="absolute inset-0 -bottom-2 z-50" />
              <div className="absolute right-0 top-[calc(100%+0.5rem)] bg-white rounded-lg shadow-lg border border-zinc-100 py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 w-32 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 ${
                      locale === lang.code
                        ? "text-primary font-medium"
                        : "text-muted"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
