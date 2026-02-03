"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-4">
        <Link href="/" className="font-semibold tracking-wider">
          CARROUSSEL
        </Link>
        {/* maybe replace this with logo? */}

        <nav className="hidden gap-6 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.url}
              href={i.url}
              className={`text-sm tracking-[0.2em] opacity-90 hover:opacity-100 bold ${(pathname == i.url) ? 'text-red' : ''}`}
              style={{ lineHeight: "60px" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-sm tracking-[0.2em] opacity-90 bold">
          MENU
        </button>
      </div>
    </header>
  );
}

const navItems = [
  {
    url: "/sets",
    label: "SETS",
  },
  {
    url: "socials",
    label: "SOCIALS",
  },
] as const;
