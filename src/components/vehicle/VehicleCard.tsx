import type { Vehicle } from "@/types/vehicle";
import VehicleInfo from "./VehicleInfo";
import { useNavigate } from "react-router-dom";

interface Props {
    vehicle : Vehicle;
}

export default function VehicleCard({vehicle} : Props){

    const navigate = useNavigate();

    function handleClick(){
        navigate(`/vehicles/${vehicle.id}`);
    }

    return (
        <div onClick={handleClick} style={{cursor : "pointer"}}>
            <VehicleInfo vehicle={vehicle} />
        </div>
    );
}