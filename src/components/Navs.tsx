import Link from "next/link";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];
export const Navs = () => {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <NavLink key={link.name} href={link.href} className="hover:text-accent">
          {link.name}
        </NavLink>
      ))}
      <Link href="/contact">
        <Button className="bg-accent text-black rounded-[20px] cursor-pointer">
          Hire me
        </Button>
      </Link>
    </nav>
  );
};
