import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="relative bg-white font-worksans">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                  ERC4626
                </span>
              </h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
