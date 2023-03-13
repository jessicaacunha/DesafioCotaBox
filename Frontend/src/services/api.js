import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8000',
});

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