"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={`relative ${className} ${isActive ? "text-accent" : ""}`}
    >
      {children}
    </Link>
  );
};
