import { Club } from "./club";

export type SoundCloudTrackData = {
  title: string | undefined
  artist: string | undefined
  track_url: string
  permanent_track_url: string
  thumbnail_url: string | undefined
  html: TrustedHTML | undefined
  club: Club
  artist_url: string
};