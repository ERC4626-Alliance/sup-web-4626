import Container from "@/components/Container";
import { Component, SVGProps } from "react";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { IoMdHeart, IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaEthereum, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const footerNavigation = {
  social: [
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
  ],
};

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-pink-50 pb-6 lg:py-6" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <Container noPb>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-row justify-center space-x-4 md:order-2">
              {footerNavigation.social.map((item: { name: string; href?: string; icon: any }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                  href={item.href}
                  className="group inline-flex items-center text-sm font-medium text-pink-700 underline decoration-from-font underline-offset-4 md:font-normal md:no-underline md:hover:text-pink-900 md:hover:underline"
                >
                  <item.icon className="relative mr-1.5 inline-flex h-4 w-auto md:opacity-25 md:group-hover:opacity-100" />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center space-y-1 whitespace-nowrap text-sm text-pink-700 md:order-1 md:my-0 md:justify-between md:space-y-0">
              <span>Handcrafted</span>
              <span className="block w-full md:hidden" />
              <span className="ml-1">with</span>
              <span className="mx-1 md:mx-2">
                <IoMdHeart className="h-4 w-4 text-red-600" />
              </span>
              <span className="inline-flex font-semibold text-pink-700">by The 4626 Alliance</span>
              <span className="mx-4 h-0 w-full border-r border-pink-400 text-left md:h-5 md:w-auto"></span>
              <a
                rel="noopener noreferrer"
                href="twitter.com/erc4626"
                target="_blank"
                className="group inline-flex items-center font-medium text-pink-700 underline decoration-from-font underline-offset-4 md:font-normal md:no-underline md:hover:text-pink-900 md:hover:underline"
              >
                follow us
                <IoLogoTwitter className="ml-1.5 inline-flex h-4 w-4 md:opacity-25 md:group-hover:opacity-100" />
              </a>
              <span className="mx-4 h-3 border-r border-pink-400 text-left md:h-5"></span>
              <a
                rel="noopener noreferrer"
                href="https://t.me/erc4626alliance"
                target="_blank"
                className="group inline-flex items-center font-medium text-pink-700 underline decoration-from-font underline-offset-4 md:font-normal md:no-underline md:hover:text-pink-900 md:hover:underline"
              >
                discuss
                <FaTelegramPlane className="ml-1.5 inline-flex h-4 w-4 md:opacity-25 md:group-hover:opacity-100" />
              </a>
              <span className="mx-4 h-3 border-r border-pink-400 text-left md:h-5"></span>
              <a
                rel="noopener noreferrer"
                href="https://forms.gle/DsCsttsxBUYQTB9r6"
                target="_blank"
                className="group inline-flex items-center font-medium text-pink-700 underline decoration-from-font underline-offset-4 md:font-normal md:no-underline md:hover:text-pink-900 md:hover:underline"
              >
                join the alliance
                <AiOutlineUsergroupAdd className="ml-1.5 inline-flex h-4 w-4 md:opacity-25 md:group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}