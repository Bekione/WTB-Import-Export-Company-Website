import { Be_Vietnam_Pro, Poiret_One } from "next/font/google";

export const beVietnam = Be_Vietnam_Pro({
  weight: ["100", "200", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-vietnam",
});

export const poiret = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poiret",
});
