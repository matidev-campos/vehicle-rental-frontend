export type VehicleStatus = "AVAILABLE" | "RENTED";

export interface Vehicle {

    id: number;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    status: VehicleStatus;

}