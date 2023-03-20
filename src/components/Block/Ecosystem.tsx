import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import ExportedImage from "next-image-export-optimizer";
import { SupSingleAdopter } from "@/types";
import supporters from "@json/supporters.json";
import Link from "next/link";

export default function Ecosystem() {
  const adopters = supporters as Array<SupSingleAdopter[]>;
  return (
    <div className="relative overflow-hidden uiBlock lightBackground" id="ecosystem">
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 md:w-full lg:px-8" noHidden>
        <div className="mx-auto grid grid-cols-1 place-content-evenly items-center xl:grid-cols-3 2xl:grid-cols-2">
          <div className="col-span-1 px-8 text-left md:mx-auto md:max-w-2xl md:px-0 lg:pr-16 xl:max-w-none xl:text-left">
            <AtomTitle alignText="left">ERC-4626 Ecosystem</AtomTitle>
            <ul className="list-inside list-disc text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              <li>Find all ERC 4626 Vaults deployed in our vault database.</li>
              <li>If you want to submit your own vault please provide details on it here, and we will get it added as soon as possible.</li>
            </ul>
            <div className="mt-4 flex flex-auto flex-col items-stretch space-y-4 md:mt-8 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="/vaults">
                <a className="featuredLink flex items-center justify-center">
                  Explore the Vaults
                </a>
              </Link>
              <a
                href="https://forms.gle/gpCw7faY81Gp2AET9"
                target="_blank"
                className="featuredLink flex items-center justify-center" rel="noreferrer"
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
                      className="mx-auto flex w-8/12 flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-zinc-400/70 px-4 py-3 shadow-lg md:w-full transition-colors delay-75 ease-linear md:px-6 md:py-4 md:hover:md:hover:bg-white/50"
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
                      <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 dark:from-pink-50 dark:to-pink-300 bg-clip-text text-center text-xl font-extrabold capitalize tracking-tight text-transparent md:text-base md:font-semibold">
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