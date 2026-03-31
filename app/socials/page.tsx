'use client';
import { SocialCard } from "@/components/SocialCard";
import { Social } from "@/types/api/social";
import { useEffect, useState } from "react";

export default function Socials() {
  const [loading, setLoading] = useState(true);
  const [socials, setSocials] = useState<Social[]>([]);
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/getSocials");
        const data = await res.json();
        setSocials(data);
      } catch (err) {
        console.error("Failed to load socials", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="mx-auto w-full">
      <div className="rounded-[2rem] bg-black/30 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 md:p-10">
        <div className="mb-8">
          <div className="text-xs tracking-[0.35em] text-white/50">
            SOCIALS
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Find me elsewhere
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Music, streams, mixes, and social links.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[120px] animate-pulse rounded-[1.75rem] bg-white/5"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social) => (
              <SocialCard key={social.url} {...social} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}