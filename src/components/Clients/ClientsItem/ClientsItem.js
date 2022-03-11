import classes from './ClientsItem.module.css'

//after receiving data from ClientsList, ClientsItem component destructures
// this data and uses it to render clients' stories.

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
            <img src={stars} alt='Stars logo'/>
            </div>
            <div className={classes.image}>
                <img src={image} alt='Person image'/>
            </div>
            <div className={classes.comment}>
                {comment}
            </div>
        </div>
    )
}
export default ClientsItem