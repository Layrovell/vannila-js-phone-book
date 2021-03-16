'use strict';

import {ApiMethods} from "./apiMethods.js";
import {Interface} from './interface.js';

export class Controllers {
  constructor() {
    this.api = new ApiMethods();
    this.Interface = new Interface();
  }

  async render() {
    const users = await this.api.getAll().then(() => this.api.users);
    const table = await this.Interface.createTable(users);

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

    ReactDOM.render(table,
      document.getElementById('root'))
  }
}

const qqq = new Controllers().render();
