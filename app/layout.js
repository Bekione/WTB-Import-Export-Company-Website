import ScrollProgressIndecator from "@components/ScrollProgressIndecator";
import TopContactBar from "@components/TopContactBar";
import Nav from "@components/Nav";
import { beVietnam } from '@utils/font'
import "./globals.css";

export const metadata = {
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
      <body className={beVietnam.className}>
        {/* <ScrollProgressIndecator /> */}
        <header className='header'>
          <TopContactBar />
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
