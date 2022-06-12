import Container from "@/components/Container";
import ExportedImage from "next-image-export-optimizer";
import { Component, PropsWithChildren, SVGProps } from "react";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const footerNavigation = {
  social: [
    {
      name: "Dev Docs",
      href: "https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/",
      icon: (props: PropsWithChildren) => <ExportedImage src="images/logos/ethereum-logo.webp" alt="ethereum.org" height="70" width="44" layout="raw"
                                                         {...props} />
    }, {
      name: "EIP", href: "https://eips.ethereum.org/EIPS/eip-4626", icon: (props: SVGProps<any>) => <HiOutlineBookmarkAlt {...props} />
    }, {
      name: "GitHub", href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4626.md", icon: (props: SVGProps<any>) => <IoLogoGithub {...props} />
    }
  ]
};

export default class Footer extends Component {
  render() {
    return (<footer className="bg-pink-50 py-6" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="flex md:items-center md:justify-between flex-col md:flex-row">
          <div className="flex flex-row space-x-4 md:order-2 justify-center">
            {footerNavigation.social.map((item: { name: string; href?: string; icon: any }) => (<a
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
              href={item.href}
              className="text-pink-700 decoration-from-font underline-offset-4 hover:text-pink-700 hover:underline  inline-flex items-center"
            >
              <item.icon className="h-4 w-4 mr-1 object-scale-down" />
              <span className="text-sm">{item.name}</span>
            </a>))}
          </div>
          <div
            className="flex flex-wrap mt-8 mb-5 md:my-0 text-sm text-pink-700 md:order-1 whitespace-nowrap justify-center space-y-1 md:space-y-0 md:justify-between items-center">
            <span>Website carefully handcrafted with</span>
            <span className="mx-2">❤️</span>
            <span className="w-full block md:hidden" />
            <a
              href="https://superform.xyz"
              className="font-normal text-pink-700 decoration-from-font underline-offset-4 hover:text-pink-700 hover:underline ml-0 inline-flex"
            >
              by Superform
            </a>
            <span className="mx-1.5 border-pink-400 text-left h-3 md:h-5 border-r " />
            <a
              rel="noopener noreferrer"
              href="https://t.me/superformcommunity"
              target="_blank"
              className="text-pink-700 decoration-from-font underline-offset-4 hover:text-pink-700 hover:underline  inline-flex items-center"
            >
              contact us
              <IoLogoTwitter className="overflow-visible font-light w-5 text-pink-700 ml-1" />
            </a>
          </div>
        </div>
      </Container>
    </footer>);
  }
}
