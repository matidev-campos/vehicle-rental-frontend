import HomePage from "@/pages/HomePage";
import RentalVehicles from "@/pages/RentalsPage";
import VehiclesPage from "@/pages/VehiclesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles" element={<VehiclesPage/>} />
            <Route path="/rentals" element={<RentalVehicles/>} />
        </Routes>
        </BrowserRouter>
    );
}