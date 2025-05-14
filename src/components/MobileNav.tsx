import Link from "next/link";
import { NavLink } from "./NavLink";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];
export const MobileNavs = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[26px] text-accent" />
      </SheetTrigger>
      <SheetContent className="bg-primary text-center z-50 border-none">
        <SheetTitle>menu</SheetTitle>
        <div className="mt-32 flex flex-col gap-4 p-4">
          <Link href="/">
            <h1 className="text-3xl font-bold mb-8">
              Quety<span className="text-accent">.</span>
            </h1>
          </Link>
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} className="hover:text-accent">
              <SheetClose key={index}>{link.name}</SheetClose>
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
