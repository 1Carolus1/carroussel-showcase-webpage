import { FC } from "react";
import { TrackCard } from "../TrackCard";
import { SoundCloudTrackData } from "@/types/api/soundcloudTrackData";
import './style.css';

interface Props {
  tracks: readonly SoundCloudTrackData[]
}
export const TrackList: FC<Props> = function TrackList({ tracks }) {
  return <div className="track-list">
    {tracks.length > 0 && tracks.map((track) => <TrackCard key={track.permanent_track_url} track={track} />)}
  </div>;
}