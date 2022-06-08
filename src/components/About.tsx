import AtomTitle from "components/Atom/Title";
import ExportedImage from "next-image-export-optimizer";
import Container from "./Container";

const About = () => (<div className="bg-white relative pt-16">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-4 h-48 "
    />
    <Container>
      <div className="py-16 mx-auto lg:py-32 lg:grid lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5 lg:text-left"
             data-aos="fade-right"
             data-aos-delay="100"
             data-aos-duration="600"
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
          className="mt-12 relative w-full h-auto lg:col-span-7"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <ExportedImage
            src="images/superCharged.png"
            layout="raw"
            width="440"
            height="693"
            className="shadow-lg inline-flex border border-pink-100 rounded-lg w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            alt="WHAT IS ERC-4626?" />
        </div>
      </div>
    </Container>
    <div className="relative py-16 lg:py-32 overflow-hidden">

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 "
      />

      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          <div
            className="lg:row-auto relative w-full sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7 w-full pb-10 lg:pb-0"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            <ExportedImage
              src="images/stars4626.png"
              layout="raw"
              width="440"
              height="693"
              className="shadow-lg border border-pink-100 rounded-lg lg:absolute lg:left-0 w-full object-fill h-auto"
              alt="WHAT IS ERC-4626?" />
          </div>
          <div
            className="row-span-1 col-span-full lg:row-auto md:mx-auto lg:col-span-5 lg:text-left"
            data-aos-duration="600"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <AtomTitle alignText="center">WHY ERC-4626?</AtomTitle>
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
        </div>
      </Container>
    </div>
  </div>);
export default About;
