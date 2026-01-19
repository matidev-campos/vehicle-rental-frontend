import { vehiclesMock } from "@/api/vehicles.mock";
import VehicleCard from "@/components/vehicle/VehicleCard";

export default function VehiclesPage(){
    return (
        <>
        <h2>Available Vehicles</h2>

        {vehiclesMock.map((vehicle) => (<VehicleCard key={vehicle.id} vehicle={vehicle} />))}
        </>
    );
}