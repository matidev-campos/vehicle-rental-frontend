import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import VehiclesPage from "@/pages/VehiclesPage";
import RentalsPage from "@/pages/RentalsPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
