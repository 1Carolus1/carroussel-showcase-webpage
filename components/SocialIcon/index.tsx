import { Social } from "@/types/api/social";
import { FC } from "react";
import { SocialIcon as SocialIconComponent } from "react-social-icons";

export const SocialIcon: FC<{ title: Social["title"] }> = function SocialIcon({ title }) {
  return <div className="absolute right-7 top-5 scale-360 opacity-[0.05] blur-[0.2px] transition-opacity duration-300 group-hover:opacity-[0.2]">
    {getSocialIcon(title)}
  </div>
};

const getSocialIcon = (title: Social["title"]) => {
  switch (title) {
    case "X(Twitter)":
      return <SocialIconComponent url="https://x.com" as="div" bgColor="#ffffff00" />;
    case "BlueSky":
      return <SocialIconComponent url="https://bsky.app/" as="div" bgColor="#ffffff00" />;
    case "Twitch":
      return <SocialIconComponent url="https://www.twitch.tv/" as="div" bgColor="#ffffff00" />;
    case "YouTube":
      return <SocialIconComponent url="https://www.youtube.com/channel/UCf3WKOH1RLzoicvwIBoVBNg" as="div" bgColor="#ffffff00" />;
    case "SoundCloud":
      return <SocialIconComponent url="https://soundcloud.com/" as="div" bgColor="#ffffff00" />;
    case "Ko-Fi":
      return <SocialIconComponent url="https://ko-fi.com/" as="div" bgColor="#ffffff00" />;
      case "Discord":
      return <SocialIconComponent url="https://discord.com" as="div" bgColor="#ffffff00" />;
      case "Bandcamp":
      return <SocialIconComponent url="https://www.bandcamp.com" as="div" bgColor="#ffffff00" />;

    default:
      return null;
  }
};
