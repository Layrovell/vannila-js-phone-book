export class ApiMethods {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.users = [];
  }

  async getAll() {
    try {
      const response = await fetch(`${this.baseURL}/api/users/get`, {
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
      this.users = res.items;
    } catch (e) {
      console.warn('Error: ', e)
    }
    console.log(this.baseURL)

  }

  async create(name, number) {
    try {
      const response = await fetch(`${this.baseURL}/api/users/create`, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({name, number}),
      })
      return await response.json();
    } catch (e) {
      console.warn('Error: ', e)
    }
  }

  async update(id) {
    try {
      const response = await fetch(`${this.baseURL}/api/users/update`, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(id),
      })
      await response.json();
    } catch (e) {
      console.warn('Error: ', e)
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`${this.baseURL}/api/users/delete/${id}`, {
        method: 'GET',
      })

      await response.json();
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
