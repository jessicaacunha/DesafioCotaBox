import React, { useState } from "react";

import { AuthContext } from "../../contexts/auth";

import { useNavigate } from "react-router-dom";

import "./styles.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        login(email, password);

        navigate("/main");
    };

    return (
        <div id="login">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={(e) => handleLogin(e)}>                
                        <h1 className="title">Login</h1>
                        <div className="login-field" >
                            <input 
                                className="input" 
                                type="email" 
                                id="email"  
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value) } />
                            <span className="focus-input"></span>
                        </div>

                        <div className="login-field" >
                            <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value) }/>
                            <span className="focus-input"></span>
                        </div>

                        <div className="actions">
                            <button className="login-btn" type="submit" >Login</button>
                        </div>
                        
                        <div className="text">
                            <a className="text2" href="http://localhost:3000/cadastrousuario">
                                Create your Account
                            </a>
                        </div>
                    </form>
                </div>    
            </div>
        </div>
    );
};

export default LoginPage;