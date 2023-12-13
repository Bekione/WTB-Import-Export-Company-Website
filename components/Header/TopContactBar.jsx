import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { socialLinks } from "@components/Common/socialLinksData";
import { topBarLinks } from "./navLinkData";
import { getIconByName } from "@components/Common/iconFetcher";

const TopContactBar = () => {
  return (
    <div className="hidden md:flex h-[52px] items-center justify-between px-[3%] py-[.6rem] bg-clr-secondary">
      <div className="flex items-center gap-8 ">
        {topBarLinks.map((topLink) => (
          <div className="flex items-center" key={topLink.id}>
            <Link
              href={topLink.link}
              className="group flex align-center gap-1.5 transition duration-500 ease-out"
            >
              <FontAwesomeIcon
                icon={getIconByName(topLink.id)}
                size="xl"
                className="text-clr-primary mt-[2px]"
              />
              <span className="underlined_link group-hover:text-clr-primary">
                {topLink.name}
                <span className="hover_underline group-hover:transition-duration-500"></span>
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="">
        <ul className="flex items-center gap-4" role="list">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <Link href={socialLink.link} target="_blank">
                {socialLink.link !== "telegram" ? (
                  <FontAwesomeIcon
                    icon={getIconByName(socialLink.link)}
                    size="xl"
                    className="header_social_icons"
                  />
                ) : (
                  socialLink.link
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopContactBar;
