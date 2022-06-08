import { GlobeAltIcon, NewspaperIcon, PlayIcon } from "@heroicons/react/outline";
import Container from "components/Container";

import ExportedImage from "next-image-export-optimizer";
import AtomTitle from "@/components/Atom/Title";

export default function Adopters2() {
  const adopters = [
    { src: "alchemix.svg", alt: "Alchemix", link: "https://alchemix.fi/", about: "", app: "" },
    { src: "balancer.svg", alt: "Balancer", link: "https://balancer.fi", about: "", app: "" },
    { src: "fei.svg", alt: "Fei", link: "https://fei.money", about: "", app: "" },
    { src: "maple.svg", alt: "Maple", link: "https://maple.finance", about: "", app: "" },
    { src: "mstable.svg", alt: "mStable", link: "https://mstable.org", about: "", app: "" },
    { src: "openzeppelin.svg", alt: "OpenZeppelin", link: "https://openzeppelin.com", about: "", app: "" },
    { src: "rari.png", alt: "Rari", link: "https://rari.capital/", about: "", app: "" }
  ];

  return (<div className="bg-gradient-to-b from-pink-50 pt-16 w-full text-center" id="adopters">
    <Container>
      <AtomTitle alignText="center">ERC-4626 EARLY ADOPTERS</AtomTitle>
      <div className="grid grid-cols-2 gap-8 mt-8 xl:mt-16 xl:grid-cols-4 mx-auto">
        {adopters.map((logo: { src: string; alt: string; link?: string; app?: string; about?: string; }, index) => (<a
          target="_blank"
          rel="nofollow noreferrer"
          href={logo.link}
          className="flex flex-col items-center py-8 px-2 shadow-sm inline-flex border border-gray-200 bg-gradient-tr from-pink-200 shadow-sm rounded-lg"
          key={`adopter-${index}`}>
          <div className="flex flex-auto shadow-inner border border-pink-200 bg-white rounded-full overflow-clip">

            <ExportedImage
              src={`images/logos/${logo.src}`}
              layout={"raw"}
              height="128"
              width="128"
              alt={logo.alt}
              className="object-contain object-center w-24 h-24 lg:w-32 lg:h-32 p-2" />
          </div>
          <h4 className="mt-4 text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent capitalize">{logo.alt}</h4>
          {logo.link && (logo.app || logo.about) && <div className="flex -mx-2">
            {logo.app && (<a href={logo.link} className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white">
              <PlayIcon className="h-6 w-6 font-medium text-pink-700 stroke-2" />
            </a>)}

            {logo.link && (<a href={logo.link} className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white">
              <GlobeAltIcon className="h-6 w-6 font-medium text-pink-700 stroke-2" />
            </a>)}

            {logo.about && (<a href={logo.link} target="_blank" rel="nofollow noreferrer" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white">
              <NewspaperIcon className="h-6 w-6 font-medium text-pink-700 stroke-2" />
            </a>)}
          </div>}
        </a>))}
      </div>
    </Container>
  </div>);
}
