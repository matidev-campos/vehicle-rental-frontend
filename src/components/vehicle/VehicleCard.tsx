import type { Vehicle } from "@/types/vehicle";

interface Props {
    vehicle : Vehicle;
}

export default function VehicleCard({vehicle} : Props){
    return (
        <div>
            <h3>{vehicle.brand} {vehicle.model}</h3>
            <p>Year: {vehicle.year}</p>
            <p>Price per day: ${vehicle.pricePerDay}</p>
            <p>Status: {vehicle.status}</p>
        </div>
    );
}