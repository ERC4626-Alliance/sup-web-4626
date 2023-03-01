import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import Image from "next/future/image";

export default function About() {
  return <div className="relative overflow-hidden bg-white">
    <div aria-hidden="true" className="absolute inset-x-0 top-4 h-48 " />
    <Container>
      <div className="mx-auto py-16 md:grid lg:grid-cols-12 lg:gap-20 lg:py-32">
        <div className="md:col-span-5 md:text-left" data-aos="fade-right">
          <AtomTitle>ERC-4626</AtomTitle>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            <code className="mr-1  select-none rounded-lg bg-pink-100 px-2 py-1">ERC-4626</code>
            is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those tokens to provide token rewards to the depositor.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            Standardizing vault implementations makes it easier for applications, plugins, and tools to integrate with vaults.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            Rather than building many custom adapters for each vault implementation, applications can easily build on top of any vault following the
            <code className="mx-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1">ERC-4626</code>
            standard.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            <code className="mr-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1">ERC-4626</code>
            is to vaults what
            <code className="mx-1 select-none  whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1">ERC-721</code>
            is to NFTs.
          </p>
        </div>
        <div className="relative mt-12 h-auto w-full object-scale-down md:col-span-7" data-aos="fade-left">
          <Image
            priority={false}
            unoptimized={true}
            src="images/superCharged.svg"
            width={823}
            height={370}
            loading="lazy"
            className="w-full rounded-lg border border-pink-100 shadow-lg 2xl:h-full 2xl:w-auto"
            alt="WHAT IS ERC-4626?"
          />
        </div>
      </div>
    </Container>
  </div>;
}