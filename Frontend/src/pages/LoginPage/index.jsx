import React, { useState } from "react";

import "./styles.css";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email", email);
        console.log("Password", password);
    };

    return (
        <div id="login">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">                
                        <h1 className="title">Login</h1>
                    
                        <div className="field" >
                            <input 
                                className="input" 
                                type="email" 
                                id="email"  
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value) } />
                            <span className="focus-input"></span>
                            {/* <span className="symbol-input">
                                <i className="fa fa-envelope" img={email} aria-hidden="true"></i>
                            </span>                         */}
                        </div>

                        <div className="field" >
                            <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value) }/>
                            <span className="focus-input"></span>
                            {/* <span className="symbol-input">
                                <i className="fa fa-lock" img={password} aria-hidden="true"></i>
                            </span> */}
                        </div>

                        <div className="actions">
                            <button className="login-btn" type="submit" onClick={handleLogin}>Login</button>
                        </div>
                        
                        <div className="text">
                            <a className="text2" href="#">
                                Create your Account
                                {/* <i className="fa ml" aria-hidden="true"></i> */}
                            </a>
                        </div>
                    </form>
                </div>    
            </div>
        </div>
    );
};

export default LoginPage;