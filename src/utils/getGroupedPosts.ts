import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import getSortedPosts from "./getSortedPosts";

type GroupedPosts = {
  [year: string]: {
    [month: string]: CollectionEntry<"blog">[];
  };
};

export default function groupPostsByDate(posts: CollectionEntry<"blog">[]) {
  posts = getSortedPosts(posts);

  const grouped: GroupedPosts = {};

  posts.filter(postFilter).forEach(post => {
    const date = new Date(post.data.modDatetime ?? post.data.pubDatetime);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    if (!grouped[year]) {
      grouped[year] = {};
    }

    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }

    grouped[year][month].push(post);
  });

  return grouped;
}
