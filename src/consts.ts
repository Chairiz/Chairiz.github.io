import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Erzet.Me",
  EMAIL: "rayzaqi@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Koleksi project yang aku buat",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://instagram.com/cchairiz",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Chairiz"
  },
  { 
    NAME: "youtube",
    HREF: "https://www.youtube.com/Petshopper",
  }
];
