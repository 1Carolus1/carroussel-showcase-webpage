import { SoundCloudTrackData } from "@/types/api/soundcloudTrackData";
import { ClubPulse, TheTower } from "./clubs";

export const sets: SoundCloudTrackData[] = [
  {
    title: 'All Good Girls Go to Rave(1-31-26 @ pulse VR)',
    artist: '🎠Carroussel🎠',
    club: ClubPulse,
    track_url: 'https://soundcloud.com/carroussel_mp3/1-31-26-at-pulse',
    permanent_track_url: 'https://api.soundcloud.com/tracks/2258071883',
    thumbnail_url: 'https://i1.sndcdn.com/artworks-jsG3UbBpDGRadbmm-6PIzWw-t500x500.jpg',
    artist_url: 'https://soundcloud.com/carroussel_mp3',
  },
  {
    title: '1-24 1hr techno @ the tower',
    artist: '🎠Carroussel🎠',
    club: TheTower,
    track_url: 'https://soundcloud.com/carroussel_mp3/1-24-1hr-techno-the-tower',
    permanent_track_url: 'https://api.soundcloud.com/tracks/2253952178',
    thumbnail_url: 'https://i1.sndcdn.com/artworks-0gtfjNRef6oQGOI9-4x7O3g-t500x500.jpg',
    artist_url: 'https://soundcloud.com/carroussel_mp3',
  },
  {
    title: '1hr Hard Techno at the Tower 11/1/25',
    artist: '🎠Carroussel🎠',
    club: TheTower,
    track_url: 'https://soundcloud.com/carroussel_mp3/1hr-hard-techno-at-the-tower-11125',
    permanent_track_url: 'https://api.soundcloud.com/tracks/2205661539',
    thumbnail_url: 'https://i1.sndcdn.com/artworks-QiKiZkUYFjj1BPmX-CvqzqQ-t500x500.jpg',
    artist_url: 'https://soundcloud.com/carroussel_mp3',
  },
] as const;

//TODO: USE A DATABASE INSTEAD