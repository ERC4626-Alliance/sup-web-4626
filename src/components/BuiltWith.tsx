import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import {
  HiOutlineClock,
  HiOutlineCollection,
  HiTemplate,
} from "react-icons/hi";
import {
  IoCloudUploadOutline,
  IoExtensionPuzzleOutline,
} from "react-icons/io5";

declare type buildWithProps = {
  email?: string;
  href?: string;
  name: string;
  description: string;
  icon: any;
};

const BuiltWith = () => {
  const buildList = [
    {
      name: "How to deploy the Vault Contract",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      description: "Deploy an ERC-4626 vault on Ethereum",
      icon: IoCloudUploadOutline,
    },
    {
      name: "Learn by example",
      description: "View examples",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      icon: HiTemplate,
    },
    {
      name: "Explore extensions",
      description: "Extensions to ERC-4626",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      icon: IoExtensionPuzzleOutline,
    },
    {
      name: "Handle non-standard vault",
      description: "How to wrap a non-standard vault with ERC-4626",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      icon: HiOutlineCollection,
    },
  ] as buildWithProps[];

  return (
    <div className="relative pt-8 pb-16 md:pt-16" id="build">
      <Container>
        <AtomTitle alignText="center">BUILD WITH ERC-4626</AtomTitle>
        <div className="relative grid-cols-1 gap-8 text-left md:grid md:grid-cols-2">
          <div className="absolute top-1/2 left-1/2 z-10 inline-flex -translate-y-1/2 -translate-x-1/2 items-center whitespace-nowrap rounded-full bg-pink-100 px-5 py-3 text-lg font-medium text-pink-800 shadow-md">
            <HiOutlineClock
              className="mr-2 h-6 w-6 animate-pulse"
              aria-hidden="true"
            />
            Coming soon
          </div>
          {buildList.map((build: buildWithProps, index: number) => (
            <div
              key={`${build?.email || build.name}-${index}`}
              className="pt-6"
            >
              <div className="flow-root hidden rounded-lg border border-pink-200 bg-white px-6 pb-8 opacity-20 shadow-sm md:inline-flex w-full">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-pink-1000 to-pink-900 p-3 shadow-lg">
                    <build.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 bg-gradient-to-r from-pink-700 to-pink-900 bg-clip-text text-lg font-semibold capitalize text-transparent">
                    {build.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {build.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-auto flex-col items-stretch justify-center space-y-4 md:mt-8 md:flex-row md:space-y-0 md:space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://eips.ethereum.org/EIPS/eip-4626"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg"
          >
            Read the proposal
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg"
          >
            Join the discussion
          </a>
        </div>
      </Container>
    </div>
  );
};

export default BuiltWith;