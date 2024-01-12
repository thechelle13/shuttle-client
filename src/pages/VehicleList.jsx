import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVehicles } from "../services/vehicleServices";

export const VehicleList = ({setToken, token}) => {
    const [vehicles, setVehicles] = useState([])

    const getAndSetVehicles = () => {
        getVehicles().then((vehiclesArray) => {
          const sortedVehicles = vehiclesArray.sort((a, b) =>
            a.label.localeCompare(b.label)
          );
          setVehicles(sortedVehicles);
        });
      };
    
      useEffect(() => {
        getAndSetVehicles();
      }, []);

    let navigate = useNavigate();



    return (
        <div>
            <ul>
            {vehicles.map((vehicle) => (
                <li key={vehicle.id}>{`Vehicle Name: ${vehicle.label}`}</li>
            ))}
            </ul>
        </div>

    )
}