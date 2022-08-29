import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import ExportedImage from "next-image-export-optimizer";
import { SupSingleAdopter } from "@/types";

export default function Adopters() {
  const adopters = [
    [
      {
        src: "alchemix.svg",
        title: "Alchemix",
        url: {
          web: "https://alchemix.fi/",
        },
        extra: {
          unoptimized: true,
        },
      },
      {
        url: { web: "https://aura.finance" },
        src: "aura.png",
        title: "Aura Finance",
      },
      {
        src: "balancer.svg",
        title: "Balancer",
        url: { web: "https://balancer.fi" },
        extra: {
          unoptimized: true,
        },
      },
      {
        url: { web: "https://www.element.fi/" },
        src: "element-fi.svg",
        title: "Element Protocol",
        extra: {
          unoptimized: true,
        },
      },
    ],
    [
      {
        src: "fei.svg",
        title: "Fei",
        url: { web: "https://fei.money" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "maple.svg",
        title: "Maple",
        url: { web: "https://maple.finance" },
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "maximizer.svg",
        title: "maximizer",
        url: { web: "https://www.maxi.xyz/" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "midas.png",
        title: "Midas Capital",
        url: { web: "https://www.midascapital.xyz/" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "mstable.svg",
        title: "mStable",
        url: { web: "https://mstable.org" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "openzeppelin.svg",
        title: "OpenZeppelin",
        url: { web: "https://openzeppelin.com" },

        extra: {
          unoptimized: true,
        },
      },

      {
        src: "rari.png",
        title: "Rari Capital",
        url: { web: "https://rari.capital/" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "timeless.png",
        title: "Timeless Protocol",
        url: { web: "https://timelessfi.com/" },
      },
    ],
    [
      {
        url: { web: "https://thorswap.finance" },
        src: "thorswap.png",
        title: "THORSwap",
      },
      {
        src: "tribe-dao.svg",
        title: "Tribe DAO",
        url: { web: "https://tribedao.xyz/governance/proposals/FIP-103" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "yearn.finance.svg",
        title: "Yearn Finance",
        url: { web: "https://yearn.finance" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "yieldprotocol.svg",
        title: "Yield Protocol",
        url: { web: "https://yieldprotocol.com" },

        extra: {
          unoptimized: true,
        },
      },
    ],
  ] as Array<SupSingleAdopter[]>;
  return (
    <div
      className="relative w-full bg-gradient-to-b from-pink-50 py-16 overflow-hidden"
      id="adopters"
    >
      <Container className="mx-auto max-w-7xl md:w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center xl:grid-cols-3 2xl:grid-cols-2 mx-auto place-content-evenly">
          <div className="col-span-1 px-8 md:px-0 text-left md:mx-auto md:max-w-2xl xl:max-w-none lg:pr-16 xl:text-left">
            <AtomTitle alignText="left">
              ERC-4626 <br /> EARLY ADOPTERS
            </AtomTitle>
            <p className="text-lg text-pink-600">
              Test an actual standard implementation
            </p>
          </div>

          <div className="col-span-full lg:col-span-2 2xl:col-span-1 relative mt-8 sm:mt-12 lg:mx-auto lg:max-w-4xl xl:mt-0 xl:max-w-none">
            <div className="absolute inset-8 md:inset-16">
              <div
                className="mx-auto h-full w-full rotate-180 rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="xl:-ml-16 2xl:ml-0 relative space-y-5">
              {adopters.map((itemsList: SupSingleAdopter[], index: number) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-5 sm:grid-cols-4 ${
                    index > 0
                      ? index === 1
                        ? "xl:translate-x-6"
                        : "xl:translate-x-12"
                      : ""
                  }`}
                >
                  {itemsList.map(
                    (item: SupSingleAdopter, adopterKey: number) => (
                      <a
                        href={item.url.web}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mx-auto flex w-8/12 flex-col items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-3 shadow-lg md:w-full md:px-6 md:py-4 md:hover:md:hover:bg-white/50"
                        key={`adopter-${index}-${adopterKey}`}
                      >
                        <ExportedImage
                          src={`images/logos/${item.src}`}
                          layout="raw"
                          loading="lazy"
                          height={128}
                          width={128}
                          alt={item.title}
                          className="h-24 w-auto object-scale-down md:h-16"
                          {...item.extra}
                        />
                        <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-center text-xl font-extrabold capitalize tracking-tight text-transparent md:text-base md:font-semibold">
                          {item.title}
                        </h3>
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
