import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
   
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default Navigation;
