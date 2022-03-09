import classes from './ClientsItem.module.css'

const ClientsItem=(props)=>{
const{name, city, stars, comment,image}=props


    return(
        <div className={classes.item}>
            <div className={classes.name}>
                {name}
            </div>
            <div className={classes.city}>
                {city}
            </div>
            <div className={classes.stars}>
            <img src={stars} alt={name}/>
            </div>
            <div className={classes.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={classes.comment}>
                {comment}
            </div>
        </div>
    )
}
export default ClientsItem