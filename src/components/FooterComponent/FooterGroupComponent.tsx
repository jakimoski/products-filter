import { FooterLinkPropsType } from "../../types/Types";
import FooterLink from "./FooterLinkComponent";
// Footer group with title and list of related links Component
export default function FooterGroup({ title, links }: FooterLinkPropsType) {
  return (
    <div className="footer__group">
      <h3 className="footer__group__title">{title}</h3>
      <ul className="footer__group__list">
        {links
          ? links.map((link, idx) => <FooterLink key={idx} title={link} />)
          : null}
      </ul>
    </div>
  );
}
