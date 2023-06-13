import Container from "@/components/Container";
import { animateScroll as scroll, scrollSpy, Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import Link from "next/link";
import { classNames } from "../helpers/formatters";
import { useRouter } from "next/router";
import { isActive } from "../helpers/utils";
import Image from "next/future/image";
import ModeToggle from "./ModeToggle";
import {useTheme} from "next-themes";

const navigation = [
  { title: "Home", href: "/" },
  { title: "News", href: "/news" },
  { title: "Security", href: "/security" },
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

  const {theme} = useTheme();

  const logo = <Image
    priority={false}
    width={80}
    height={80}
    src={theme !== "dark" ? "/images/logo.svg" : "/images/logo-dark.svg"}
    alt="4626 Alliance"
    loading="lazy"
    unoptimized={true}
  />;

  return (
    <header className="indexHeader md:full w-screen">
      <Container noHidden>
        <nav className="relative flex items-center justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            {isHome ? (
              <div className="h-[80px] -my-[15px] w-auto md:hover:cursor-pointer" onClick={scrollToTop}>
                {logo}
              </div>
            ) : (
              <Link href="/">
                <a className="h-[80px] -my-[15px] w-auto md:hover:cursor-pointer">
                  {logo}
                </a>
              </Link>
            )}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="rounded-md border-2 border-pink-700 px-4 py-2 font-medium text-pink-700 shadow-sm transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
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
          <nav className="hidden flex-nowrap sm:space-x-4 md:ml-10 md:flex xl:space-x-10 items-center">
            {navigation.map((link, index) =>
              link.isScroll && isHome ? (
                <ScrollLink
                  saveHashHistory={true}
                  to={link.section}
                  key={`nav-desk-${index}`}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className={classNames(
                    "cursor-pointer whitespace-nowrap font-medium text-pink-700",
                    link.featured
                      ? "featuredLink"
                      : "decoration-from-font underline-offset-4" + " hover:text-pink-700" + " hover:underline"
                  )}
                >
                  {link.title}
                </ScrollLink>
              ) : (
                <Link key={link.title} href={link.href} passHref shallow aria-current={isActive(router.pathname, link.href, true) ? "page" : undefined}>
                  <a
                    className={classNames(
                      "cursor-pointer whitespace-nowrap font-medium text-pink-700 dark:text-pink-400 decoration-from-font underline-offset-4",
                      isActive(router.pathname, link.href, true) ? "font-bold underline" : "",
                      link.featured ? "featuredLink" : "hover:underline"
                    )}
                  >
                    {link.title}
                  </a>
                </Link>
              )
            )}
            <ModeToggle />
          </nav>
        </nav>
        {isHeaderExpanded && <div className={`absolute inset-x-0 top-0 z-10 origin-top-right transform p-1`}>
          <div className="rounded-lg bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-4 pt-1">
                <div className="h-[80px] w-auto md:hover:cursor-pointer" onClick={scrollToTop}>
                  {logo}
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="rounded-md border-2 border-pink-700 px-4 py-2 font-medium text-pink-700 shadow-sm transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
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
                    className={classNames("featuredLink cursor-pointer px-3 py-2.5 text-lg font-medium text-pink-700 hover:text-pink-700", )}
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
                        isActive(router.pathname, link.href, true) ? "font-bold" : ""
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>}
      </Container>
    </header>
  );
}