import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListFormation } from "./List";

function Formations() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListFormation/>} />
            </Routes>
        </div>
    );
}

export { Formations };