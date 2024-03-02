import { FooterLinkPropsType } from "../../types/Types";
// Single footer link Component
export default function FooterLink({ title }: FooterLinkPropsType) {
  return (
    <li>
      <a className="footer__link" href="#/">
        {title}
      </a>
    </li>
  );
}
