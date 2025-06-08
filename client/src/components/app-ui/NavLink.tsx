"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-gray-600 transition-colors duration-200 hover:text-main-500",
        className,
        isActive && "text-main-500"
      )}
    >
      {children}
    </Link>
  );
}
