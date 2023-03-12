import React, { useState } from "react";

const RegisterPage = () => {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Name", name);
        console.log("Email", email);
        console.log("Password", password);
    };

    return (
        <div id="login">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">                
                        <h1 className="title">User registration </h1>
                    
                        <div className="field" >
                            <input 
                                className="input" 
                                type="text" 
                                id="text"  
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value) } />
                            <span className="focus-input"></span>
                            {/* <span className="symbol-input">
                                <i className="fa fa-envelope" img={email} aria-hidden="true"></i>
                            </span>                         */}
                        </div>

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
                            <button className="login-btn" type="submit" onClick={handleLogin}>register</button>
                        </div>
                       
                    </form>
                </div>    
            </div>
        </div>
    );
};

export default RegisterPage;