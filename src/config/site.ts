export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Hide ur Base and Steal Wiki",
  shortName: "Hide ur Base and Steal",
  logoText: "H",
  tagline: "Base Hiding, Pet Stealing & Progression Guides",
  description: "Your ultimate guide to Hide ur Base and Steal on Roblox! Discover working codes, pet collecting, base hiding spots, stealing strategies, and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hideurbaseandsteal.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hideurbaseandsteal.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/80844740579381/Hide-ur-Base-and-Steal",
  heroVideoId: "Xld4JVVKQUw", // Roblox Hide ur Base and Steal gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
