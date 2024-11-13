import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
}

const Button = ({ children, className, size = "medium"}: ButtonProps) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  }

  return (
    <button className={twMerge("text-textBlack bg-white rounded-full", className, sizeClassNames[size])}>
        {children}
    </button>
  )
}

export default Button