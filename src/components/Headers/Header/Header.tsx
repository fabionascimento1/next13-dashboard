import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const header = tv({
  base: "absolute inset-x-0 top-0 z-50",
  variants: {
    fullwidth: {
      default: "",
      no: "container mx-auto max-w-screen-xl p-4 lg:w-full p-2",
    },
  },
  defaultVariants: {
    fullwidth: "default",
  },
});

type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header> & {
    logo: JSX.Element;
    navigation: {
      name: string;
      href: string;
    }[];
  };

export default function Header({
  fullwidth,
  logo,
  navigation,
  ...props
}: HeaderProps) {
  return (
    <header className={header({ fullwidth })} {...props}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">{logo}</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
