import React from "react";

import { useEffect, useState } from "react";


const Baseboard = ({ onExit }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem("user");
        const userObj= JSON.parse(user);
        if (userObj) {
            setUser(userObj);
        }
    }, []);


    return (
        <div className="baseboard">
            <h3 className="logo">{user.nome}</h3>
            <button className="btn" type="submit" onClick={onExit}>Exit</button>
        </div>
    );
}

export default Baseboard;

