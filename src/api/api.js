import axios from 'axios';


//const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const baseUrl = "https://covid-travel-api.herokuapp.com";

const timeout = 150000;

export const postSource = async (source) => {
    let apiUrl = baseUrl + "sources";
    return axios.post(apiUrl, source, { timeout: timeout }) //30s posting
    //just await and maybe catch error
};

export const login = async credentials => {
    let apiUrl = baseUrl + "login";
    return axios.post(apiUrl, credentials, { timeout: timeout })
}




export const getCountry = async (id) => {
    console.log("sending request to", id)
    return axios({
        method: 'post',
        url: baseUrl + "/query",
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        data: { query: id },
        timeout: timeout,
        withCredentials: false,
    })
    // return fetch("https://covid-travel-api.herokuapp.com/query", {
    //     mode: "cors",
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         query: id
    //     })
    // })
};

export const getHome = async () => {
    let apiUrl = baseUrl + "home";
    return axios.get(apiUrl, { timeout: timeout });

};



