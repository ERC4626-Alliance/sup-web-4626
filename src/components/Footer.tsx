import Container from "@/components/Container";
import { SVGProps } from "react";
import { IoMdHeart, IoLogoTwitter } from "react-icons/io";
import { FaBook, FaGithub, FaPaperPlane, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const footerNavigation = {
  social: [
    {
      name: "Follow us",
      href: "https://twitter.com/erc4626",
      icon: (props: SVGProps<any>) => <IoLogoTwitter {...props} />,
    },
    {
      name: "Discuss",
      href: "https://t.me/erc4626alliance",
      icon: (props: SVGProps<any>) => <FaTelegramPlane {...props} />,
    },
    {
      name: "Github",
      href: "https://github.com/ERC4626-Alliance",
      icon: (props: SVGProps<any>) => <FaGithub {...props} />,
    },
    {
      name: "Read the EIP",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      icon: (props: SVGProps<any>) => <FaBook {...props} />,
    },
    {
      name: "Join the alliance",
      href: "https://forms.gle/DsCsttsxBUYQTB9r6",
      icon: (props: SVGProps<any>) => <AiOutlineUsergroupAdd {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white/70 py-6 dark:bg-zinc-900/90" aria-labelledby="footer-heading">
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
                className="group inline-flex items-center text-sm font-medium text-pink-700 underline decoration-from-font underline-offset-4 dark:text-pink-400 md:font-normal md:no-underline md:hover:text-pink-900 md:hover:underline md:dark:hover:text-pink-400"
              >
                <item.icon className="relative mr-1.5 inline-flex h-4 w-auto md:opacity-25 md:group-hover:opacity-100 dark:md:opacity-75" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center space-y-1 whitespace-nowrap text-sm text-pink-700 dark:text-white md:order-1 md:my-0 md:justify-between md:space-y-0">
            <span>Handcrafted</span>
            <span className="block w-full md:hidden" />
            <span className="ml-1">with</span>
            <span className="mx-1 md:mx-2">
              <IoMdHeart className="h-4 w-4 text-red-600" />
            </span>
            <span className="inline-flex font-semibold">by The 4626 Alliance</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}