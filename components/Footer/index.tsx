import Link from "next/link";
import { memo } from "react";

export const Footer = memo(function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 h-auto md:h-9 bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-center gap-1 py-2 text-[11px] text-white/60 md:h-9 md:flex-row md:justify-between md:gap-0 md:py-0">
        <span>© {new Date().getFullYear()} Carroussel. All rights reserved.</span>
        <Link href="mailto:carroussel01@outlook.com" className="hover:text-white hover:underline underline-offset-4">
          carroussel01@outlook.com
        </Link>
        <span className="text-white/40">Powered by Next.js</span>
      </div>
    </footer>
  );
});
