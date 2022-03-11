import { CLIENTS_DUMMY_DATA } from "../../../DUMMY_DATA/dummyClients"
import ClientsItem from "../ClientsItem/ClientsItem"
import classes from './ClientsList.module.css'

//ClientList component receives CLIENTS_DUMMY_DATA data and maps over it. This mapped
//data is passed as props to ClientsItem component

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