import Link from "next/link";
import { FC } from "react";
import { SocialIcon } from "../SocialIcon";
import { Social } from "@/types/api/social";

interface Props {
  title: Social["title"];
  url: string;
  subtitle?: string; // e.g. @handle
}

export const SocialCard: FC<Props> = function SocialCard({
  title,
  url,
  subtitle,
}) {
  const color = getBackgroundColor(title);

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative block overflow-hidden rounded-[0.75rem]
        min-h-[60px]
        bg-black/35
        p-3
        shadow-[0_20px_70px_rgba(0,0,0,0.65)]
        backdrop-blur-2xl
        transition-all duration-200
        hover:-translate-y-1.5
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.8)]
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(${color}, 0.55) 0%,
            rgba(${color}, 0.20) 75%,
            rgba(0, 0, 0, 0.05) 100%
          )
        `,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-0">
        <SocialIcon title={title} />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="text-[11px] tracking-[0.3em] text-white/45">
            PLATFORM
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
            {title}
          </div>

          {subtitle && (
            <div className="mt-1 text-sm text-white/60">
              {subtitle}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white/75">
            Visit profile ↗
          </div>
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