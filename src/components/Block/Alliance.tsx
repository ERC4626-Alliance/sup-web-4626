import Container from "@/components/Container";
import AtomTitle from "@/components/Atom/Title";
import React from "react";
import {IoLogoTwitter} from "react-icons/io";
import alliance from "@json/alliance.json";
import Link from "next/link";
import {classNames} from "@/helpers/formatters";

function QuoteIcon(props: any) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path
        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"/>
    </svg>
  );
}

export default function BlockAlliance({fullScreen = false}: { fullScreen?: boolean }) {
  return (
    <section
      className={classNames("to-white-100 bg-gradient-to-t from-pink-300 py-16 text-center", fullScreen && "min-h-screen")}
    >
      <Container>
        <div className="mx-auto max-w-5xl text-slate-700 md:text-center">
          <AtomTitle alignText="center">4626 Alliance</AtomTitle>
          <p className="mt-4 text-xl leading-relaxed">
            <strong>The 4626 Alliance</strong> is a group of leading protocols and applications that share the mission of supporting the development and deployment of
            <code className="mx-[2px]  select-none rounded-lg bg-pink-100 px-2 py-1">ERC-4626</code> vaults.
            <code className="mx-[2px] select-none rounded-lg bg-pink-100 px-2 py-1">ERC-4626</code>
            drastically simplifies the process of building cool and useful applications by decreasing the complexity of integration while improving UX and security.
          </p>
        </div>
        <ul role="list" className="mx-auto my-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
          {alliance.map((testimonial, testimonialIndex) => (
            <li key={testimonialIndex}>
              <a href={testimonial.website} target="_blank" className="relative flex rounded-lg bg-white p-6 shadow-xl shadow-slate-900/10 lg:hover:bg-white/70" rel="noreferrer">
                <figure>
                  <QuoteIcon className="absolute top-6 left-6 fill-pink-100/40 group-hover:fill-white/70"/>
                  <blockquote className="relative">
                    <p className="text-right text-lg text-slate-700">{testimonial.content}</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t-[0.5px] border-pink-200 pt-6 text-left">
                    <div>
                      <div
                        className="mt-3 flex items-center whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-2xl font-extrabold uppercase tracking-tight text-transparent">
                        {testimonial.name}
                        <a
                          href={`https://twitter.com/${testimonial.twitter}`}
                          target="_blank"
                          className="group ml-4 inline-flex items-center space-x-1.5 font-semibold text-pink-700 underline decoration-from-font underline-offset-4 md:space-x-2 md:no-underline md:hover:text-pink-700 md:hover:underline"
                          rel="noreferrer"
                        >
                          <IoLogoTwitter className="h-[20px] w-auto md:opacity-25 md:group-hover:opacity-100"/>
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img className="h-14 w-14 object-cover" src={`/images/logos/${testimonial.logo}`} alt={testimonial.name} width={70} height={70}/>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col items-center md:mt-8">
          {fullScreen ? (
              <>
              <div className="py-16">
                <AtomTitle alignText="center">Total funding amount</AtomTitle>
                <div className="text-4xl font-black font-mono tracking-relaxed text-white">$15,000</div>
              </div>

            <a
              target="_blank"
              href="https://forms.gle/DsCsttsxBUYQTB9r6"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-8 py-5 text-xl font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
            >
              Join the Alliance
            </a>
            </>
            ) : (
            <Link href="/about-us">
            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-8 py-5 text-xl font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md">
            Learn more about the 4626 Alliance
            </a>
            </Link>
            )}
        </div>
      </Container>
    </section>
  );
}