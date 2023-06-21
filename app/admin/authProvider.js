// authProvider.js

import { fetchUtils } from 'react-admin';


const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

export default {
    login: ({ username, password }) =>  {
        const request = new Request(`${apiUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({ name: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return httpClient(request)
            .then(({ json }) => {
                if (json.token) {
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('user', JSON.stringify(json.user));
                } else {
                    throw new Error('Network response was not ok.');
                }
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        try {
            const { id, fullName, avatar ,name } = JSON.parse(localStorage.getItem('user')) ;
            return Promise.resolve({ id, fullName, avatar,name } );
        } catch (error) {
            return Promise.reject(error);
        }
    }
};
