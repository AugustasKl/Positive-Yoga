import classes from './Clients.module.css'
import ClientsList from './ClientsList'

const Clients=()=>{
    return(
        <section className={classes.clients}>
            <h2>Hear success stories from our clients</h2>
            <ClientsList/>
            <button className={classes.button}> Get my plan</button>
        </section>
    )
}
export default Clients