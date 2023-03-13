import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import PinnedResources from "@/components/Block/PinnedResources";
import React, { useEffect } from "react";
import { linksResources } from "@/config/data";
import { IoLogoGithub } from "react-icons/io";

const Resources = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "/lite-youtube.js");
    s.setAttribute("async", "true");
    s.setAttribute("defer", "true");
    s.setAttribute("type", "module");
    document.head.appendChild(s);
  }, []);
  return (
    <>
      <div className="uiBlock lightBackground mt-24" id="resources">
        <Container>
          <>
            <AtomTitle alignText="center" subtitle="Explore relevant resources">
              ERC-4626 RESOURCES
            </AtomTitle>
            <PinnedResources />
            <ul className="flex flex-row flex-wrap justify-center gap-2 md:gap-6">
              {linksResources.repositories
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener group"
                      className="group inline-flex items-center whitespace-nowrap rounded-lg border border-pink-600/10 py-3.5 pl-2.5 pr-4 text-sm shadow-sm md:text-base group bg-white text-pink-700 underline-offset-4 md:hover:underline"
                    >
                      <IoLogoGithub className="-ml-0.5 mr-1.5 h-4 w-4 md:h-8 md:w-8 opacity-25 md:group-hover:opacity-100" />
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </>
        </Container>
      </div>
      <div className="uiBlock darkBackground">
        <AtomTitle inverted ignoreDarkMode alignText="center">
          Learn by watching
        </AtomTitle>
        <Container>
          <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
            {linksResources.videos.map(({ href, videoId }: { name: string; href: string; videoId: string }, index) => (
              <div key={`video-${index}`} className="group relative">
                <div className="aspect-w-4 h-auto overflow-hidden rounded-lg bg-gray-100">
                  {/* @ts-ignore */}
                  <lite-youtube videoid={videoId} params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" className="w-full max-w-full object-contain object-center" />
                </div>
                <div className="flex items-end p-4 md:opacity-0 md:group-hover:opacity-100">
                  <a
                    href={href}
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
    </>
  );
};
export default Resources;