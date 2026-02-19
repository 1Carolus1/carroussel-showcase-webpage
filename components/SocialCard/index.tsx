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
      style={{ backgroundColor: getBackgroundColor(title) }}
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
      return "rgba(0,0,0,0.35)";
    case "BlueSky":
      return "rgba(29,161,242,0.35)";
    case "Twitch":
      return "rgba(145,70,255,0.35)";
    case "YouTube":
      return "rgba(255,0,0,0.35)";
    case "SoundCloud":
      return "rgba(255,85,0,0.35)";
    case "Ko-Fi":
      return "rgba(41,171,224,0.35)";
    case "Discord":
      return "rgba(114,137,218,0.35)";
    case "Bandcamp":
      return "rgba(98,154,169,0.35)";
    default:
      return "rgba(0,0,0,0.35)";
  }
};
