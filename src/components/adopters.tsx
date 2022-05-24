import { FunctionComponent } from "react";
import Image from "next/image";

import logo__Alchemix from "../../public/imgs/logo__Alchemix.png";
import logo__Balancer from "../../public/imgs/logo__Balancer.png";
import logo__Fei from "../../public/imgs/logo__Fei.png";
import logo__Maple from "../../public/imgs/logo__Maple.png";
import logo__mStable from "../../public/imgs/logo__mStable.png";
import logo__OpenZeppelin from "../../public/imgs/logo__OpenZeppelin.png";
import logo__Rari from "../../public/imgs/logo__Rari.png";

const Adopters: FunctionComponent = () => {
  const logos = [] as JSX.Element[];
  logos.push(Image({
    src: logo__Alchemix,
    alt: "Alchemix",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__Balancer,
    alt: "Balancer",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__Fei,
    alt: "Fei",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__Maple,
    alt: "Maple",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__mStable,
    alt: "mStable",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__OpenZeppelin,
    alt: "OpenZeppelin",
    className: "h-auto object-contain"
  }));
  logos.push(Image({
    src: logo__Rari,
    alt: "Rari",
    className: "h-auto object-contain"
  }));

  return (
    <div className="bg-gradient-to-b from-pink-50">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 ">
        <h2 className="text-center  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 EARLY ADOPTERS
              </span>
        </h2>
        <a id="adopters"/>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          {logos.map((logo, index) => (
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1" key={`image-${index}`}>
              {logo}
            </div>
          ))}
        </div>
      </section>
    </div>);
};
export default Adopters;
