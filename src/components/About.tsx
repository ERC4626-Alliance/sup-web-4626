import AtomTitle from "components/Atom/Title";
import Container from "@/components/Container";
import ExportedImage from "next-image-export-optimizer";

const About = () => (
  <div className="relative bg-white pt-16">
    <div aria-hidden="true" className="absolute inset-x-0 top-4 h-48 " />
    <Container>
      <div className="mx-auto py-16 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-32">
        <div className="lg:col-span-5 lg:text-left" data-aos="fade-right">
          <AtomTitle>WHAT IS ERC-4626?</AtomTitle>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            <code className="select-none rounded-lg bg-pink-100 px-2 py-1">
              ERC-4626
            </code>
            is a tokenized vault standard. Vaults are smart contracts that take
            in token deposits and do something with those tokens to provide
            token rewards to the depositor.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            Standardizing vault implementations makes it easier for
            applications, plugins, and tools to integrate with vaults.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            Rather than building many custom adapters for each vault
            implementation, applications can easily build on top of any vault
            following the
            <code className="select-none rounded-lg bg-pink-100 px-2 py-1">
              ERC-4626
            </code>
            standard.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            <code className="select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1">
              ERC-4626
            </code>
            is to vaults what
            <code className="select-none rounded-lg bg-pink-100 px-2 py-1">
              ERC-721
            </code>
            is to NFTs.
          </p>
        </div>
        <div
          className="relative mt-12 h-auto w-full lg:col-span-7"
          data-aos="fade-left"
        >
          <ExportedImage
            placeholder="blur"
            src="images/superCharged.webp"
            layout="raw"
            width={796}
            height={358}
            loading="lazy"
            className="inline-flex w-full rounded-lg border border-pink-100 shadow-lg lg:h-full lg:w-auto lg:max-w-none"
            alt="WHAT IS ERC-4626?"
          />
        </div>
      </div>
    </Container>
    <div className="relative overflow-hidden py-16 lg:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />

      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          <div
            className="relative mx-auto w-full w-full pb-10 lg:col-span-7 lg:row-auto lg:mx-0 lg:mt-0 lg:max-w-none lg:pb-0"
            data-aos="fade-right"
          >
            <ExportedImage
              layout="raw"
              placeholder="blur"
              width={796}
              height={358}
              src="images/stars4626.webp"
              className="inline-flex w-full rounded-lg border border-pink-100 shadow-lg lg:h-full lg:w-auto lg:max-w-none"
              alt="WHAT IS ERC-4626?"
              loading="lazy"
            />
          </div>
          <div
            className="col-span-full row-span-1 md:mx-auto lg:col-span-5 lg:row-auto lg:text-left"
            data-aos="fade-left"
          >
            <AtomTitle>WHY ERC-4626?</AtomTitle>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Tokenized Vaults have a lack of standardization leading to diverse
              implementation details.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Some various examples include lending markets, aggregators, and
              intrinsically interest bearing tokens. This makes integration
              difficult at the aggregator or plugin layer for protocols which
              need to conform to many standards, and forces each protocol to
              implement their own adapters which are error prone and waste
              development resources.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              A standard for tokenized Vaults will lower the integration effort
              for yield-bearing vaults, while creating more consistent and
              robust implementation patterns.
            </p>
          </div>
        </div>
      </Container>
    </div>
  </div>
);
export default About;
