import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Header action links and icons
export default function HeaderActionIcons() {
  return (
    <div className="header__action">
      <a className="header__action__icon" href="#/">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
      <a className="header__action__icon" href="#/">
        <FontAwesomeIcon icon={faBagShopping} />
      </a>
    </div>
  );
}
