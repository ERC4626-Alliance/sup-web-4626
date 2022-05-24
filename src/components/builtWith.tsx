import { FunctionComponent } from "react";

declare type buildWithProps = { email?: string; href?: string; buildTitle: string; };

const BuiltWith: FunctionComponent = () => {

  const buildList = [
    {
      buildTitle: "Deploy an ERC-4626 vault", href: "https://eips.ethereum.org/EIPS/eip-4626"
    }, {
      buildTitle: "View examples", href: "https://eips.ethereum.org/EIPS/eip-4626"
    }, {
      buildTitle: "Extensions to ERC-4626", href: "https://eips.ethereum.org/EIPS/eip-4626"
    }, {
      buildTitle: "How to wrap a non-standard vault with ERC-4626", href: "https://eips.ethereum.org/EIPS/eip-4626"
    }
  ] as buildWithProps[];

  return (<div className="relative bg-gradient-to-t from-pink-50">
    <section className="mx-auto pt-2 pb-24 px-4 sm:px-6 lg:pt-2 lg:px-8">
      <a id="build"/>
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-2 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="-mb-1 pb-8 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                      BUILD WITH ERC-4626
                    </span>
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {buildList.map((build: buildWithProps, index: number) => (<div
                key={`${build?.email || build.buildTitle}-${index}`}
                className="relative rounded-lg border border-pink-100 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-pink-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-900"
              >
                <div className="flex-1 min-w-0">
                  <a
                    href={build.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                    <p className="text-sm font-medium text-slate-700">
                      {build.buildTitle}
                    </p>
                  </a>
                </div>
              </div>))}
              <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="-mb-1 pb-8 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">

                      </span>
              </h2>
            </div>
            <p className="text-center mt-4 text-lg text-slate-700"><a
              href="https://eips.ethereum.org/EIPS/eip-4626"
              className="text-base text-center text-slate-700 hover:text-pink-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the proposal
            </a></p>
          </div>
        </div>
      </div>
    </section>
  </div>);
};

export default BuiltWith;
