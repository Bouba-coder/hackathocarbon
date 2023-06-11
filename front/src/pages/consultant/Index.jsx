import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardConsultant from "../DashboardConsultant";
import Formation from "../../components/Consultant/Formation";
import Forum from "../../components/Consultant/Forum";
import { User } from "./user/Index";
import { Consultant } from "./consultant/Index";

function DashConsultant() {

    return (
        <DashboardConsultant> 
            <Routes>
                <Route path="/" element={<Formation />} />
                <Route path="forum" element={<Forum />} />
                <Route path="user/*" element={<User />} />
                <Route path="consultant/*" element={<Consultant />} />
            </Routes>
        </DashboardConsultant>
    );
}

export { DashConsultant };