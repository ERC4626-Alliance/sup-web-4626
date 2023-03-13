import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";

export default function HomeResources() {
  return <div
    className="bg-gradient-to-t from-pink-100 dark:from-zink-80 py-16 text-center"
    id="authors"
  >
    <Container>
      <AtomTitle alignText="center">ERC-4626 AUTHORS</AtomTitle>
      <div className="mt-8 flex flex-col items-start space-y-6 text-lg text-slate-700 dark:text-zinc-100 md:flex-row md:flex-wrap md:items-center lg:justify-center xl:space-y-0">
        <div className="inline-flex h-full mb-1 md:mt-6 xl:mt-0 md:mb-0">ERC-4626 was authored by:
          <div className="mt-4 flex flex-auto flex-col items-stretch justify-center space-y-4 md:mt-8 md:flex-row md:space-y-0 md:space-x-4"><a target="_blank"
                                                                                                                                                rel="noopener noreferrer"
                                                                                                                                                href="https://eips.ethereum.org/EIPS/eip-4626"
                                                                                                                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg">Explore
            the Vaults</a><a target="_blank" rel="noopener noreferrer" href="https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900"
                             className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-pink-700 bg-white px-5 py-3 text-base font-medium text-pink-700 hover:transition-all md:hover:border-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-lg">Submit
            a Vault</a></div>
        </div>
      </div>
    </Container>
  </div>;
}