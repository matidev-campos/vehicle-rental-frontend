import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

export default function MainLayout(){
    return (
        <>
        <NavBar />
        <main>
            <Outlet />
        </main>
        </>
    );
}