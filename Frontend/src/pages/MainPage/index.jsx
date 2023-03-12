import React from "react";

import Nav from "./Nav";
import Table from "./Table";
import Baseboard from "./Baseboard";

import "./styles.css";

const MainPage = () => {
    const handleSend = (firstname, lastName, participation) => {
        console.log("Name",firstname, "Last Name", lastName, "Participation", participation);
    };

    const handleDelete = (customers) => {
        console.log("Delete", customers);
    };

    const handleEdit = (customers) => {
        console.log("Edit", customers);
    };

    const handleExit = () => {
        console.log("Exit");
    };

    return (
        <div id="main">
            <Nav onSend={handleSend} />
            <Table customers={[]} onDelete={handleDelete}  onEdit={handleEdit}/>
            <Baseboard onExit={handleExit} />
        </div>
    );
};

export default MainPage;