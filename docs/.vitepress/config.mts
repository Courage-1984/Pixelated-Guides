import { defineConfig } from "vitepress";
import { emojiRender, defs, search, socials } from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pixelated Guides",
  base: "/Pixelated-Guides/",
  description: "Pixelated Guides for your Digital Life. Brining you solutions!",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: "dark",
  titleTemplate: ":title • Pixelated Guides by Dietz",
  head: [
    // ["meta", { name: "theme-color", content: "#56b4fc" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/logo/logo.png" }],
    // PWA
    [
      "link",
      { rel: "icon", href: "/asset/logo/logo.png", type: "image/svg+xml" },
    ],
    ["link", { rel: "alternate icon", href: "/asset/logo/logo.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/asset/logo/logo.png", color: "#56b4fc" },
    ],
    // prettier-ignore
    [
      "meta",
      { name: "keywords", content: "Anime, Anime Piracy, Manga, Manga Piracy, VTuber, Hentai, JPOP, Music, Japan, Learning Japanese, Weeb, Otaku" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/asset/logo/logo.png",
        sizes: "192x192",
      },
    ],
  ],
  srcExclude: ["README.md"],
  markdown: {
    emoji: { defs },
    config(md) {
      md.use(emojiRender);
      // md.use(imgLazyload);
      // md.use(align);
      // md.use(figure);
      // md.use(tabsMarkdownPlugin);
      // md.use(imgSize);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: search,
    logo: { src: "/asset/logo/logo.png" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Prescriptions", link: "/prescriptions" },
    ],
    sidebar: [
      {
        text: "Prescriptions",
        items: [
          { text: "Adobe Treatment", link: "/adobe-treatment" },
          { text: "Windows Treatment", link: "/windows_treatment.md" },
          { text: "Office Teatment", link: "/office_treatment.md" },
        ],
      },
      {
        text: "Sources",
        items: [
          { text: "Windows & Office", link: "/windows_&_office_sources.md" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: socials,
  },
});

