import ExportedImage from "next-image-export-optimizer";
import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";

const Adopters = () => {
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
      <Container>
        <AtomTitle alignText="center">ERC-4626 EARLY ADOPTERS</AtomTitle>
        <div className="flex flex-col flex-wrap lg:flex-row items-center lg:justify-center lg:space-x-2 space-y-2 lg:space-y-0">
          {adopters.map((logo: { src: string; alt: string; link?: string }, index) => (
            <a href={logo.link} target="_blank" rel="nofollow noreferrer" className="adopter-container" key={`image-${index}`}
               id={`Adopter${logo.alt[0].toUpperCase()}${logo.alt.substring(1).toLowerCase()}Logo`}>
              <ExportedImage src={`images/logos/${logo.src}`} alt={logo.alt} layout="raw" height="170px" width="170px"/>
            </a>
          ))}
        </div>
      </Container>
    </div>);
};
export default Adopters;
