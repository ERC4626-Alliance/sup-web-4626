import { FunctionComponent } from "react";
import Image from "next/image";
import superChargedSrc from "../../public/imgs/superCharged.png";
import stars4626Src from "../../public/imgs/stars4626.png";
import Container from "components/container";

const About: FunctionComponent = () => {
  const superCharged = Image({
    src: superChargedSrc,
    className: "w-full object-contain rounded-xl shadow-xl object-contain",
    alt: "Supercharged"
  });
  const stars4626 = Image({
    src: stars4626Src,
    className: "w-full object-contain rounded-xl shadow-xl object-contain",
    alt: "stars4626Src"
  });

  return (
    <div className="min-h-48 bg-white relative pt-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-4 h-48 bg-gradient-to-b from-pink-50"
      />
      <Container>
        <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:py-6 lg:pt-32 lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="sm:text-center md:max-w-lg md:mx-auto lg:col-span-5 lg:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                    WHAT IS ERC-4626?
                  </span>
            </h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              ERC-4626 is a tokenized vault standard. Vaults are smart
              contracts that take in token deposits and do something
              with those tokens to provide token rewards to the
              depositor. Standardizing vault implementations makes it
              easier for applications, plugins, and tools to integrate
              with vaults. Rather than building many custom adapters for
              each vault implementation, applications can easily build
              on top of any vault following the ERC-4626 standard.
              ERC-4626 is to vaults what ERC-721 is to NFTs.
            </p>
          </div>
          <div className="mt-12 relative w-full sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7">
            {superCharged}
          </div>
        </div>
      </Container>
      <div className="mt-24 relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-pink-50"
        />
        <section className="mt-24 pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:py-6 lg:pt-32 lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="mt-12 relative w-full sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7">
            {stars4626}
          </div>
          <div className="sm:text-center md:max-w-lg md:mx-auto lg:col-span-4 lg:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                    WHY ERC-4626?
                  </span>
            </h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Tokenized Vaults have a lack of standardization leading to
              diverse implementation details. Some various examples
              include lending markets, aggregators, and intrinsically
              interest bearing tokens. This makes integration difficult
              at the aggregator or plugin layer for protocols which need
              to conform to many standards, and forces each protocol to
              implement their own adapters which are error prone and
              waste development resources. A standard for tokenized
              Vaults will lower the integration effort for yield-bearing
              vaults, while creating more consistent and robust
              implementation patterns.
            </p>
          </div>
        </section>
      </div>
    </div>);
};
export default About;
