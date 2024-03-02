import NavLink from "./NavLinkComponent";
// Header links
const linkNames: string[] = [
  "Home",
  "Bikes",
  "Gear",
  "Parts",
  "Tires",
  "Service-Info",
  "Catalogues",
  "Contact",
];

// Header navigation component
export default function HeaderNav() {
  return (
    <>
      <button
        className="nav__toggle"
        aria-label="Menu Toggle"
        aria-controls="primary-navigation"
      >
        <span></span>
      </button>
      <nav aria-label="Main Navigation" className="nav">
        <ul className="nav__list">
          {linkNames.map((link, idx) => (
            <NavLink key={idx} linkProps={link} />
          ))}
        </ul>
      </nav>
    </>
  );
}
