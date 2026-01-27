import type { Vehicle, VehicleStatus } from "@/types/vehicle";

import { vehiclesMock } from "./vehicles.mock";

const STORAGE_KEY = "vehicles";

function loadVehicles(): Vehicle[]{

    const data = localStorage.getItem(STORAGE_KEY);
    if(!data){
        localStorage.setItem(STORAGE_KEY,JSON.stringify(vehiclesMock));
        return vehiclesMock;
    }
    return JSON.parse(data);

}

function saveVehicles(vehicles : Vehicle[]){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(vehicles));
}

export function getVehicles(): Vehicle[] {
    return loadVehicles();
}

export function getVehicleById(id: number): Vehicle | undefined {
    const vehicle = loadVehicles();
    return vehicle.find(v => v.id === id);
}

export function isVehicleAvailable(vehicle: Vehicle): boolean{
    return vehicle.status === "AVAILABLE";
}

export function rentVehicle(vehicle: Vehicle): Vehicle{
    if(vehicle.status === "RENTED"){
        throw new Error("Vehicle already rented");
    }

    const vehicles = loadVehicles();

    const RENTED : VehicleStatus = "RENTED";

    const updateVehicles = vehicles.map(v =>
        v.id === vehicle.id ? {...v, status: RENTED} : v
    );

    saveVehicles(updateVehicles);

    return updateVehicles.find(v => v.id === vehicle.id)!;
}