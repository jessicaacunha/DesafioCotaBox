import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet
} from "react-router-dom";

import { AuthProvider, AuthContext } from "../src/contexts/auth";

import LoginPage from "../src/pages/LoginPage";
import MainPage from "../src/pages/MainPage";
import RegisterPage from "../src/pages/RegisterPage";

const AppRoutes = () => {
   

    const ProtectedRoutes = ({ redirectTo }) => {
        const token = localStorage.getItem("token");
      
        return token ? <Outlet /> : <Navigate to={redirectTo} />;
      };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/cadastrousuario" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<ProtectedRoutes redirectTo="/login" />}>
                    <Route path="/" element={<MainPage />} />
          </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;