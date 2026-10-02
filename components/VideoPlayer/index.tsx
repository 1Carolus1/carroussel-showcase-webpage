'use client';
import { usePathname } from "next/navigation";

export const VideoPlayer = function VideoPlayer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="
      fixed
      inset-0
      z-0
      overflow-hidden
      transition-opacity
      duration-1000
    ">
      <video
        className="
          w-full
          h-full
          m-0
          leading-none
          border-0
          align-baseline
          object-contain
          scale-[0.9]
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://dn5d2nyf6tdckidj.public.blob.vercel-storage.com/bg_videos/visual_compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className={`
          absolute
          inset-0
          ${isHome ? "" : "backdrop-blur-[2px]"}
        `}
      />
    </div>
  );
};
