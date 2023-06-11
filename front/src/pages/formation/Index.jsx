import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListFormation } from "./List";
import { AddEditFormation } from "./AddEdit"; 

function Formation() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListFormation/>} />
                <Route path="add" element={<AddEditFormation/>} />
                <Route path="edit/:id" element={<AddEditFormation/>} />
            </Routes>
        </div>
    );
}

export { Formation };