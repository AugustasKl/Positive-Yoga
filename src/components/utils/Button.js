import classes from './Button.module.css'

const Button=(props)=>{
    

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
        <button className={classes.button} onClick={buttonHandler}>{props.children}</button>
    )
}

export default Button