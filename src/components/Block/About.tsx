import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import Image from "next/future/image";

export default function About() {
  return <div className="relative overflow-hidden uiBlock lightBackground">
    <div aria-hidden="true" className="absolute inset-x-0 top-4 h-48 " />
    <Container>
      <div className="mx-auto py-16 md:grid lg:grid-cols-12 lg:gap-20 lg:py-32">
        <div className="md:col-span-5 md:text-left" data-aos="fade-right">
          <AtomTitle>WHAT IS ERC-4626?</AtomTitle>
          <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
            <code className="mr-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-4626</code>
            is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those tokens to provide token rewards to the depositor.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
            Standardizing vault implementations makes it easier for applications, plugins, and tools to integrate with vaults.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
            Rather than building many custom adapters for each vault implementation, applications can easily build on top of any vault following the
            <code className="mx-1 select-none whitespace-nowrap rounded-lg bg-pink-100 dark:bg-pink-900 px-2 py-1">ERC-4626</code>
            standard.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
            <code className="mr-1 select-none whitespace-nowrap rounded-lg bg-pink-100 dark:bg-pink-900 px-2 py-1">ERC-4626</code>
            is to vaults what
            <code className="mx-1 select-none  whitespace-nowrap rounded-lg bg-pink-100 dark:bg-pink-900 px-2 py-1">ERC-721</code>
            is to NFTs.
          </p>
        </div>
        <div className="relative h-auto w-full object-scale-down md:col-span-7" data-aos="fade-left">
          <Image
            priority={false}
            unoptimized={true}
            src="images/superCharged.svg"
            width={823}
            height={370}
            loading="lazy"
            className="w-full 2xl:h-full 2xl:w-auto dark:hidden"
            alt="WHAT IS ERC-4626?"
          />
          <Image
            priority={false}
            unoptimized={true}
            src="images/superCharged-dark.svg"
            width={823}
            height={370}
            loading="lazy"
            className="w-full 2xl:h-full 2xl:w-auto hidden dark:block"
            alt="WHAT IS ERC-4626?"
          />
        </div>
      </div>
    </Container>
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
      <Container>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-20 lg:py-32">
          <div className="relative mx-auto w-full pb-10 md:col-span-7 md:row-auto md:mx-0 md:mt-0 md:max-w-none md:pb-0" data-aos="fade-right">
            <Image
              priority={false}
              width={823}
              height={370}
              src="images/superRobust.svg"
              className="w-full 2xl:h-full 2xl:w-auto dark:hidden"
              alt="WHAT IS ERC-4626?"
              loading="lazy"
              unoptimized={true}
            />
            <Image
              priority={false}
              width={823}
              height={370}
              src="images/superRobust-dark.svg"
              className="w-full 2xl:h-full 2xl:w-auto hidden dark:block"
              alt="WHAT IS ERC-4626?"
              loading="lazy"
              unoptimized={true}
            />
          </div>
          <div className="col-span-full row-span-1 md:col-span-5 md:row-auto md:mx-auto md:text-left" data-aos="fade-left">
            <AtomTitle>WHY ERC-4626?</AtomTitle>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              A lack of standardization for tokenized vaults makes integration and composability difficult. Lending markets, aggregators, and other interest-bearing tokens all
              might use a vault standard – without a standard implementation, each protocol needs to implement their own adapter, leading to more errors, more attack vectors, and
              wasted development resources
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              A standard for tokenized vaults will lower the integration effort for yield-bearing vaults, while creating more consistent and robust implementation patterns.
            </p>
          </div>
        </div>
      </Container>
    </div>
  </div>;
}