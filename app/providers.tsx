"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type PlayerState = {
  trackHTML: TrustedHTML | null | undefined;
  isPlaying: boolean;
  setTrackHTML: (html: TrustedHTML | null | undefined) => void;
  setIsPlaying: (v: boolean) => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [trackHTML, setTrackHTML] = useState<TrustedHTML | null | undefined>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const value = useMemo(
    () => ({ trackHTML, isPlaying, setTrackHTML, setIsPlaying }),
    [trackHTML, isPlaying]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) return null;
  return ctx;
}