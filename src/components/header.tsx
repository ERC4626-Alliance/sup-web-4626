import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 indexHeader">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <div className="h-8 w-auto sm:h-10">
                <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl ">
                  <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                    ERC-4626
                  </span>
                </h2>
              </div>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:space-x-10">
            <Link href="#build">
              <a className="hover:underline font-medium text-pink-700 hover:text-pink-700">Build</a>
            </Link>
            <Link href="#adopters">
              <a className="hover:underline font-medium text-pink-700 hover:text-pink-700">Early Adopters</a>
            </Link>
            <Link href="#vaultscan">
              <a className="hover:underline font-medium text-pink-700 hover:text-pink-700">VaultScan</a>
            </Link>
            <Link href="#news">
              <a className="hover:underline font-medium text-pink-700 hover:text-pink-700">News</a>
            </Link>
            <Link href="#faq">
              <a className="hover:underline font-medium text-pink-700 hover:text-pink-700">FAQ</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <span className="inline-flex rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <Link href="/">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50">
                Check out the VaultScan by Superform
              </a>
            </Link>
          </span>
        </div>
      </nav>
      <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">ERC-4626</span>
              </h2>
            </div>
            <div className="-mr-2">
              <button type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-pink-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="font-medium text-pink-700 hover:text-pink-700">Build</a>
            <a href="#" className="font-medium text-pink-700 hover:text-pink-700">Early Adopters</a>
            <a href="#" className="font-medium text-pink-700 hover:text-pink-700">VaultScan</a>
            <a href="#" className="font-medium text-pink-700 hover:text-pink-700">News</a>
            <a href="#" className="font-medium text-pink-700 hover:text-pink-700">FAQ</a>
          </div>
          <a href="#" className="block w-full px-5 py-3 text-center font-medium text-pink-600 bg-pink-50 hover:bg-pink-100"> Check out the VaultScan by Superform </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
