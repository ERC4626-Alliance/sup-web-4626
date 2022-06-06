import AtomTitle from "./Atom/Title";
import ExportedImage from "next-image-export-optimizer";

export default function Adopters2() {
  const adopters = [
    { src: "alchemix.svg", alt: "Alchemix", link: "https://alchemix.fi/" },
    { src: "balancer.svg", alt: "Balancer", link: "https://balancer.fi" },
    { src: "fei.svg", alt: "Fei", link: "https://fei.money" },
    { src: "maple.svg", alt: "Maple", link: "https://maple.finance" },
    { src: "mstable.svg", alt: "mStable", link: "https://mstable.org" },
    { src: "openzeppelin.svg", alt: "OpenZeppelin", link: "https://openzeppelin.com" },
    { src: "rari.png", alt: "Rari", link: "https://rari.capital/" }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 pt-16" id="adopters">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <AtomTitle alignText="center">ERC-4626 EARLY ADOPTERS</AtomTitle>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between items-center lg:-ml-4">
              {adopters.map((logo: { src: string; alt: string; link?: string }, index) => (
                <a
                  href={logo.link}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="my-4 mx-5 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0"
                  key={`adopter-${index}`}>
                  <ExportedImage src={`images/logos/${logo.src}`} layout={"raw"} height="0" width="0" alt={logo.alt} className="h-10 w-auto max-w-10"/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
