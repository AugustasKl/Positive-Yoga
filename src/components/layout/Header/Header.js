import classes from "./Header.module.css";
import headerLogo from "../../../assets/svg/headerLogo.svg";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.header
     className={classes.header}
     initial={{ x: "50vw" }}
     animate={{ x: 0 }}
     >
      <img src={headerLogo} className={classes.logo} alt="Positive Yoga Logo" />
      <div className={classes.name}>
        <h6 className={classes.positive}>Positive</h6>
        <h6 className={classes.yoga}>YOGA</h6>
      </div>
    </motion.header>
  );
};
export default Header;
