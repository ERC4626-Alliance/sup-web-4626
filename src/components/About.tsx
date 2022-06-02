import AtomTitle from "components/Atom/Title";
import ExportedImage from "next-image-export-optimizer";
import Container from "./Container";

const About = () =>
  (
    <div className="min-h-48 bg-white relative pt-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-4 h-48 bg-gradient-to-b from-pink-50"
      />
      <Container>
        <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:py-6 lg:pt-32 lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="sm:text-center md:max-w-lg md:mx-auto lg:col-span-5 lg:text-left"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1200"
          >
            <AtomTitle>WHAT IS ERC-4626?</AtomTitle>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <code className="bg-pink-100 px-2 py-1 rounded-lg select-none">ERC-4626</code> is a tokenized vault standard. Vaults are smart contracts that take in token deposits
              and do something
              with those tokens to provide token rewards to the
              depositor.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Standardizing vault implementations makes it
              easier for applications, plugins, and tools to integrate
              with vaults.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Rather than building many custom adapters for
              each vault implementation, applications can easily build
              on top of any vault following the <code className="bg-pink-100 px-2 py-1 rounded-lg select-none">ERC-4626</code> standard.</p>
            <p className="text-lg text-slate-700 leading-relaxed">
              <code className="bg-pink-100 px-2 py-1 rounded-lg select-none whitespace-nowrap">ERC-4626</code> is to vaults what <code
              className="bg-pink-100 px-2 py-1 rounded-lg select-none">ERC-721</code> is to NFTs.
            </p>
          </div>
          <div
            className="mt-12 relative w-full sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <ExportedImage
              src="images/superCharged.png"
              layout="raw"
              width="440"
              height="693"
              className="shadow-lg inline-flex border border-pink-100 rounded-lg w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              alt="WHAT IS ERC-4626?"/>
          </div>
        </div>
      </Container>
      <div className="mt-24 relative pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-pink-50"
        />
        <section className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:py-6 lg:pt-32 lg:grid lg:grid-cols-12 lg:gap-20">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="mt-12 relative w-full sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7 lg:margin -lg:ml-1/12"
          >
            <ExportedImage
              src="images/stars4626.png"
              layout="raw"
              width="440"
              height="693"
              className="shadow-lg border border-pink-100 inline-flex rounded-lg h-full w-auto object-cover object-right-top"
              alt="WHAT IS ERC-4626?"/>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="sm:text-center md:max-w-lg md:mx-auto lg:col-span-5 lg:text-left"
          >
            <AtomTitle>WHY ERC-4626?</AtomTitle>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Tokenized Vaults have a lack of standardization leading to
              diverse implementation details.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Some various examples
              include lending markets, aggregators, and intrinsically
              interest bearing tokens. This makes integration difficult
              at the aggregator or plugin layer for protocols which need
              to conform to many standards, and forces each protocol to
              implement their own adapters which are error prone and
              waste development resources.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A standard for tokenized
              Vaults will lower the integration effort for yield-bearing
              vaults, while creating more consistent and robust
              implementation patterns.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
export default About;
