import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListEntreprise } from "./List";
import { AddEditEntreprise } from "./AddEdit"; 

function Entreprise() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListEntreprise />} />
                <Route path="add" element={<AddEditEntreprise />} />
                <Route path="edit/:id" element={<AddEditEntreprise />} />
            </Routes>
        </div>
    );
}

export { Entreprise };