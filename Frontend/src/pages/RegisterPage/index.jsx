import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { register } = React.useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();
        register(name, email, password);

        const nome = name;
        const senha = password;
        
        if (nome === "" || email === "" || senha === "") {
            alert("Fill in all fields");
            return;
        }
        if (nome.length <3 ) {
           alert("Name must have at least 3 characters");
            return;
        }
        if (senha.length < 6) {
            alert("Password must have at least 6 characters");
            return;
        }
        navigate("/main");
    };

    return (
        <div id="login">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={(e) => handleRegister(e)}>                
                        <h1 className="title">User registration </h1>
                    
                        <div className="login-field" >
                            <input 
                                className="input" 
                                type="text" 
                                id="text"  
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value) } />
                            <span className="focus-input"></span>
                        </div>

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
                            <button className="login-btn" type="submit" >register</button>
                        </div>
                       
                    </form>
                </div>    
            </div>
        </div>
    );
};

export default RegisterPage;