import { CLIENTS_DUMMY_DATA } from "../../DUMMY_DATA/dummyData"
import ClientsItem from "./ClientsItem"
import classes from './ClientsList.module.css'
const ClientsList=()=>{


    return(
        <ul className={classes.list}>
            {CLIENTS_DUMMY_DATA.map((client)=>{
                return <ClientsItem
                id={client.id}
                key={client.id}
                name={client.name}
                city={client.city}
                image={client.image}
                stars={client.stars}
                comment={client.comment}
                />
            })}
        </ul>
    )
}

export default ClientsList