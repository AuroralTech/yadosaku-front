type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  fullWidth?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "solid",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const baseStyles = "py-2 rounded-lg transition-colors";
  const widthStyles = fullWidth ? "w-full" : "";

  const variantStyles = {
    outline:
      "bg-white hover:bg-accent/10 hover:border-accent/80 border border-accent text-accent",
    solid: "bg-primary/90 hover:bg-primary text-white shadow-sm",
  };

  return (
    <button
      className={`${baseStyles} ${widthStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
