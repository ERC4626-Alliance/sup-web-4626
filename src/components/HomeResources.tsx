import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";

export default function HomeResources() {
  return <div
    className="bg-gradient-to-t from-pink-50 py-16 text-center"
    id="authors"
  >
    <Container>
      <AtomTitle alignText="center">ERC-4626 AUTHORS</AtomTitle>
      <div className="mt-8 flex flex-col items-start space-y-6 text-lg text-slate-700 md:flex-row md:flex-wrap md:items-center lg:justify-center xl:space-y-0">
        <div className="inline-flex h-full mb-1 md:mt-6 xl:mt-0 md:mb-0">ERC-4626 was authored by:</div>
      </div>
    </Container>
  </div>;
}