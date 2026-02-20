import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Providers } from "./providers";
import { Player } from "@/components/Player";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carroussel.live"),
  title: {
    default: "Carroussel",
    template: "%s · Carroussel",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Carroussel",
    description: "Carroussel is a DJ/producer based in Madrid, Spain. This is their official website, where you can find their music, and social media links.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Carroussel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carroussel",
    description: "Carroussel is a DJ/producer based in Madrid, Spain. This is their official website, where you can find their music, and social media links.",
    images: ["/og.jpg"],
  },
  description: "Carroussel is a DJ/producer based in Madrid, Spain. This is their official website, where you can find their music, and social media links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-dvh bg-black text-white">
          <Navbar />
          <VideoPlayer />
          <div className="content-wrapper relative z-5 px-[10vw] pt-[10vh]">
            <Providers>
              {children}
              <Player />
            </Providers>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
