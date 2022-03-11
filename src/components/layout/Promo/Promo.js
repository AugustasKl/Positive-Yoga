import tag from '../../../assets/svg/tag.svg'
import classes from './Promo.module.css'
import { motion } from "framer-motion";


const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

const Promo=()=>{

    return(
        <motion.div
        className={classes.promo}
        variants={buttonVariants}
        initial='hidden'
        animate='visible'
        >
            <img src={tag} className={classes.tag} alt='price tag logo'/>
            <h6>50% discount only valid for 00:15:49</h6>
        </motion.div>
    )
}

export default Promo