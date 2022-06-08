import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";

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
        <AtomTitle>ERC-4626 AUTHORS</AtomTitle>
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 opacity-25 md:group-hover:opacity-100">
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>))}
        </div>
      </Container>
    </div>
  </>;
};

export default Authors;
