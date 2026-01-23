import type { Vehicle } from "@/types/vehicle";

export const vehiclesMock: Vehicle[] = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2013,
        pricePerDay: 45,
        status: "AVAILABLE",
    },
    {
        id: 2,
        brand: "Ford",
        model: "Focus",
        year: 2014,
        pricePerDay: 40,
        status: "AVAILABLE",
    },
    {
        id: 3,
        brand: "Renault",
        model: "Clio",
        year: 2018,
        pricePerDay: 20,
        status: "RENTED",
    },
];