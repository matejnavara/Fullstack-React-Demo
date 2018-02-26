import request from './RequestService';

let baseURL = "";

export let findAll = () => {
    return request({url: baseURL + "/vendors"})
        .then(data => data = JSON.parse(data))
}

export let findById = (id) => {
    return request({url: baseURL + "/vendors/" + id})
        .then(data => data = JSON.parse(data))
}