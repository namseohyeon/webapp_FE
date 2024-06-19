import { API_BASE_URL } from './api-config';


export function signin(userDTO){
    return call("/auth/signin", "POST", userDTO)
    .then((response) => {
        //console.log("response: ", response);
        //alert("로그인 토큰:" + response.token);
        if(response.token){
            localStorage.setItem("ACCESS_TOKEN", response.token)
            window.location.href = "/";
        }
    })
}

export function signout(){
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && accessToken!=null){
        headers.append("Authorization","Bearer " + accessToken);
    }
    let options = {
        headers: headers,
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
            else if(response.status === 403){
                window.location.href='/login';
            }else{
                Promise.reject(response);
                throw Error(response);
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
