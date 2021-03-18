import {ApiMethods} from "./apiMethods.js";
import {Interface} from './interface.js';

// export class Controllers {
//   constructor() {
//     this.api = new ApiMethods();
//     this.Interface = new Interface(document.getElementById('root'), {
//       delete: this.removeItem.bind(this),
//       update: this.updateItem.bind(this),
//     });
//   }
//
//   async addItem(name, number, newContact) {
//     if (name && number) {
//       const response = await this.api.create(name, number);
//       newContact = response.newItem;
//       console.log(newContact);
//     } else {
//       console.log('Not all values are provided!');
//     }
//   }
//
//   async removeItem(id) {
//     if (id) {
//       await this.api.delete(id);
//       console.log(`user delete successfully!`);
//     } else {
//       console.log('Id is not provided!');
//     }
//
//     // this.Interface.deleteItem(this.users);
//     // await this.api.delete(id);
//     // if (id) {
//     //   await this.api.delete(id);
//     //   console.log(`user delete successfully!`);
//     // } else {
//     //   console.log('Id is not provided!');
//     // }
//     //
//     // for (let user of this.users) {
//     //   const removeBtnAll = document.querySelectorAll('.btn-remove');
//     //   for (const btn of removeBtnAll) {
//     //     btn.addEventListener('click', (e) => {
//     //       // this.api.delete(this.user._id);
//     //       this.api.delete(user._id);
//     //       console.log('delete')
//     //     })
//     //   }
//     // }
//   }
//
//   async updateItem(users, id, updatedItem) {
//     // if (id) {
//     //   const response = await this.api.delete(id);
//     //   updatedItem = response.newItem;
//     //   console.log(`updated item: ${updatedItem}`);
//     // } else {
//     //   console.log('Id is not provided!');
//     // }
//
//     // this.Interface.updateItem(this.users);
//     // console.log('update b')
//   }
//
//   async render() {
//     const users = await this.api.getAll().then(() => this.api.users);
//     const table = await this.Interface.createTable(users);
//
//     console.log(users);
//
//     const React = {
//       createElement(tagName, props, content) {
//         const child = document.createElement(tagName);
//         child.textContent = content;
//         return child;
//       }
//     }
//
//     const ReactDOM = {
//       render(child, container) {
//         container.appendChild(child);
//       }
//     }
//
//     ReactDOM.render(table,
//       document.getElementById('root'))
//   }
// }
//
// const qqq = new Controllers().render();
// // const addNew = new Controllers().addItem();
// // const removeItem = new Controllers().removeItem();

export class Controllers {
  constructor({baseURL, node}) {
    this.api = new ApiMethods(baseURL);
    this.Interface = new Interface(document.querySelector(node), {
      addItem: this.addItem.bind(this),
      delete: this.removeItem.bind(this),
      update: this.updateItem.bind(this),
      node,
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
    this.Interface.createRoot();
    this.Interface.createForm();
    this.Interface.createTable(users);


    console.log(users);

    // const React = {
    //   createElement(tagName, props, content) {
    //     const child = document.createElement(tagName);
    //     child.textContent = content;
    //     return child;
    //   }
    // }
    //
    // const ReactDOM = {
    //   render(child, container) {
    //     container.appendChild(child);
    //   }
    // }

    // ReactDOM.render(
    //   // addForm,
    //   table,
    //   document.getElementById('root'))
  }
}

// const qqq = new Controllers().render();

const app = new Controllers({
  baseURL: 'http://localhost:8008',
  node: 'appContainer'
});
app.render();
