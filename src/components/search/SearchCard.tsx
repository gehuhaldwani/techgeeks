import { slugifyStr } from "@utils/slugify";
import DateTime from "@components/search/Datetime.tsx";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
}

export default function SearchCard({ href, frontmatter }: Props) {
  const { title, pubDatetime, modDatetime, description, author } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-medium decoration-dashed hover:underline",
  };

  return (
    <div className="card my-5">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h3 {...headerProps}>{title}</h3>
      </a>
      <div className="flex items-center space-x-2 opacity-80">
        <DateTime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <span aria-hidden="true"> · </span>
        <span> {author} </span>
      </div>
      <p>{description}</p>
    </div>
  );
}
