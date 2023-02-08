import AtomTitle from "./Atom/Title";
import Container from "./Container";
import { IoMdGlobe, IoLogoTwitter } from "react-icons/io";

const people = [
  {
    name: "Superform",
    role: "Copywriter",
    imageUrl: "https://pbs.twimg.com/profile_images/1561104473854021633/WYGdHjsi_400x400.png",
    twitter: "superform-xyz",
    funding: "$4,000 USDC",
    website: "https://superform.xyz",
  },
];

export default function Alliance() {
  return (
    <div className="mx-auto w-full bg-gradient-to-r from-pink-700 to-pink-900 py-16 text-center">
      <AtomTitle alignText="center" inverted={true}>
        ERC-4626 Alliance
      </AtomTitle>
      <Container>
        <h3 className="mb-16 text-center tracking-normal text-pink-100 md:text-lg">
          The 4626 Alliance is a group of leading protocols and applications that share the mission of supporting the development and deployment of ERC 4626 vaults. ERC 4626
          drastically simplifies the process of building cool and useful applications by decreasing the complexity of integration while improving UX and security.{" "}
        </h3>
        <div className="relative mx-auto w-fit">
          <div className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4">
            {people.map((person) => (
              <a
                href="https://google.com"
                target="_blank"
                key={person.name}
                className="mx-auto flex w-8/12 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white/80 px-4 py-3 shadow-lg md:w-full md:px-6 md:py-4"
                rel="noreferrer"
              >
                <div className="space-y-6">
                  <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="space-y-1 font-medium leading-6">
                      <div className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-center text-7xl font-extrabold capitalize tracking-tight text-transparent md:text-base md:font-semibold">
                        {person.name}
                      </div>
                      <p className="text-sm font-normal text-pink-700">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center">
                      <li>
                        <a
                          href={`https://twitter.com/${person.twitter}`}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className="group ml-4 inline-flex items-center space-x-1.5 font-semibold text-pink-700 underline decoration-from-font underline-offset-4 md:space-x-2 md:no-underline md:hover:text-pink-700 md:hover:underline"
                        >
                          <IoMdGlobe className="h-4 w-4 md:opacity-25 md:group-hover:opacity-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://twitter.com/${person.twitter}`}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className="group ml-4 inline-flex items-center space-x-1.5 font-semibold text-pink-700 underline decoration-from-font underline-offset-4 md:space-x-2 md:no-underline md:hover:text-pink-700 md:hover:underline"
                        >
                          <IoLogoTwitter className="h-4 w-4 md:opacity-25 md:group-hover:opacity-100" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}