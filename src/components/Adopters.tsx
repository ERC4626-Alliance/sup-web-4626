import AtomTitle from "@/components/Atom/Title";
import Container from "components/Container";
import ExportedImage from "next-image-export-optimizer";

export default function Adopters() {
  const adopters = [
    [
      {
        src: "alchemix.svg",
        alt: "Alchemix",
        link: "https://alchemix.fi/",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "balancer.svg",
        alt: "Balancer",
        link: "https://balancer.fi",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "maple.svg",
        alt: "Maple",
        link: "https://maple.finance",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
    ],
    [
      {
        src: "tribe-dao.svg",
        alt: "Tribe DAO",
        link: "https://tribedao.xyz/governance/proposals/FIP-103",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "fei.svg",
        alt: "Fei",
        link: "https://fei.money",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "rari.png",
        alt: "Rari",
        link: "https://rari.capital/",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "midas.png",
        alt: "Midas Capital",
        link: "https://www.midascapital.xyz/",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "yieldprotocol.svg",
        alt: "Yield Protocol",
        link: "https://yieldprotocol.com",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "yield-finance.svg",
        alt: "Yield Finance",
        link: "https://yearn.finance",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
    ],
    [
      {
        src: "mstable.svg",
        alt: "mStable",
        link: "https://mstable.org",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "openzeppelin.svg",
        alt: "OpenZeppelin",
        link: "https://openzeppelin.com",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
      {
        src: "maximizer.svg",
        alt: "maximizer",
        link: "https://www.maxi.xyz/",
        about: "",
        app: "",
        extra: {
          unoptimized: true,
        },
      },
    ],
  ];
  return (
    <div
      className="relative w-full bg-gradient-to-b from-pink-50 py-16"
      id="adopters"
    >
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center xl:grid-cols-2">
          <div className="px-8 text-left md:mx-auto md:max-w-2xl xl:max-w-none xl:pr-16 xl:text-left">
            <AtomTitle alignText="left">
              ERC-4626 <br /> EARLY ADOPTERS
            </AtomTitle>
            <p className="text-lg text-pink-600">
              Test an actual standard implementation
            </p>
          </div>

          <div className="relative mt-8 sm:mt-12 lg:mx-auto lg:max-w-4xl xl:mt-0 xl:max-w-none">
            <div className="absolute inset-8 md:inset-16">
              <div
                className="mx-auto h-full w-full rotate-180 rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative space-y-5">
              {adopters.map(
                (
                  itemsList: Array<{
                    src: string;
                    alt: string;
                    link?: string;
                    app?: string;
                    about?: string;
                    extra?: any;
                  }>,
                  index
                ) => (
                  <div
                    key={index}
                    className={`grid grid-cols-1 gap-5 sm:grid-cols-3 ${
                      index > 0
                        ? index === 1
                          ? "xl:translate-x-6"
                          : "xl:translate-x-12"
                        : ""
                    }`}
                  >
                    {itemsList.map((item, subindex) => (
                      <a
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mx-auto flex w-8/12 flex-col items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-3 shadow-lg md:w-full md:px-6 md:py-4 md:hover:md:hover:bg-white/50"
                        key={`adopter-${index}-${subindex}`}
                      >
                        <ExportedImage
                          src={`images/logos/${item.src}`}
                          layout="raw"
                          loading="lazy"
                          height={128}
                          width={128}
                          alt={item.alt}
                          className="h-24 w-auto object-scale-down md:h-8"
                          {...item.extra}
                        />
                        <h3 className="mt-3 bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent md:text-base md:font-semibold">
                          {item.alt}
                        </h3>
                      </a>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>

      {/*<div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-b from-pink-50 pt-16 to-transparent"></div>*/}
    </div>
  );
}
