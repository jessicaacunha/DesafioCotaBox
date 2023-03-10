import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import Nav from "./Nav";
import Table from "./Table";
import Baseboard from "./Baseboard";
import { getCustomers, createCustomers,  deleteCustomers } from "../../services/api";
import "./styles.css";

const MainPage = () => {
    const { logout } = useContext(AuthContext);
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadData = async () => {
        try {
            const response = await getCustomers();
            setCustomers(response.data.clientes);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        (async () => {
            await loadData();
        })();
    }, []);  

    const handleSend = async (nome, sobrenome, participacao, setFirstName, setLastName, setParticipation) => {
        const participationTotal = customers.reduce((acc, curr) => acc + curr.participacao, 0);
        if (participationTotal + Number(participacao) > 100) {
            alert(`Participation total cannot be greater than 100%, rest ${100 - participationTotal}%`);
            return;
        }
        if (nome === "" || sobrenome === "" || participacao === "") {
            alert("Fill in all fields");
            return;
        }
        if (nome.length <3 || sobrenome.length < 3) {
           alert("First name and last name must have at least 3 characters");
        return;
        }



        setFirstName("");
        setLastName("");
        setParticipation("");
        try {
            await createCustomers(nome, sobrenome, participacao);
            await loadData();
        } catch (error) {
           console.log(error);
           setError(true);
        } 
    };

    const handleDelete = async (customers) => {
        await deleteCustomers(customers);
        await loadData();
    };

    const handleEdit = () => {
       console.log("Edit");
    };

    const handleExit = () => {
        logout();
    };

    if (error) {
       return <div>Something went wrong...</div>;
    }

    if (loading) {
       return <div>Loading...</div>;
    }

    return (
        <div id="main">
        <Nav onSend={handleSend} />
        <Table customers={customers} onDelete={handleDelete} onEdit={handleEdit} />
        <Baseboard onExit={handleExit} />
        </div>
    );
};

export default MainPage;
