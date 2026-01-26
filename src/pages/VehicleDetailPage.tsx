import { getVehicleById, isVehicleAvailable, rentVehicle } from "@/api/vehicles.service";
import VehicleInfo from "@/components/vehicle/VehicleInfo";
import type { Vehicle } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function VehicleDetailPage(){

    const {id} = useParams();

    if(!id){
        return <p>Invalid vehicle Id</p>;
    }

    const vehicleId = Number(id);
    const initialVehicle = getVehicleById(vehicleId);

    const [vehicle, setVehicle] = useState<Vehicle | null>(initialVehicle ?? null);

    if(!vehicle){
        return <p>Vehicle not found</p>
    }

    function handleRent(){
        if(!vehicle) return;
        
        try{
            const rendedVehicle = rentVehicle(vehicle);
            setVehicle(rendedVehicle);
        }catch(error){
            alert((error as Error).message);
        }
        
    }

    const available = isVehicleAvailable(vehicle);

    return(
    <div>
            <VehicleInfo vehicle={vehicle} />

            {available ? (
                <button onClick={handleRent}>Rent vehicle</button>
            ) : (
                <p>this vehicle is not available</p>
            )}
        </div>
    );

}