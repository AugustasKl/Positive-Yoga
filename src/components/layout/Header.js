import classes from "./Header.module.css";
import headerLogo from "../../assets/svg/headerLogo.svg";
const Header = () => {
  return (
    <header className={classes.header}>
      <img src={headerLogo} className={classes.logo} alt="Positive Yoga Logo" />
      <div classname={classes.name}>
        <h6>Positive</h6>
        <h6>YOGA</h6>
      </div>
    </header>
  );
};
export default Header;
