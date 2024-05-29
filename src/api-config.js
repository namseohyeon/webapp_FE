let backendHost;

const hostaname = window && window.location && window.location.hostname;

if(hostaname === "localhost"){
    backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;