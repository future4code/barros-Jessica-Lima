import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHome } from "../AdminHome/AdminHome";
import { AplicationForm } from "../AplicationForm/AplicationForm";
import { CreateTrip } from "../CreateTrip/CreateTrip";
import { Home } from "../Home/Home";
import { ListTrip } from "../ListTrip/ListTrip";
import { Login } from "../Login/Login";
import { TripDetails } from "../TripDetails/TripDetails";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="list-trip" element={<ListTrip/>} />
                <Route path="aplication-form" element={<AplicationForm/>} />
                <Route path="login" element={<Login/>} />
                <Route path="admin-home" element={<AdminHome/>} />
                <Route path="trip-details" element={<TripDetails/>} />
                <Route path="create-trip" element={<CreateTrip/>} />
            </Routes>
        </BrowserRouter>
    )
}