import classes from './Button.module.css'
import { motion } from "framer-motion";

const Button=(props)=>{

    const buttonVariants = {
        hover: {
          scale: 1.1,
          boxShadow: "18px 2px 15px 5px #yellow",
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType:'reverse',
          },
        },
      };
      

const buttonHandler=()=>{
             if(props.children.includes('my')){
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth'
              })
        }
    }
    return(
        <motion.button 
        className={classes.button} 
        onClick={buttonHandler}
        variants={buttonVariants}
        whileHover="hover"
        >{props.children}</motion.button>
    )
}

export default Button