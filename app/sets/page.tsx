"use client";
import { TrackCard } from "@/components/TrackCard";
import { SoundCloudTrackData } from "@/types/api/soundcloudTrackData";
import { useEffect, useState } from "react";

// soundcloud really doesn't provide a better way to fetch a list of tracks :<
// next step: find a way to get the tracks data and store them in a database, update them every 24h

export default function Sets() {
  const [loading, setLoading] = useState(true);
  const [sets, setSets] = useState<SoundCloudTrackData[]>([]);
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/getSets");
        const data = await res.json();
        setSets(data);
      } catch (err) {
        console.error("Failed to load sets", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(20px,3vw,40px)]">
      {sets.length > 0 && sets.map((sets) => <TrackCard key={sets.permanent_track_url} track={sets} />)}
    </div>
  );
}
