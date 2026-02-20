import { Social } from "@/types/api/social";
import { FC } from "react";
import { SocialIcon as SocialIconComponent } from "react-social-icons";

export const SocialIcon: FC<{ title: Social["title"] }> = function SocialIcon({ title }) {
  switch (title) {
    case "X(Twitter)":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://x.com" as="div" bgColor="#ffffff00" />
        </div>
      );
    case "BlueSky":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://bsky.app/" as="div" bgColor="#ffffff00" />
        </div>
      );
    case "Twitch":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://www.twitch.tv/" as="div" bgColor="#ffffff00" />
        </div>
      );
    case "YouTube":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent
            url="https://www.youtube.com/channel/UCf3WKOH1RLzoicvwIBoVBNg"
            as="div"
            bgColor="#ffffff00"
          />
        </div>
      );
    case "SoundCloud":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://soundcloud.com/" as="div" bgColor="#ffffff00" />
        </div>
      );
    case "Ko-Fi":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://ko-fi.com/" as="div" bgColor="#ffffff00" />
        </div>
      );
      case "Discord":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://discord.com" as="div" bgColor="#ffffff00" />
        </div>
      );
      case "Bandcamp":
      return (
        <div className="absolute right-5 top-3.5 scale-360 opacity-[0.12] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.42]">
          <SocialIconComponent url="https://www.bandcamp.com" as="div" bgColor="#ffffff00" />
        </div>
      );

    default:
      return null;
  }
};
