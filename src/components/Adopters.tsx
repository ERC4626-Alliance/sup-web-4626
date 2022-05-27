import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
// @ts-ignore
import logo__Alchemix from "../../public/logos/alchemix.svg";
// @ts-ignore
import logo__Balancer from "../../public/logos/balancer.svg";
// @ts-ignore
import logo__Fei from "../../public/logos/fei.svg";
// @ts-ignore
import logo__Maple from "../../public/logos/maple.svg";
// @ts-ignore
import logo__mStable from "../../public/logos/mstable.svg";
// @ts-ignore
import logo__OpenZeppelin from "../../public/logos/openzeppelin.svg";
// @ts-ignore
import logo__Rari from "../../public/logos/rari.svg";

import Title from "components/Atom/Title";

const Adopters: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50" id="adopters">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 lg:px-8 text-center">
        <Title>ERC-4626 EARLY ADOPTERS</Title>
      </div>
      <section className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap flex-row justify-center space-x-2">
          {[
            { src: logo__Alchemix, alt: "Alchemix", link: "https://alchemix.fi/" },
            { src: logo__Balancer, alt: "Balancer", link: "https://balancer.fi" },
            { src: logo__Fei, alt: "Fei", link: "https://fei.money" },
            { src: logo__Maple, alt: "Maple", link: "https://maple.finance" },
            { src: logo__mStable, alt: "mStable", link: "https://mstable.org" },
            { src: logo__OpenZeppelin, alt: "OpenZeppelin", link:"https://openzeppelin.com" },
            { src: logo__Rari, alt: "Rari", link: "https://rari.capital/" },
          ].map((logo: {src: StaticImageData; alt: string; link?: string}, index) => (
            <a href={logo.link} target="_blank" rel="nofollow noreferrer" className="adopter-container" key={`image-${index}`} id={`Adopter${logo.alt[0].toUpperCase()}${logo.alt.substring(1).toLowerCase()}Logo`}>
              <Image src={logo.src} alt={logo.alt} layout="raw"/>
            </a>
            ))}
        </div>
      </section>
    </div>);
};
export default Adopters;
