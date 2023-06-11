import React from "react";
import { Routes, Route } from "react-router-dom";

import { ViewUser } from "./View";
import { AddEditUser } from "./AddEdit"; 

function User() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ViewUser/>} />
                <Route path="edit/:id" element={<AddEditUser/>} />
            </Routes>
        </div>
    );
}

export { User };