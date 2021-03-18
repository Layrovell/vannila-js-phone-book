import {ApiMethods} from "./apiMethods.js";
import {Interface} from './interface.js';

export class Controllers {
  constructor({baseURL, node}) {
    this.api = new ApiMethods(baseURL);
<<<<<<< HEAD
    this.Interface = new Interface(node, {
=======
    this.Interface = new Interface(document.querySelector(node), {
>>>>>>> 5278b78bcfbf848b1b436e4c7401b59174cc6cd7
      addItem: this.addItem.bind(this),
      delete: this.removeItem.bind(this),
      update: this.updateItem.bind(this),
      node,
    });
  }

  async addItem(name, number, newContact) {
    if (name && number) {
      const response = await this.api.create(name, number);
      newContact = response.newItem;
      console.log(newContact);
    } else {
      console.log('Not all values are provided!');
    }
  }

  async removeItem(id) {
    if (id) {
      await this.api.delete(id);
      console.log(`user delete successfully! ${id}`);
    } else {
      console.log('Id is not provided!');
    }
  }

  async updateItem(data) {
    if (data) {
      await this.api.update(data);
      console.log(`user update successfully! ${data.id}`);
    } else {
      console.log('Id is not provided!');
    }
  }

  async render() {
    const users = await this.api.getAll().then(() => this.api.users);
    this.Interface.createRoot();
    this.Interface.createForm();
    this.Interface.createTable(users);

    console.log(users);
  }
}

const app = new Controllers({
  baseURL: 'http://localhost:8008',
  node: 'appContainer'
});
<<<<<<< HEAD
app.render();
=======
app.render();
>>>>>>> 5278b78bcfbf848b1b436e4c7401b59174cc6cd7
