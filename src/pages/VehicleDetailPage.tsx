import { getVehicleById } from "@/api/vehicles.service";
import { useParams } from "react-router-dom";


export default function VehicleDetailPage(){

    const {id} = useParams();

    if(!id){
        return <p>Invalid vehicle Id</p>;
    }

    const vehicleId = Number(id);
    const vehicle = getVehicleById(vehicleId);

    if(!vehicle){
        return <p>Vehicle not found</p>
    }

    return(
    <div>
            <h3>{vehicle.brand} {vehicle.model}</h3>
            <p>Year: {vehicle.year}</p>
            <p>Price per day: ${vehicle.pricePerDay}</p> 
            <p>Status: {vehicle.status}</p>
        </div>
    );

}