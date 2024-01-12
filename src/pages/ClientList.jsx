import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClients } from "../services/clientServices";

export const ClientList = ({setToken, token}) => {

    const [clients, setClients] = useState ([])
    const [sortedClients, setSortedClients] = useState([])

    const getAndSetClients = () => {
        getClients().then((clientsArray) => {
          setClients(clientsArray);
        });
      };
    
      useEffect(() => {
        getAndSetClients();
      }, []);
    
      useEffect(() => {
        const sorted = [...clients].sort((a, b) => a.name.localeCompare(b.name));
        setSortedClients(sorted);
      }, [clients]);

    let navigate = useNavigate();

    return (
        <div>
            <h2>Client List</h2>
            <ul>
                {sortedClients.map((client) => (
                <li key={client.id}>{client.name}</li>
                ))}
            </ul>
        </div>
    )
}