import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar";



export default function Root() {
    return(
        <>
        <Navbar/>
        <ScrollRestoration/>
        <Outlet/>
        </>
    );
}