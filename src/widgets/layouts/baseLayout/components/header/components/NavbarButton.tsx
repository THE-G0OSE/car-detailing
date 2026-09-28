"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  path: string;
}

export const NavbarButton: React.FC<IProps> = ({ title, path }) => {
    const activePath = usePathname()

  return <Link className={`h-9 px-2 py-1 text-[15px] ${activePath === path && "border-b border-logo-red"}`} href={path}>{title}</Link>;
};
