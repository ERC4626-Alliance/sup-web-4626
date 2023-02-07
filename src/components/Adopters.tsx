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
        src: "ousd.svg",
        title: "Origin Dollar",
        url: { web: "https://ousd.com" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "resonate.svg",
        title: "Resonate Protocol",
        url: { web: "https://www.resonate.finance/" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "sense.svg",
        title: "Sense Protocol",
        url: { web: "https://sense.finance" },

        extra: {
          unoptimized: true,
        },
      },
    ],
    [
      {
        src: "sommelier.svg",
        title: "Sommelier",
        url: { web: "https://www.sommelier.finance/" },

        extra: {
          unoptimized: true,
        },
      },
      {
        src: "timeless.png",
        title: "Timeless Protocol",
        url: { web: "https://timelessfi.com/" },
      },
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
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-pink-50 py-16" id="adopters">
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 md:w-full lg:px-8">
        <div className="mx-auto grid grid-cols-1 place-content-evenly items-center xl:grid-cols-3 2xl:grid-cols-2">
          <div className="col-span-1 px-8 text-left md:mx-auto md:max-w-2xl md:px-0 lg:pr-16 xl:max-w-none xl:text-left">
            <AtomTitle alignText="left">
              ERC-4626 <br /> Supporters
            </AtomTitle>
            <li className="text-lg text-pink-600">Find all ERC 4626 Vaults deployed in our vault database.</li>
            <li className="text-lg text-pink-600">If you want to submit your own vault please provide details on it here, and we will get it added as soon as possible.</li>
            <div className="mt-4 flex flex-auto flex-col items-stretch justify-center space-y-4 md:mt-8 md:flex-row md:space-y-0 md:space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://eips.ethereum.org/EIPS/eip-4626"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg"
              >
                Explore the Vaults
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg"
              >
                Submit a Vault
              </a>
            </div>
          </div>

          <div className="relative col-span-full mt-8 sm:mt-12 lg:col-span-2 lg:mx-auto lg:max-w-4xl xl:mt-0 xl:max-w-none 2xl:col-span-1">
            <div className="absolute inset-8 md:inset-16">
              <div
                className="mx-auto h-full w-full rotate-180 rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative space-y-5 xl:-ml-16 2xl:ml-0">
              {adopters.map((itemsList: SupSingleAdopter[], index: number) => (
                <div key={index} className={`grid grid-cols-1 gap-5 sm:grid-cols-4 ${index > 0 ? (index === 1 ? "xl:translate-x-6" : "xl:translate-x-12") : ""}`}>
                  {itemsList.map((item: SupSingleAdopter, adopterKey: number) => (
                    <a
                      href={item.url.web}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-auto flex w-8/12 flex-col items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-3 shadow-lg md:w-full md:px-6 md:py-4 md:hover:md:hover:bg-white/50"
                      key={`adopter-${index}-${adopterKey}`}
                    >
                      <ExportedImage
                        src={`images/logos/${item.src}`}
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
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}