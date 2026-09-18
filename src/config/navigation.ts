import { BookOpen, Swords, Map, Boxes, Compass, Users } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Swords, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "items", path: "/items", icon: Boxes, isContentType: true },
  { key: "controls", path: "/controls", icon: Compass, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
