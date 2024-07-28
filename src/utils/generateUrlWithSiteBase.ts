import { SITE } from "@config";

export default function generateUrlWithSiteBase(url: string, siteOrigin: URL) {
  return url?.startsWith("http")
    ? url
    : new URL(
        url?.startsWith("/") ? `${SITE.base}${url}` : `${SITE.base}/${url}`,
        siteOrigin.origin
      ).href;
}
