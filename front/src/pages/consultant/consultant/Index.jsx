import React from "react";
import { Routes, Route } from "react-router-dom";

import { ViewConsultant } from "./View";
import { AddEditConsultant } from "./AddEdit"; 

function Consultant() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ViewConsultant/>} />
                <Route path="edit/:id" element={<AddEditConsultant/>} />
            </Routes>
        </div>
    );
}

export { Consultant };