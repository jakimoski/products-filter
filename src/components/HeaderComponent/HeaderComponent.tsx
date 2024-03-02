import HeaderActionIcons from "./HeaderActionIcons";
import HeaderLogo from "./HeaderLogoComponent";
import HeaderNav from "./HeaderNavComponent";
// Header Component
export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <HeaderLogo />
        <HeaderNav />
        <HeaderActionIcons />
      </div>
    </header>
  );
}
