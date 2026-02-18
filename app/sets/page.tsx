'use client'
import { TrackList } from "@/components/TrackList";
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
          const res = await fetch('/api/getSets');
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
  return <TrackList tracks={sets}/>;
}