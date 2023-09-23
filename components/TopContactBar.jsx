import Link from "next/link";
import TelegramIcon from "@utils/TelegramIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const TopContactBar = () => {
  return (
    <div className="hidden md:flex h-[52px] items-center justify-between px-[3%] py-[.6rem] bg-clr-secondary">
      <div className="flex items-center gap-4 ">
        <div className="flex items-center">
          <Link
            href="tel:+251911046555"
            className="group flex align-center gap-1.5 transition duration-500 ease-out"
          >
            <FontAwesomeIcon
              icon={faMobile}
              size="xl"
              className="text-clr-primary mt-[2px]"
            />
            <span className="underlined_link group-hover:text-clr-primary">
              +251911046555
              <span className="hover_underline group-hover:transition-duration-500"></span>
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            href="mailto:wondeitsln@gmail.com"
            className="group flex align-center gap-1.5 transition duration-500 ease-out"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="text-clr-primary mt-[3px]"
            />
            <span className="underlined_link group-hover:text-clr-primary">
              wondeitsln@gmail.com
              <span className="hover_underline group-hover:transition-duration-500"></span>
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        <ul className="flex items-center gap-4" role="list">
          <li>
            <Link href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="xl"
                className="header_social_icons"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="xl"
                className="header_social_icons"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="header_social_icons"
              />
            </Link>
          </li>
          <li>
            <Link href="http://www.telegram.com" target="_blank">
              <TelegramIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopContactBar;
