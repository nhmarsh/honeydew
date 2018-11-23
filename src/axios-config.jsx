import React from 'react';
import axios from 'axios';

export const authCookieName = 'honeydewauth';
export const initAxios = (cookies) => {
    if(cookies.get(authCookieName)) {
        setAxiosAuth(cookies.get(authCookieName));
        return true;
    }
    return false;
};

export const setAxiosAuth = (auth) => {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + auth;
};

export const clearAxiosAuth = () => {
    delete axios.defaults.headers.common['authorization'];
};
