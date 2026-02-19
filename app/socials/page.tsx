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
  if (loading) {
    return null;
  }
  return (
    <div className="relative bg-black/30 rounded-xl text-white p-10 backdrop-blur-xl flex flex-col gap-3">
      {socials.map((social) => <SocialCard key={social.url} {...social} />)}
    </div>
  );
}
