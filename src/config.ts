import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://gehuhaldwani.github.io",
  base: "/techgeeks",
  author: "TechGeeks Team",
  profile: "",
  desc: "TechGeeks is the offical tech club of Graphic Era Hill University, Haldwani Campus.",
  title: "TechGeeks",
  ogImage: "/images/logo/color.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 70,
  height: 0,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/techgeeksgehu",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: true,
  // },
  {
    name: "Instagram",
    href: "https://www.instagram.com/techgeeksgehu/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/techgeeksgehu/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:techgeeks@gehu.ac.in",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/n8NnubD9PW",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  // {
  //   name: "Twitch",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on TikTok`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  // {
  //   name: "GitLab",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Reddit",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  {
    name: "Telegram",
    href: "https://t.me/techgeeksclub",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
