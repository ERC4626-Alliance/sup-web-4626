import AtomTitle from "@/components/Atom/Title";
import Container from "components/Container";
import Image from "next/image";

export default function Adopters2() {
  const adopters = [
    [
      { src: "alchemix.svg", alt: "Alchemix", link: "https://alchemix.fi/", about: "", app: "" },
      { src: "balancer.svg", alt: "Balancer", link: "https://balancer.fi", about: "", app: "" },
      { src: "maple.svg", alt: "Maple", link: "https://maple.finance", about: "", app: "" }

    ], [

      { src: "tribe-dao.svg", alt: "Tribe DAO", link: "https://tribedao.xyz/governance/proposals/FIP-103", about: "", app: "" },
      { src: "fei.svg", alt: "Fei", link: "https://fei.money", about: "", app: "" },
      { src: "rari.png", alt: "Rari", link: "https://rari.capital/", about: "", app: "" },
      { src: "midas.png", alt: "Midas Capital", link: "https://www.midascapital.xyz/", about: "", app: "" },
      { src: "yieldprotocol.svg", alt: "Yield Protocol", link: "https://yieldprotocol.com", about: "", app: "" },
      { src: "yield-finance.svg", alt: "Yield Finance", link: "https://yearn.finance", about: "", app: "" }

    ], [
      { src: "mstable.svg", alt: "mStable", link: "https://mstable.org", about: "", app: "" },
      { src: "openzeppelin.svg", alt: "OpenZeppelin", link: "https://openzeppelin.com", about: "", app: "" },
      { src: "maximizer.svg", alt: "maximizer", link: "https://www.maxi.xyz/", about: "", app: "" }
    ]
  ];

  return <div className="py-16 bg-gradient-to-t from-pink-50 text-center" id="adopters">
    <Container className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <>
        <div className="grid items-center grid-cols-1 xl:grid-cols-2">
          <div className="px-8 text-left xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
            <AtomTitle alignText="left" subtitle="Test an actual standard implementation">ERC-4626 <br /> EARLY ADOPTERS</AtomTitle>
            <a target="_blank" rel="noopener noreferrer" href="mailto:prod-4626mvp-aaaagqoeclkuphezfjmhhsqbyi@superform-group.slack.com"
               className="inline-flex items-center justify-center px-5 py-3 hover:transition-all border border-pink-700 text-base font-medium rounded-md text-pink-700 bg-white hover:bg-pink-700 hover:border-transparent hover:text-white hover:shadow-lg">Submit
              your implementation</a>
          </div>

          <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
            <div className="absolute inset-16">
              <div className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                   style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }} />
            </div>

            <div className="relative space-y-5">
              {adopters.map((itemsList: Array<{ src: string; alt: string; link?: string; app?: string; about?: string; }>, index) => <>
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-5 sm:grid-cols-3 ${index > 0 ? index === 1 ? "xl:translate-x-6" : "xl:translate-x-12" : ""}`}>
                  {itemsList.map((item, subindex) => <a
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center flex-col justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full md:hover:md:hover:bg-white/50"
                    key={`adopter-${index}-${subindex}`}
                  >
                    <Image
                      src={`images/logos/${item.src}`}
                      layout="raw"
                      height="128"
                      width="128"
                      alt={item.alt}
                      className="w-auto h-8"
                      unoptimized={true}
                    />
                    <h4 className="mt-3 text-base font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-transparent capitalize">{item.alt}</h4>
                  </a>)}
                </div>
              </>)}
            </div>
          </div>
        </div>
      </>
    </Container>
  </div>;
};
