'use strict';

const BASE_URL = 'http://localhost:8008/api/users';

export class ApiMethods {
  constructor() {
    this.users = [];
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
      const data = res.items;
      // console.log('data: ', data)
      this.users = data;
      // console.log(this.users)
    } catch (e) {
      console.warn('Error: ', e)
    }
  }

  async create(name, number) {
    try {
      const response = await fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({name, number}),
      })
      return await response.json();
    } catch (e) {
      console.warn('Error: ', e)
    }
  }

  async update(id, data) {
    try {
      const response = await fetch(`${BASE_URL}/update`, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
          id,
          data,
        }),
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

// const a = new ApiMethods().getAll();
// console.log(a);
// const b = new ApiMethods().create('45678903456', 'father')
// .then(() => console.log(api.b));
// console.log(b);
// const c = new ApiMethods().update();
// const d = new ApiMethods().delete("KmBJwnc2N5rhxSrd");
// const table = new Interface().createTable();