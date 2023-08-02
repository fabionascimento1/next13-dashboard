import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const input = tv({
  base: "rounded bg-zinc-200 px-4 py-1.5 text-sm font-medium text-gray-500",
  variants: {
    contained: {
      default: "",
      primary: "bg-primary-100 hover:bg-blue-700",
    },
    size: {
      default: "h-10, px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
  },
  defaultVariants: {
    contained: "default",
    size: "default",
  },
});

type TextFieldProps = ComponentProps<"input"> &
  VariantProps<typeof input> & {
    label?: string;
    placeholder?: string;
    type?: "text" | "password" | "number";
    icon?: JSX.Element;
  };

export function Textfield({
  contained,
  size,
  label = "Label default",
  placeholder = "Placeholder default",
  type = "text",
  icon,
  ...props
}: TextFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={input({ contained, size })}
      {...props}
    />
  );
}
