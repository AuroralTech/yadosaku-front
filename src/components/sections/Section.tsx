type ListItem = {
  text: string;
  subItems?: string[];
  description?: string;
  note?: string;
  icon?: "check" | "bullet" | "asterisk";
  highlight?: boolean;
};

type SectionProps = {
  title: string;
  items?: ListItem[];
  children?: React.ReactNode;
  variant?: "default" | "warning" | "highlight";
};

const iconMap = {
  check: "✓",
  bullet: "•",
  asterisk: "※",
};

export function Section({
  title,
  items,
  children,
  variant = "default",
}: SectionProps) {
  const bgColor = {
    default: "bg-secondary/50",
    warning: "bg-warm",
    highlight: "bg-primary/5",
  }[variant];

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <div className={`rounded-lg p-4 ${bgColor}`}>
        {items ? (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex items-start">
                  {item.icon && (
                    <span className="text-accent mr-2">
                      {iconMap[item.icon]}
                    </span>
                  )}
                  <div className="space-y-2 flex-1">
                    <span
                      className={item.highlight ? "font-medium" : "text-muted"}
                    >
                      {item.text}
                    </span>
                    {item.description && (
                      <p className="text-sm text-muted ml-6">
                        {item.description}
                      </p>
                    )}
                    {item.subItems && (
                      <ul className="ml-6 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-sm text-muted flex items-start"
                          >
                            <span className="text-accent mr-2">•</span>
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.note && (
                      <p className="text-sm text-accent ml-6">{item.note}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
