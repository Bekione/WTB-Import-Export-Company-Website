import ScrollProgressIndicator from "@components/ScrollProgressIndecator";
import Header from "@components/Header";
import { beVietnam } from "@utils/font";
import "./globals.css";

const metadata = {
  title: "Wondmneh Tsegaye Import & Export | Embedded Inside",
  description: "Serving customers with the world class it solution.",
  metadataBase: new URL("https://wondeitsln.com"),
  generator: "Next.js",
  category: "portfolio",
  applicationName: "WTB Import Export",
  referrer: "origin-when-cross-origin",
  keywords: ["Import", "Export", "Advertisment", "Is solution", "Ethiopian"],
  colorScheme: "light",
  creator: "Bereket Kinfe",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: " ",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${beVietnam.className} leading-6 min-h-[150vh] relative text-clr-primary`}
      >
        {/* <ScrollProgressIndecator /> */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
