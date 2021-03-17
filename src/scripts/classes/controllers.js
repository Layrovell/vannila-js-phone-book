'use strict';

import {ApiMethods} from "./apiMethods.js";
import {Interface} from './interface.js';

export class Controllers {
  constructor() {
    this.api = new ApiMethods();
    this.Interface = new Interface(document.getElementById('root'), {
      addItem: this.addItem.bind(this),
      delete: this.removeItem.bind(this),
      update: this.updateItem.bind(this),
    });
  }

  // async createForm(name, number, newContact) {
  //   await this.addItem(name, number, newContact);
  // }

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
    const table = await this.Interface.createTable(users);
    // const addForm = await this.Interface.createAddForm();

    console.log(users);

    const React = {
      createElement(tagName, props, content) {
        const child = document.createElement(tagName);
        child.textContent = content;
        return child;
      }
    }

    const ReactDOM = {
      render(child, container) {
        container.appendChild(child);
      }
    }

    ReactDOM.render(
        // addForm,
        table,
        document.getElementById('root'))
  }
}

// const qqq = new Controllers().render();

const app = new Controllers({
  baseURL: 'http://localhost:8008',
  node: '#appContainer'
});
app.render();

// const qqq = new Controllers().createAddForm();