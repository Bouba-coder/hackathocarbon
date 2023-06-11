import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListUser } from "./List";
import { AddEditUser } from "./AddEdit"; 

function User() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListUser/>} />
                <Route path="add" element={<AddEditUser/>} />
                <Route path="edit/:id" element={<AddEditUser/>} />
            </Routes>
        </div>
    );
}

export { User };