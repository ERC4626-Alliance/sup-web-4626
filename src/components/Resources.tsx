import AtomTitle from "@/components/Atom/Title"
import Container from "@/components/Container"
import { useEffect } from "react"
import { linksResources } from "../config/data"

const Resources = () => {
  useEffect(() => {
    const s = document.createElement("script")
    s.setAttribute("src", "https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.3.1/lite-youtube.js")
    s.setAttribute("async", "true")
    s.setAttribute("defer", "true")
    s.setAttribute("type", "module")
    document.head.appendChild(s)
  }, [])
  return (<>
    <div className="mx-auto bg-gradient-to-t from-pink-100 py-16 text-center" id="resources">
      <AtomTitle>ERC4626 RESOURCES</AtomTitle>
      <p className="text-center mt-4 text-lg text-pink-600">
        Explore relevant resources
      </p>
      <Container>
        <>
          <ul className="mt-16 gap-6 flex flex-wrap flex-row justify-center">
            {linksResources.repositories.map((item) => (<li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener group"
                className={`inline-flex items-center px-2.5 py-0.5 rounded-lg whitespace-nowrap text-sm  ${item.highlight ?
                                                                                                           "font-bold" :
                                                                                                           "font-medium"} text-pink-700 hover:underline underline-offset-4 group bg-white`}
              >
                <svg fill="currentColor" viewBox="0 0 24 24"
                     className={`-ml-0.5 mr-1.5 h-8 w-8 w-4 h-4 ${item.highlight ? "opacity-75" : "opacity-25"} md:group-hover:opacity-100`}>
                  <path fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"></path>
                </svg>
                {item.name}
              </a>
            </li>))}
          </ul>
        </>
      </Container>
    </div>
    <div className="bg-gradient-to-r from-pink-700 to-pink-900 py-16 w-full text-center">
      <AtomTitle inverted={true}>Learn by watching</AtomTitle>
      <Container>
        <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
          {linksResources.videos.map(({ href, videoId }: { name: string; href: string; videoId: string; }, index) => (<div key={`video-${index}`} className="relative group">
            <div className="aspect-w-4 h-auto rounded-lg overflow-hidden bg-gray-100">
              {/* @ts-ignore */}
              <lite-youtube
                videoid={videoId}
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                className="object-center object-contain w-full max-w-full"
              />
            </div>
            <div className="flex items-end opacity-0 p-4 group-hover:opacity-100">
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-pink-700 text-center hover:bg-opacity-100 hover:underline underline-offset-4">
                Watch on youtube ↗
              </a>
            </div>
          </div>))}
        </div>
      </Container>
    </div>
  </>)
}
export default Resources
