import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import Image from "next/future/image";
import { SVGProps } from "react";
import { FaEthereum } from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";

const links = [
  {
    name: "Dev Docs",
    href: "https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/",
    icon: (props: SVGProps<any>) => <FaEthereum {...props} />,
  },
  {
    name: "EIP",
    href: "https://eips.ethereum.org/EIPS/eip-4626",
    icon: (props: SVGProps<any>) => <HiOutlineBookmarkAlt {...props} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4626.md",
    icon: (props: SVGProps<any>) => <IoLogoGithub {...props} />,
  },
];

export default function Standard() {
  return (
    <div className="uiBlock lightBackground relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-4 h-48" />
      <Container>
        <div className="mx-auto md:grid lg:grid-cols-12 lg:gap-20 lg:py-32">
          <div className="md:col-span-5 md:text-left" data-aos="fade-right">
            <AtomTitle>ERC-4626 Standard</AtomTitle>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              <code className="mr-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-4626</code> is a technical standard that aims to streamline
              and harmonize the specifications of yield-bearing vaults.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              It introduces a standardized API for tokenized yield-bearing vaults that correspond to fractional ownership of a specific{" "}
              <code className="mx-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-20</code> token.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-zinc-100">
              Additionally, <code className="mr-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-4626</code> presents an optional addendum for
              tokenized vaults that employ <code className="mx-1 select-none whitespace-nowrap rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-20</code>, which provides
              fundamental capabilities for depositing, withdrawing, and tracking token balances.
            </p>
            <div className="mt-4 flex flex-auto flex-col items-stretch space-y-4 md:mt-8 md:flex-row md:space-y-0 md:space-x-4">
              {links.map((item) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                  href={item.href}
                  className="featuredLink group inline-flex items-center whitespace-nowrap text-lg font-medium decoration-from-font"
                >
                  <item.icon className="relative mr-1.5 inline-flex h-4 w-auto md:opacity-25 md:group-hover:opacity-100 dark:md:opacity-75" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="relative mt-8 h-auto w-full object-scale-down md:col-span-7 lg:mt-0" data-aos="fade-left">
            <Image
              priority={false}
              unoptimized={true}
              src="/images/standard.svg"
              width={823}
              height={370}
              loading="lazy"
              className="w-full 2xl:h-full 2xl:w-auto"
              alt="WHAT IS ERC-4626?"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}