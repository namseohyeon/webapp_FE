import { API_BASE_URL } from '../api-config';

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    console.log(`API Request: ${method} ${options.url}`, request); // 디버깅용 로그

    return fetch(options.url, options)
        .then((response) => {
            if(response.status===200){
                return response.json();
            }
            // if (response.ok) {
            //     return response.json();
            // } else {
            //     return Promise.reject(`HTTP error! status: ${response.status}`);
            // }
        }).catch((error)=>{
            console.log("http error")
            console.log(error);
        })
}
