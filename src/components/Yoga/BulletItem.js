import bulletPoint from './../../assets/svg/bulletPoint.svg'
import classes from './BulletItem.module.css'


const BulletItem=(props)=>{

    return(
    <li className={classes.bullet}>
        <img src={bulletPoint} alt="bulletpoint logo"/>
        <div className={classes.text}>{props.bullet}</div>
    </li>
    )
}
export default BulletItem