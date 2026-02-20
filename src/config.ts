import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Tech Geeks",
	subtitle: "Website of Tech Geeks Club, GEHU Haldwani",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 240, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/cover.jpeg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	ogImage: "og.webp",
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-color-32.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
		{
			src: "/favicon/favicon-white-32.png",
			theme: "dark",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "e Certificates",
			url: "https://geuac-my.sharepoint.com/:f:/g/personal/techgeeks_gehu_ac_in/ErYk1XGXJFlDgGn91o5Y2JUBLBHR6rvHTCJDYaqf_3sdYg?e=Ll5Lxe",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/logo.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Tech Geeks Club",
	bio: "TechGeeks is the offical tech club of Graphic Era Hill University, Haldwani Campus.",
	links: [
		{
			name: "Instagram",
			icon: "fa6-brands:instagram", // Visit https://icones.js.org/ for icon codes
			url: "https://instagram.com/techgeeksgehu",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://linkedin.com/company/techgeeksgehu",
		},
		{
			name: "WhatsApp",
			icon: "fa6-brands:whatsapp",
			url: "https://chat.whatsapp.com/DG8kunUqzrB6M08ucQgFRc",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/techgeeksgehu",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.gg/techgeeksgehu",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/techgeeksgehu",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "",
	url: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
