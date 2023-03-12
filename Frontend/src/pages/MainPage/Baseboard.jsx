import React from "react";

const Baseboard = ({ onExit }) => {
    return (
        <div className="baseboard">
            <h3 className="logo">User</h3>
            <button className="btn" type="submit" onClick={onExit}>Exit</button>
        </div>
    );
}

export default Baseboard;

