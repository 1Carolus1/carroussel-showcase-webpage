"use client";
import { usePlayer } from "@/app/providers";

export const Player = function Player() {
  const playerData = usePlayer();
  if (playerData?.trackHTML) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50" dangerouslySetInnerHTML={{ __html: playerData.trackHTML }} />
    );
  }
  return null;
};
