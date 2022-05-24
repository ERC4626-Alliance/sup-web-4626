import { FunctionComponent } from "react";
import { linksResources } from "../lib/data";

const Resources2: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-pink-700 to-pink-900">
      <div className="max-w-7xl mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="justify-items-center grid grid-cols-2 gap-8 xl:col-span-4">

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-12 md:mt-0">
              <a id="news"/>
              <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                NEWS
              </h3>
              <ul className="mt-4 space-y-4">
                {linksResources.news.map((item: { href: string; name: string; }) => (<li key={item.name}>
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
                TWEETS
              </h3>
              <ul className="mt-4 space-y-4">
                {linksResources.tweets!.map((item: { href: string; name: string; }) => (<li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-pink-50 hover:text-pink-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Resources2;
