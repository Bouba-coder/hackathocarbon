import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListConsultant } from "./List";
import { AddEditConsultant } from "./AddEdit"; 

function Consultant() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListConsultant/>} />
                <Route path="add" element={<AddEditConsultant/>} />
                <Route path="edit/:id" element={<AddEditConsultant/>} />
            </Routes>
        </div>
    );
}

export { Consultant };