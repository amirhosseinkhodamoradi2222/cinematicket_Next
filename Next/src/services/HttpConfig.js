import axios from 'axios';

// Shared BaseUrls between APIs
const baseURL = process.env.NEXT_PUBLIC_BASEURL_API;

axios.defaults.withCredentials = true;

// Shared headers between APIs
const headers = {
    'Content-Type': 'application/json',
    apikey: process.env.NEXT_PUBLIC_TOKEN_API,
};

//Building a common request framework between APIs
export const Http = axios.create({ baseURL, headers });

// Building a common request framework between Users APIs
export const userRequest = axios.create({
    baseURL: baseURL + '/user',
    headers,
});

// Building a common request framework between Admins APIs
export const adminRequest = axios.create({
    baseURL: baseURL + '/admin',
    headers,
});
