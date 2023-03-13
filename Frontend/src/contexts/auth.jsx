import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, loginUser, createUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user && token) {
            setUser(JSON.parse(user));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
    }, []);

    const register = async (name, email, password) => {

        const response = await createUser(name, email, password);
        localStorage.setItem("user", JSON.stringify(response.data.usuario));
        localStorage.setItem("token", response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        setLoading(false);

        navigate("/main");
    };

    const login = async (email, password) => {

        const response = await loginUser(email, password);
        localStorage.setItem("user", JSON.stringify(response.data.usuario));
        localStorage.setItem("token", response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        setLoading(false);

        navigate("/main");
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        api.defaults.headers.Authorization = null;
        setUser(null);
        setLoading(false);

        navigate("/");
    };

    return (
        <AuthContext.Provider value={{
            authenticated: !!user,
            user,
            token,
            loading,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

