import Link from "next/link";

type Props = {
  to: string;
  label: string;
};

export function LinkCustom({ to, label }: Props) {
  return <Link href={to}>{label}</Link>;
}
