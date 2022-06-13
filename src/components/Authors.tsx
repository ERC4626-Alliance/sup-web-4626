import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { IoLogoTwitter } from "react-icons/io";

const Authors = () => {
  const authorList = [
    { name: "Joey Santoro", twitter: "Joey__Santoro", githubAvatar: "https://avatars.githubusercontent.com/u/31974730?s=120&v=4" },
    { name: "t11s", twitter: "transmissions11", githubAvatar: "https://avatars.githubusercontent.com/u/26209401?s=120&v=4" },
    { name: "Jet Jadeja", twitter: "JetJadeja", githubAvatar: "https://avatars.githubusercontent.com/u/48066949?v=4" },
    { name: "Alberto Cuesta Cañada", twitter: "alcueca", githubAvatar: "https://avatars.githubusercontent.com/u/38806121?s=120&v=4" },
    { name: "Señor Doggo", twitter: "fubuloubu", githubAvatar: "https://avatars.githubusercontent.com/u/3859395?s=120&v=4" }
  ];
  return <>
    <div className="py-16 bg-gradient-to-t from-pink-50 text-center" id="authors">
      <Container>
        <AtomTitle alignText="center">ERC-4626 AUTHORS</AtomTitle>
        <div className="space-y-6 md:space-y-0 flex flex-col items-start md:items-center md:flex-row mt-8 text-lg text-slate-700 md:justify-center">
          <span className="mb-1 md:mb-0">ERC-4626 was authored by:</span>
          {authorList.map((author: { name: string; twitter: string; githubAvatar?: string; }, index) => (
            <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="nofollow noreferrer"
               key={`author-${index}`}
               className="inline-flex space-x-3 md:space-x-1 group items-center ml-3 font-semibold text-pink-700 decoration-from-font underline-offset-4 md:hover:text-pink-700 md:hover:underline">
              <span className="relative rounded-full overflow-hidden w-10 h-10  ring-2 ring-transparent md:group-hover:ring-pink-700">
                <img src={author.githubAvatar} alt={author.name} className="bg-gray-200 w-full h-full" loading="lazy" />
                <span className="absolute inset-0 rounded-full border border-black border-opacity-10"></span>
              </span>
              <h3>{author.name}</h3>
              <IoLogoTwitter className="w-4 h-4 opacity-25 md:group-hover:opacity-100" />
            </a>))}
        </div>
      </Container>
    </div>
  </>;
};

export default Authors;
