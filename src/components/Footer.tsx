import { Component, SVGProps } from "react";
import Container from "components/Container";

const footerNavigation = {
  social: [
    {
      name: "EIP",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
      icon: (props: SVGProps<any>) => (
        <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
          <path fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4626.md",
      icon: (props: SVGProps<any>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
};

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-pink-50 " aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <Container>
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8"></div>
              </div>
            </div>
            <div className="mt-12 border-t border-pink-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
              <div className="flex space-x-4 md:order-2">
                {footerNavigation.social.map(
                  (item: { name: string; href?: string; icon: any }) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      key={item.name}
                      href={item.href}
                      className="text-pink-700 decoration-from-font underline-offset-2 hover:text-pink-700 hover:underline  inline-flex items-center"
                    >
                      <item.icon className="h-4 w-4 mr-1"/>
                      <span className="text-sm">{item.name}</span>
                    </a>
                  )
                )}
              </div>
              <div className="mt-8 flex flex-row text-sm text-pink-500 md:order-1 md:mt-0 justify-between items-center">
                <span>Website carefully handcrafted with </span>
                <span className="mx-2">❤️</span>
                <a
                  href="https://superform.xyz"
                  className="font-normal text-pink-700 decoration-from-font underline-offset-4 hover:text-pink-700 hover:underline ml-0 inline-flex"
                >
                  by Superform
                </a>
                <span className="mx-1.5 border-pink-400 text-left h-5 border-r"/>
                <a
                  rel="noopener noreferrer"
                  href="https://t.me/superformcommunity"
                  target="_blank"
                  className="text-pink-700 decoration-from-font underline-offset-2 hover:text-pink-700 hover:underline  inline-flex items-center"
                >
                  contact us
                  <svg
                    viewBox="-75.52 -43.52 599.04 599.04"
                    fill="currentColor"
                    className="overflow-visible font-light w-5 text-pink-500 ml-1"
                  >
                    <path
                      d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    )
      ;
  }
}
