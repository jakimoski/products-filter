import Logo from "../../assets/img/logo.png";
// Header LOGO Component
export default function HeaderLogo() {
  return (
    <div className="header__logo">
      <a href="#Home">
        <img className="header__logo__img" src={Logo} alt="logo" />
      </a>
    </div>
  );
}
