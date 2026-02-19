"use client";
// import { usePlayer } from "@/app/providers";
import { SoundCloudTrackData } from "@/types/api/soundcloudTrackData";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  track: SoundCloudTrackData;
}
export const TrackCard: FC<Props> = function TrackCard({ track }) {
  const { thumbnail_url,title, track_url, artist, artist_url } = track;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
      {thumbnail_url && (
        <div className="relative aspect-square w-full">
          <Image
            src={thumbnail_url}
            alt={title ?? ""}
            width="500"
            height="500"
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-200 group-hover:scale-110"
          // onClick={() => onPlayPauseButtonClicked(!isPlaying)}
        >
          <Link title={title} target="_blank" href={track_url}>
            <svg viewBox="0 0 24 24" width="45" height="45" fill="currentColor">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-medium tracking-tight text-white hover:underline">
          <Link href={track_url} target="_blank">
            {title}
          </Link>
        </div>
        <div className="font-medium tracking-tight text-white hover:underline -mt-2">
          <Link href={artist_url} target="_blank">
            <small>
              {artist}
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
};
