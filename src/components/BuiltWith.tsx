import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { HiOutlineClock, HiOutlineCollection, HiTemplate } from "react-icons/hi";
import { IoCloudUploadOutline, IoExtensionPuzzleOutline } from "react-icons/io5";

declare type buildWithProps = { email?: string; href?: string; name: string; description: string; icon: any };

const BuiltWith = () => {

  const buildList = [
    {
      name: "How to deploy the Vault Contract", href: "https://eips.ethereum.org/EIPS/eip-4626", description: "Deploy an ERC-4626 vault on Ethereum", icon: IoCloudUploadOutline
    }, { name: "Learn by example", description: "View examples", href: "https://eips.ethereum.org/EIPS/eip-4626", icon: HiTemplate }, {
      name: "Explore extensions", description: "Extensions to ERC-4626", href: "https://eips.ethereum.org/EIPS/eip-4626", icon: IoExtensionPuzzleOutline
    }, {
      name: "Handle non-standard vault", description: "How to wrap a non-standard vault with ERC-4626", href: "https://eips.ethereum.org/EIPS/eip-4626", icon: HiOutlineCollection
    }
  ] as buildWithProps[];

  return (<div className="relative py-16" id="build">
    <Container>
      <AtomTitle alignText="center">
        BUILD WITH ERC-4626
      </AtomTitle>
      <div className="md:grid grid-cols-1 gap-8 md:grid-cols-2 text-left relative">
        <div
          className="z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 absolute whitespace-nowrap inline-flex items-center px-5 py-3 rounded-full text-lg font-medium bg-pink-100 text-pink-800 shadow-md">
          <HiOutlineClock className="h-6 w-6 mr-2 animate-pulse" aria-hidden="true" />
          Coming soon
        </div>
        {buildList.map((build: buildWithProps, index: number) => (<div
          // href={build.href}
          // target="_blank"
          // rel="noopener noreferrer"
          key={`${build?.email || build.name}-${index}`}
          className="pt-6"
        >

          <div className="hidden flow-root shadow-sm md:inline-flex border border-pink-200 rounded-lg bg-white px-6 pb-8 opacity-20">
            <div className="-mt-6">
              <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-pink-900 p-3 shadow-lg">
                        <build.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold bg-gradient-to-r from-pink-700 to-pink-900 bg-clip-text text-transparent capitalize">{build.name}</h3>
              <p className="mt-3 text-base text-gray-600">{build.description}</p>
            </div>
          </div>
        </div>))}
      </div>
      <div className="mt-4 md:mt-8 flex flex-col md:flex-row flex-auto space-y-4 md:space-y-0 md:space-x-4 justify-center items-stretch">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eips.ethereum.org/EIPS/eip-4626"
          className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 hover:transition-all border border-pink-700 text-base font-medium rounded-md text-pink-700 bg-white md:hover:bg-pink-700 md:hover:border-transparent md:hover:text-white md:hover:shadow-lg"
        >
          Read the proposal
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900"
          className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 hover:transition-all border border-pink-700 text-base font-medium rounded-md text-pink-700 bg-white md:hover:bg-pink-700 md:hover:border-transparent md:hover:text-white md:hover:shadow-lg"
        >
          Join the discussion
        </a>
      </div>
    </Container>
  </div>);
};

export default BuiltWith;
