import { FunctionComponent } from "react";
import { linksResources } from "../lib/data";
import Title from "components/Atom/Title";
import Link from "next/link";
import Container from "components/Container";

const Resources: FunctionComponent = () => {
  return (
    <>
      <div>
        <div className="mx-auto pt-16 pb-2 px-4 sm:px-6 lg:pt-24 lg:px-8 text-center">
          <Title>ERC4626 RESOURCES</Title>
          <p className="text-center mt-4 text-lg text-pink-600">
            Explorer relevant resources
          </p>
          <Container>
            <ul className="mt-4 space-x-4 flex flex-row justify-center pt-8 pb-8 px-4 sm:px-6 lg:pb-24">
              {linksResources.repositories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex shadow-lg flex-col items-center px-3 py-2 w-fit self-stretch border border-gray-300 cursor-pointer hover:border-pink-200 rounded-lg text-sm hover:text-pink-500"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10 mb-3">
                      <path fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-700 to-pink-900">
        <section className="max-w-7xl mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="justify-items-center grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                  WATCH
                </h3>
                <ul className="mt-4 space-y-4">
                  {linksResources.videos.map((item: { name: string; href: string; }) => (<li key={item.name}>
                    <a
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-base text-pink-50 hover:text-pink-300"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                  READ
                </h3>
                <ul className="mt-4 space-y-4">
                  {linksResources.reading.map((item: { name: string; href: string; }) => (<li key={item.name}>
                    <a
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-base text-pink-50 hover:text-pink-300"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Resources;