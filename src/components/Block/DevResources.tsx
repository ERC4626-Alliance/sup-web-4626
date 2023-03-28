import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import PinnedResources from "@/components/Block/PinnedResources";
import repositories from "@/content/repositories.json";
import { IoLogoGithub } from "react-icons/io";
import React from "react";

export default function BlockDevResources() {
  return (
    <div className="uiBlock lightBackground mt-24" id="resources">
      <AtomTitle alignText="center" subtitle="Explore relevant resources">
        ERC-4626 RESOURCES
      </AtomTitle>
      <PinnedResources/>
      <Container>
        <ul className="flex flex-row flex-wrap justify-center gap-2 md:gap-6">
          {repositories
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener group"
                  className="group group inline-flex items-center whitespace-nowrap rounded-lg border border-pink-600/10 bg-white py-3.5 pl-2.5 pr-4 text-sm text-pink-700 underline-offset-4 shadow-sm md:text-base md:hover:underline"
                >
                  <IoLogoGithub className="-ml-0.5 mr-1.5 h-4 w-4 opacity-25 md:h-8 md:w-8 md:group-hover:opacity-100" />
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
}