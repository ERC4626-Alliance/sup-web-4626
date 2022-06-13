import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { useEffect } from "react";
import { linksResources } from "@/config/data";
import { IoLogoGithub } from "react-icons/io";

const Resources = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.3.1/lite-youtube.js"
    );
    s.setAttribute("async", "true");
    s.setAttribute("defer", "true");
    s.setAttribute("type", "module");
    document.head.appendChild(s);
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-t from-pink-100 pt-8 pb-16 text-center"
        id="resources"
      >
        <Container>
          <>
            <AtomTitle alignText="center" subtitle="Explore relevant resources">
              ERC4626 RESOURCES
            </AtomTitle>
            <ul className="flex flex-row flex-wrap justify-center gap-6">
              {linksResources.repositories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener group"
                    className={`inline-flex items-center whitespace-nowrap rounded-lg border border-pink-600/10 py-3.5 pl-2.5 pr-4 text-sm shadow-sm md:text-base ${
                      item.highlight ? "font-bold" : "font-medium"
                    } group bg-white text-pink-700 underline-offset-4 hover:underline`}
                  >
                    <IoLogoGithub
                      className={`-ml-0.5 mr-1.5 h-4 w-4 md:h-8 md:w-8 ${
                        item.highlight ? "opacity-75" : "opacity-25"
                      } md:group-hover:opacity-100`}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-pink-700 to-pink-900 py-16 text-center">
        <AtomTitle inverted={true} alignText="center">
          Learn by watching
        </AtomTitle>
        <Container>
          <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
            {linksResources.videos.map(
              (
                {
                  href,
                  videoId,
                }: { name: string; href: string; videoId: string },
                index
              ) => (
                <div key={`video-${index}`} className="group relative">
                  <div className="aspect-w-4 h-auto overflow-hidden rounded-lg bg-gray-100">
                    {/* @ts-ignore */}
                    <lite-youtube
                      videoid={videoId}
                      params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                      className="w-full max-w-full object-contain object-center"
                    />
                  </div>
                  <div className="flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-pink-700 underline-offset-4 backdrop-blur backdrop-filter hover:bg-opacity-100 hover:underline"
                    >
                      Watch on youtube ↗
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
export default Resources;
