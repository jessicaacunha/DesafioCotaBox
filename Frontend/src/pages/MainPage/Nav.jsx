import React, { useState } from "react";

const Nav = ({ onSend }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [participation, setParticipation] = useState("");

    return (
        <div className="nav">
            <h1 className="logo">Customer base</h1>
            <div className="field" >
                <input 
                    className="input" 
                    type="text" 
                    id="text"  
                    placeholder="First Name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />    
                <span className="focus-input"></span>  
            </div>
            <div className="field" >
                <input 
                    className="input" 
                    type="text" 
                    id="text"  
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />      
                <span className="focus-input"></span>
            </div>
            <div className="field" >
                <input 
                    className="input" 
                    type="number" 
                    id="number"  
                    placeholder="Participation"
                    value={participation}
                    onChange={(e) => setParticipation(e.target.value)}
                    /> 
                <span className="focus-input"></span>     
            </div>
            <button className="send-btn" type="submit" onClick={() => onSend(firstName, lastName, participation, setFirstName, setLastName, setParticipation) }>Send</button>   
    </div>
    )
}

export default Nav;