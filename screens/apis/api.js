import { SERVER_IP, SERVER_PORT } from '@env';

const url = `http://${SERVER_IP}:${SERVER_PORT}`;
//Needs to write a method for working correctly
const fetchFunc = (url, method, data) => {
    if (method === 'GET') {
        return fetch(url);
    }

    if (method !== 'GET') {
        return fetch(url, {
            method,
            mode: 'cors',
            headers: {
                'Accepted': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
};

//Storage apis
export const getAllProducts = async () => {
    try {
        const products = await fetchFunc(url + '/storage', 'GET');

        return products.json();
    } catch (err) {
        console.log(err);
        return err.message;
    }
};

export const getProduct = async (id) => {
    try {
        const product = await fetchFunc(url + `/storage/${id}`, 'GET');

        return product.json();
    } catch (err) {
        console.log(err);
    }
};

//Product apis
export const rateProduct = async (id, rating) => {
    try {
        const res = fetchFunc(url + `/product/${id}/rating`, 'PUT', rating)

        return (await res).json();
    } catch (err) {
        console.log(err);
    }
};
