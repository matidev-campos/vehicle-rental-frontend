import VehicleCard from "@/components/vehicle/VehicleCard";
import { getVehicles } from "@/api/vehicles.service";
import type { Vehicle } from "@/types";
import { useEffect, useState } from "react";

export default function VehiclesPage(){

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
         setVehicles(getVehicles());}
        , []);

    return (
        <>
        <h2>Available Vehicles</h2>

        {vehicles.map((vehicle) => (<VehicleCard key={vehicle.id} vehicle={vehicle} />))}
        </>
    );
}