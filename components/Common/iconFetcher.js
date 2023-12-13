import TelegramIcon from "@utils/TelegramIcon";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const getIconByName = (name) => {
    switch (name) {
      case 'facebook':
        return faSquareFacebook;
      case 'instagram':
        return faSquareInstagram;
      case 'linkedin':
        return faLinkedin;
      case 'telegram':
        return <TelegramIcon />;
      case 'mobile':
        return faMobile;
      case 'envelope':
        return faEnvelope;
      default:
        return null;
    }
  };