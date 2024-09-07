import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { SITE } from "@config";
import generateUrlWithSiteBase from "@utils/generateUrlWithSiteBase";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    customData: `<logo>${generateUrlWithSiteBase(
      SITE.ogImage ?? "og.png",
      new URL(SITE.website + SITE.base)
    )}</logo>`,

    items: sortedPosts.map(({ data, slug }) => ({
      link: `${SITE.base}/posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      author: data.author,
      enclosure: {
        length: 1,
        type: "image/jpeg",
        url: generateUrlWithSiteBase(
          typeof data.ogImage === "string"
            ? data.ogImage
            : (data.ogImage?.src ?? SITE.ogImage ?? "og.png"),
          new URL(SITE.website + SITE.base)
        ),
      },
    })),
  });
}
