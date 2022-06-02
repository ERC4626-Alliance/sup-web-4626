import { Component, SVGProps } from "react";
import Container from "./Container";

const footerNavigation = {
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: SVGProps<any>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "#",
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
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map(
                  (item: { name: string; href?: string; icon: any }) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-pink-700 hover:text-pink-900"
                    >
                      <span className="sr-only"> {item.name} </span>
                      <item.icon className="h-6 w-6"/>
                    </a>
                  )
                )}
              </div>
              <div className="mt-8 flex flex-row text-base text-pink-500 md:order-1 md:mt-0 justify-between items-center">
                <span>Website carefully handcrafted with </span>
                <span className="mx-2">❤️</span>
                <a
                  href="https://superform.xyz"
                  className="font-normal text-pink-700 decoration-from-font underline-offset-4 hover:text-pink-700 hover:underline ml-0 inline-flex"
                >
                  by Superform
                </a>
                <span className="mx-3 border-pink-400 text-left h-5 border-r"/>
                <a
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
