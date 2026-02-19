"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
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

        <button className="md:hidden text-sm tracking-[0.2em] opacity-90 bold" onClick={() => setOpen(true)}>
          MENU
        </button>
      </div>
          {open && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-sm tracking-[0.2em] opacity-80"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </button>

          {navItems.map((i) => (
            <Link
              key={i.url}
              href={i.url}
              onClick={() => setOpen(false)}
              className={`text-xl tracking-[0.25em] ${
                pathname === i.url ? "text-white" : "text-white/70"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
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
