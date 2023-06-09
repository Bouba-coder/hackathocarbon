import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardRH from "../DashboardRH";
import HomeRH from "../../components/RH/HomeRH";
import { Entreprise } from "./entreprise/Index";
import { Consultant } from "./consultant/Index";
import { Formation } from "./formation/Index";
import { User } from "./user/Index";
import Forum from "../../components/Consultant/Forum";

function Dashboard() {

    return (
        <DashboardRH>
            <Routes>
                <Route path="/" element={<HomeRH />} />
                <Route path="entreprise/*" element={<Entreprise />} />
                <Route path="consultant/*" element={<Consultant />} />
                <Route path="formation/*" element={<Formation />} />
                <Route path="user/*" element={<User />} />
                <Route path="forum" element={<Forum />} />
            </Routes>
        </DashboardRH>
    );
}

export { Dashboard };