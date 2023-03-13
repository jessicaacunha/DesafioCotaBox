import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const createUser = async (name, email, password) => {
    const url = `/cadastrousuario`;
    return await api.post(url, {name, email, password});
};

export const loginUser = async (email, senha) => {
    const url = `/login`;
    return await api.post(url, {email, senha});
};

export const getCustomers = async (userId) => {
    let url = `/listarclientes`;

    if (userId) {
        url += `/${userId}`;
    }

    return await api.get(url);
};

export const createCustomers = async (nome, sobrenome, participacao) => {
    const url = `/clientes`;
    return await api.post(url, {nome, sobrenome, participacao});
};

export const updateCustomers = async (userId, nome, sobrenome, participacao) => {
    const url = `/editarclientes/${userId}`;
    return await api.put(url, {nome, sobrenome, participacao});
};

export const deleteCustomers = async (userId) => {
    const url = `/deletarclientes/${userId}`;
    return await api.delete(url);
};

