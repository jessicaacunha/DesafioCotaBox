import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import LoginPage from "../src/pages/LoginPage";
import MainPage from "../src/pages/MainPage";
import RegisterPage from "../src/pages/RegisterPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/cadastrousuario" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;