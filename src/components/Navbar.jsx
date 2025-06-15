import { NavLink } from "react-router-dom";
import * as ROUTES from "@/constants/routes"

export default function Navbar(){
    return (
        <navbar className="p-4 border-b-2 border-gray-500 flex justify-between">
            <NavLink className={({ isActive }) => isActive ? "border-b-2 border-orange-600" : "border-b-2 border-orange-100"} to={ROUTES.SHADCN}>Shadcn</NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-b-2 border-orange-600" : "border-b-2 border-orange-100"} to={ROUTES.MATERIAL}>Material</NavLink>
        </navbar>
    )
}