export function responseHandler(response: any) {
    let status = response.status;
    if (status != 200) {
        return response.json()
            .then((error: any) => {
                return Promise.reject(error);
            });
    } else {
        return response.json();
    }
}

export function get(url: any) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'fr-FR',
            'Content-Type': 'application/json',
        } as any,
        credentials: 'include',
        mode: 'cors',
    })
        .then(responseHandler);
}

export function post(url: any, body: any) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'fr-FR',
            'Content-Type': 'application/json',
        } as any,
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(body),
    })
        .then(responseHandler);
}

export function upload(url: string, body: any, file: File) {

    var formdata = new FormData();
    formdata.append("userDataRessource", file);
    formdata.append("body", body);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'fr-FR',
        } as any,
        credentials: 'include',
        mode: 'cors',
        body: formdata,
    })
        .then(responseHandler);
}
