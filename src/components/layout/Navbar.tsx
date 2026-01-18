import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="/vehicles">Vehicles</NavLink> |{" "}
            <NavLink to="/rentals">Rentals</NavLink>
        </nav>
    );
}