'use strict';

import {ApiMethods} from "./apiMethods.js";
import {Interface} from './interface.js';

export class Controllers {
  constructor() {
    this.api = new ApiMethods();
    this.Interface = new Interface();
    this.users = [];
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

  async updateItem(users, id, updatedItem) {
    // if (id) {
    //   const response = await this.api.delete(id);
    //   updatedItem = response.newItem;
    //   console.log(`updated item: ${updatedItem}`);
    // } else {
    //   console.log('Id is not provided!');
    // }

    // this.Interface.updateItem(this.users);
    // console.log('update b')
  }

  async removeItem(id) {
    // new Interface().deleteItem(this.users);
    // await this.api.delete(id);
    // if (id) {
    //   await this.api.delete(id);
    //   console.log(`user delete successfully!`);
    // } else {
    //   console.log('Id is not provided!');
    // }

    // for (let user of this.users) {
    //   const removeBtnAll = document.querySelectorAll('.btn-remove');
    //   for (const btn of removeBtnAll) {
    //     btn.addEventListener('click', (e) => {
    //       // this.api.delete(this.user._id);
    //       this.api.delete(user._id);
    //       console.log('delete')
    //     })
    //   }
    // }
  }

  async render() {
    this.users = await this.api.getAll().then(() => this.api.users);
    const table = await new Interface().createTable(this.users);
    console.log(this.users);

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

    ReactDOM.render(table,
      document.getElementById('root'))
  }
}

const qqq = new Controllers().render();
const addNew = new Controllers().addItem();
// const del = new Controllers().updateItem();

