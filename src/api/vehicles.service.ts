import type { Vehicle } from "@/types/vehicle";

import { vehiclesMock } from "./vehicles.mock";

export function getVehicleById(id: number): Vehicle | undefined {
    return vehiclesMock.find((Vehicle) => Vehicle.id === id);
}

export function isVehicleAvailable(vehicle: Vehicle): boolean{
    return vehicle.status === "AVAILABLE";
}