import Link from "next/link";
import { FC } from "react";
import { SocialIcon } from "../SocialIcon";
import { Social } from "@/types/api/social";

interface Props {
  title: Social["title"];
  url: string;
  subtitle?: string; // e.g. @handle
}

export const SocialCard: FC<Props> = function SocialCard({ title, url, subtitle }) {
  return (
    <Link
      href={url}
      target="_blank"
      className={`
        group relative block overflow-hidden rounded-3xl
        min-h-[60px] sm:min-h-[80px]
        bg-black/35 backdrop-blur-2xl
        shadow-[0_20px_70px_rgba(0,0,0,0.65)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_32px_90px_rgba(0,0,0,0.85)]
        focus:outline-none focus:ring-2 focus:ring-white/25
        flex
        items-center justify-center
      `}
      style={{
        background: `linear-gradient(
          to left,
          rgba(${getBackgroundColor(title)}, 0.60) 0%,
          rgba(${getBackgroundColor(title)}, 0.45) 35%,
          rgba(${getBackgroundColor(title)}, 0.30) 60%,
          rgba(${getBackgroundColor(title)}, 0.25) 80%,
          rgba(${getBackgroundColor(title)}, 0.15) 100%
        )`,
      }}
    >
      <div className="absolute inset-0">
        <SocialIcon title={title} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="flex items-center justify-center">
        <div className="font-medium tracking-tight text-white/80 text-center transition-colors duration-300 group-hover:text-white">
          <div className="text-xl">{title}</div>
          {subtitle && <div className="text-sm">{subtitle}</div>}
        </div>
      </div>
    </Link>
  );
};

const getBackgroundColor = (title: Social["title"]) => {
  switch (title) {
    case "X(Twitter)":
      return "0,0,0";
    case "BlueSky":
      return "29,161,242";
    case "Twitch":
      return "145,70,255";
    case "YouTube":
      return "255,0,0";
    case "SoundCloud":
      return "255,85,0";
    case "Ko-Fi":
      return "41,171,224";
    case "Discord":
      return "114,137,218";
    case "Bandcamp":
      return "98,154,169";
    default:
      return "0,0,0";
  }
};
