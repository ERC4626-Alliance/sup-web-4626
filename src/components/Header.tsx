import Container from "@/components/Container";
import { animateScroll as scroll, scrollSpy, Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import Link from "next/link";
import { classNames } from "../helpers/formatters";
import { useRouter } from "next/router";
import { isActive } from "../helpers/utils";
import Image from "next/future/image";

const navigation = [
  { section: "alliance", title: "The alliance", href: "/", isScroll: true, offset: -90 },
  { section: "ecosystem", title: "Ecosystem", href: "/#ecosystem", isScroll: true, offset: -90 },
  { title: "Vaults", href: "/vaults" },
  { title: "Resources", href: "/resources" },
  { title: "Bounties", section: "bounties", href: "/#bounties", isScroll: true, offset: -90, featured: true },
];

export default function Header() {
  const router = useRouter();

  const isHome = isActive(router.pathname, "/", true);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    scrollSpy.update();
  });

  const [isHeaderExpanded, setHeaderState] = useState(false);

  const expandClicked = (event: any) => {
    console.log(event);
    event.preventDefault();
    setHeaderState(!isHeaderExpanded);
  };

  return (
    <header className="indexHeader md:full w-screen">
      <Container>
        <nav className="relative flex items-center justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            {isHome ? (
              <div className="h-[50px] w-auto sm:h-10 md:hover:cursor-pointer" onClick={scrollToTop}>
                <Image
                  priority={false}
                  width={50}
                  height={50}
                  src="/images/logo.svg"
                  alt="4626 Alliance"
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
            ) : (
              <Link href="/">
                <a className="h-[50px] w-auto sm:h-10 md:hover:cursor-pointer" onClick={scrollToTop}>
                  <Image
                    priority={false}
                    width={50}
                    height={50}
                    src="/images/logo.svg"
                    alt="4626 Alliance"
                    loading="lazy"
                    unoptimized={true}
                  />
                </a>
              </Link>
            )}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={expandClicked}
                aria-expanded={isHeaderExpanded}
              >
                <span className="sr-only">Navigate through</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <nav className="flex hidden flex-nowrap sm:space-x-4 md:ml-10 md:block xl:space-x-10">
            {navigation.map((link, index) =>
              link.isScroll && isHome ? (
                <ScrollLink
                  saveHashHistory={true}
                  activeClass="activeLink"
                  to={link.section}
                  key={`nav-desk-${index}`}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className={classNames(
                    "cursor-pointer whitespace-nowrap font-medium text-pink-700",
                    link.featured
                      ? "rounded-md border-2 border-pink-700 px-4 py-2 font-bold font-medium text-pink-700 shadow-sm transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
                      : "decoration-from-font underline-offset-4" + " hover:text-pink-700" + " hover:underline"
                  )}
                >
                  {link.title}
                </ScrollLink>
              ) : (
                <Link key={link.title} href={link.href} passHref shallow aria-current={isActive(router.pathname, link.href, true) ? "page" : undefined}>
                  <a
                    className={classNames(
                      "cursor-pointer whitespace-nowrap font-medium text-pink-700 decoration-from-font underline-offset-4",
                      isActive(router.pathname, link.href, true) ? "font-bold underline" : "",
                      link.featured ? "rounded-md border-2 border-pink-700 px-4 py-2 font-bold font-medium text-pink-700 shadow-sm transition-all md:hover:bg-pink-700" +
                        " md:hover:text-white md:hover:shadow-md" : "hover:underline"
                    )}
                  >
                    {link.title}
                  </a>
                </Link>
              )
            )}
          </nav>
        </nav>
        <div className={`absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition ${isHeaderExpanded ? "" : "hidden"}`}>
          <div className="rounded-lg bg-white shadow-sm ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  <span className="-mb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent">ERC-4626</span>
                </h2>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                  onClick={expandClicked}
                  aria-expanded={isHeaderExpanded}
                >
                  <span className="sr-only">Close main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="flex w-full flex-col space-y-1 px-2 pt-5 pb-3">
              {navigation.map((link, index) =>
                link.isScroll && isHome ? (
                  <ScrollLink
                    saveHashHistory={true}
                    activeClass="activeLink"
                    key={`nav-mob-${index}`}
                    className={classNames("cursor-pointer px-3 py-2.5 text-lg font-medium text-pink-700 hover:text-pink-700", )}
                    to={link.section}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                  >
                    {link.title}
                  </ScrollLink>
                ) : (
                  <Link key={`nav-mob-${index}`} href={link.href} passHref shallow aria-current={isActive(router.pathname, link.href, true) ? "page" : undefined}>
                    <a
                      className={classNames(
                        "px-3 py-2.5 text-lg font-medium text-pink-700",
                        isActive(router.pathname, link.href, true) ? "font-bold underline" : "hover:underline"
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                )
              )}
            </nav>
            <a
              href="https://vaultscan.superform.xyz"
              target="_blank"
              rel="nofollow noreferrer"
              className="block hidden w-full bg-pink-50 px-5 py-3 text-center font-medium text-pink-600 hover:bg-pink-100"
            >
              Check out the VaultScan by Superform
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}