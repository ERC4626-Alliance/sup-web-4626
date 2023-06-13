import { IoMdDocument } from "react-icons/io";
import React from "react";
import resources from "@json/security/articles.json";
import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";

export default function BlockSecurityArticles() {
  return (
    <Container>
      <AtomTitle alignText="center" subtitle="Articles, blogposts and last but not least audits for the ERC-4626">
        ERC-4626 Security Resources
      </AtomTitle>
      <ul
        role="list"
        className="mx-auto mb-8 grid max-w-2xl cursor-default select-none grid-cols-1 gap-6 text-left text-sm text-pink-700 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {resources.map((resource, index) => (
          <a
            key={`pinned-resource-${index}`}
            href={resource.href}
            target="_blank"
            rel="nofollow noreferrer"
            className="rounded-lg bg-white p-8 text-slate-700 shadow-xl shadow-slate-900/10 dark:bg-pink-700 dark:text-white lg:hover:bg-white/70 dark:lg:hover:bg-pink-700/70"
          >
            <div className="flex flex-nowrap justify-between">
              <IoMdDocument className="h-8 w-8" />
              <small>Created by {resource.creator}</small>
            </div>
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 to-pink-900 bg-clip-text text-lg font-extrabold capitalize tracking-tight text-transparent dark:from-pink-50 dark:to-pink-300">
              {resource.title}
            </h3>
            <p className="mt-2 leading-relaxed dark:text-white">{resource.description}</p>
          </a>
        ))}
      </ul>
    </Container>
  );
}