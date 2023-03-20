import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import videos from "@/content/videos.json";
import { useEffect } from "react";

export default function BlockVideos() {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "/lite-youtube.js");
    s.setAttribute("async", "true");
    s.setAttribute("defer", "true");
    s.setAttribute("type", "module");
    document.head.appendChild(s);
  }, []);
  return (
    <div className="uiBlock darkBackground">
      <AtomTitle inverted ignoreDarkMode alignText="center">
        Learn by watching
      </AtomTitle>
      <Container>
        <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
          {videos.map(({ videoId }: { name: string; videoId: string }, index) => (
            <div key={`video-${index}`} className="group relative">
              <div className="aspect-w-4 h-auto overflow-hidden rounded-lg bg-gray-100">
                {/* @ts-ignore */}
                <lite-youtube videoid={videoId} params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" className="w-full max-w-full object-contain object-center" />
              </div>
              <div className="flex items-end p-4 md:opacity-0 md:group-hover:opacity-100">
                <a
                  href={`https://youtu.be/${videoId}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-pink-700 underline-offset-4 backdrop-blur backdrop-filter hover:bg-opacity-100 hover:underline"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};