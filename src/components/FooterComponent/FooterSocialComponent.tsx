import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Footer social links with icons Component
export default function FooterSocial() {
  return (
    <div className="footer__social">
      <div className="footer__social__title">
        <h3>Social Share</h3>
      </div>
      <div className="footer__social__list">
        <a className="footer__social__icon" href="#/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="footer__social__icon" href="#/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="footer__social__icon" href="#/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="footer__social__icon" href="#/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}
