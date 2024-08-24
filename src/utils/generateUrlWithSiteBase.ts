import { SITE } from "@config";

export default function generateUrlWithSiteBase(url: string, siteOrigin: URL) {
  if (url?.startsWith("http") || url?.startsWith("/" + SITE.base)) return url;

  if (url?.startsWith(SITE.base))
    return new URL("/" + url, siteOrigin.origin).href;

  if (url?.startsWith("/"))
    return new URL(`${SITE.base}${url}`, siteOrigin.origin).href;
  else return new URL(`${SITE.base}/${url}`, siteOrigin.origin).href;
}
