import ExportedImage from "next-image-export-optimizer";
import AtomTitle from "@/components/Atom/Title";

const Adopters = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50" id="adopters">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 lg:px-8 text-center">
        <AtomTitle alignText="center">ERC-4626 EARLY ADOPTERS</AtomTitle>
      </div>
      <section className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap flex-row justify-center space-x-2">
          {[
            { src: "alchemix.svg", alt: "Alchemix", link: "https://alchemix.fi/" },
            { src: "balancer.svg", alt: "Balancer", link: "https://balancer.fi" },
            { src: "fei.svg", alt: "Fei", link: "https://fei.money" },
            { src: "maple.svg", alt: "Maple", link: "https://maple.finance" },
            { src: "mstable.svg", alt: "mStable", link: "https://mstable.org" },
            { src: "openzeppelin.svg", alt: "OpenZeppelin", link: "https://openzeppelin.com" },
            { src: "rari.png", alt: "Rari", link: "https://rari.capital/" }
          ].map((logo: { src: string; alt: string; link?: string }, index) => (
            <a href={logo.link} target="_blank" rel="nofollow noreferrer" className="adopter-container" key={`image-${index}`}
               id={`Adopter${logo.alt[0].toUpperCase()}${logo.alt.substring(1).toLowerCase()}Logo`}>
              <ExportedImage src={`images/logos/${logo.src}`} alt={logo.alt} layout="raw" height="170px" width="170px"/>
            </a>
          ))}
        </div>
      </section>
    </div>);
};
export default Adopters;
