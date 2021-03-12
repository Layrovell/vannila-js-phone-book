'use strict';

const BASE_URL = 'http://localhost:8008/api/users';
const url = `/users`;

// function request(url, options) {
//     return fetch(`${BASE_URL}${url}`, options)
//         .then(response => {
//             if (!response.ok) {
//                 return Promise.reject(`${response.status} - ${response.statusText}`);
//             }
//
//             if (!response.headers.get('content-type').includes('application/json')) {
//                 return Promise.reject('Content-type is not supported');
//             }
//
//             return response.json();
//         })
//         .then(result => console.log('Success: ', result.users))
//         .catch(error => console.warn('Error: ', error))
// }
//
// // get all items
// function getAllItems() {
//     return request('/users');
// }

function getItem(id) {
    return request(`/users/${id}`)
}

// create item
// const post = (url, data) => {
//     return fetch(`${BASE_URL}/${url}/create`, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(result => console.log('Success: ', result.newItem))
//         .catch(error => console.warn('Error: ', error))
// }
//
// function createItem(number, name) {
//     return post('users', { number, name });
// }

// update item
// const patch = (url, data) => {
//     return request(url, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(result => console.log('Success: ', result.newItem))
//         .catch(error => console.warn('Error: ', error))
// }
//
// function updateItem(name) {
//     return patch(`/users/${name}/update`);
// }

// delete item
// const remove = (url) => {
//     return request(url, { method: 'DELETE' });
// };
//
// function deleteItem(id) {
//     return remove(`/users/delete/${id}`);
// }

// getAllItems();
// createItem("33457458733", 'Mama');
// updateItem("Mama")
// deleteItem("PmHhsQztq0Kv4gQR");
//     .then(print)
//     .catch(logError);

function print(value) {
    console.log(value)
};

function logError(error) {
    console.warn('Err: ', error)
};

class ApiMethods {
    constructor() {
    }

    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/get`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
            })

            if (!response.ok) {
                return Promise.reject(`${response.status} - ${response.statusText}`);
            }

            if (!response.headers.get('content-type').includes('application/json')) {
                return Promise.reject('Content-type is not supported');
            }

            const res = await response.json();
        } catch (e) {
            console.warn('Error: ', e)
        }
    }

    async create(number, name) {
        try {
            const response = await fetch(`${BASE_URL}/create`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({number, name}),
            })
            const res = await response.json();
        } catch (e) {
            console.warn('Error: ', e)
        }
    }

    async update(id) {
        try {
            const response = await fetch(`${BASE_URL}/update`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify(id),
            })
            const res = await response.json();
        } catch (e) {
            console.warn('Error: ', e)
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/delete/${id}`, {
                method: 'GET',
            })

            const res = await response.json();
        } catch (e) {
            console.warn('Error: ', e)
        }
    }
}

class Interface {

}

class Controller {

}

const a = new ApiMethods().getAll();
// const b = new ApiMethods().create('5676567', 'Irina');
const c = new ApiMethods().update();
// const d = new ApiMethods().delete('0eutqeRiTQvt4afe');
