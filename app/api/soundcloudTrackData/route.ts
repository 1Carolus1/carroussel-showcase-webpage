import { SoundCloudTrackData } from "@/types/api/soundcloudTrackData";
import { NextResponse } from "next/server";

//TODO: AUTOMATE THIS ROUTE
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const trackUrl = searchParams.get("url");

  if (!trackUrl) {
    return NextResponse.json(
      { error: "Missing `url` query parameter" },
      { status: 400 },
    );
  }

  try {
    const oembedUrl = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(trackUrl)}&maxheight=166`;
    const resolvedTrackData = await fetch(oembedUrl, {
      next: { revalidate: 60 * 60 }, // cache for 1 hour so we don't get rate limited
    });

    if (!resolvedTrackData.ok) {
      return NextResponse.json(
        { error: "SoundCloud oEmbed request failed" },
        { status: 501 },
      );
    }

    const data = await resolvedTrackData.json();

    console.log(data);

    return NextResponse.json({
      title: data.title,
      artist: data.artist,
      track_url: trackUrl,
      thumbnail_url: data.thumbnail_url,
    } as SoundCloudTrackData);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
