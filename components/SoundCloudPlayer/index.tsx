import { memo } from "react";

interface Props {
  url: string | undefined | null
  title: string
}

export const SoundcloudPlayer = memo(function SoundCloudPlayer({ url, title }: Props) {
  if(!url) {
    return null;
  }

  const src = `https://w.soundcloud.com/player/?visual=true&url=${encodeURIComponent(url)}&show_artwork=true&maxheight=120&auto_play=true`;

  return <iframe title={title} width="100%" height="120" allow="autoplay" frameBorder="no" src={src} />;
});