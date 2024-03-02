import { LinkType } from "../../types/Types";
// Single link for header navigation
export default function NavLink({ linkProps }: LinkType) {
  return (
    <li className="nav__list-item">
      <a className="nav__list-link" href="#/">
        {linkProps}
      </a>
    </li>
  );
}
