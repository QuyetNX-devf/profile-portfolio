import Link from "next/link";
import { Navs } from "./Navs";
import { MobileNavs } from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-4 sticky top-0 left-0 z-50 bg-primary">
      <div className="container flex items-center justify-between ">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Quety
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* nav */}
        <div className="hidden lg:flex">
          <Navs />
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNavs />
        </div>
      </div>
    </header>
  );
};
