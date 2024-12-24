"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

// web button (DOM)
export default function Button({
  onClick,
  children,
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    padding: "16px",
    borderRadius: "8px",
    width: "100%",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#00C853",
      color: "white",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "#00C853",
      border: "1px solid #00C853",
    },
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
