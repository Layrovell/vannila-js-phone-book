'use strict';

import {ApiMethods} from "./apiMethods.js";

export class Interface {
  constructor(root, config) {
    this.root = root;
    this.config = config;
  }

  createTable(data) {
    const table = document.createElement('table');
    table.classList.add('table');
    const container = document.createElement('div');
    container.classList.add('container');
    container.prepend(table);
    this.root.prepend(container);

    const name = document.createElement('th');
    name.classList.add('th-name');
    name.innerText = 'name';
    table.appendChild(name);

    const number = document.createElement('th');
    number.classList.add('th-number');
    number.innerText = 'number';
    table.appendChild(number);

    const thead = document.createElement('thead');
    thead.classList.add('thead');
    thead.appendChild(name);
    thead.appendChild(number);
    table.prepend(thead);

    for (let user of data) {
      const row = document.createElement('tr');

      const userNameCell = this.createTableCell(user.name);
      row.appendChild(userNameCell);

      const userNumberCell = this.createTableCell(user.number);
      row.appendChild(userNumberCell);

      // const deleteButton = document.createElement('button');
      // deleteButton.setAttribute('class', 'btn btn-remove');
      // deleteButton.addEventListener('click', async () => {
      //   console.log('delete: ', user._id);
      //   await new ApiMethods().delete(user._id);
      // });
      // deleteButton.innerText = 'Delete';
      const deleteButton = this.createTableButton('Delete', user._id, 'btn btn-remove', this.config.delete)
      row.appendChild(deleteButton);

      // const updateButton = document.createElement('button');
      // updateButton.setAttribute('class', 'btn btn-update');
      // updateButton.innerText = 'Update';
      // updateButton.addEventListener('click', () => {
      //   console.log('update:', user._id);
      // });
      const updateButton = this.createTableButton('Update', user._id, 'btn btn-update', this.config.update)
      row.appendChild(updateButton);
      table.appendChild(row);
    }
  }

  createTableCell(text) {
    const cell = document.createElement('td');
    cell.innerText = text;

    return cell;
  }

  createTableButton(label, id, className, action) {
    const button = document.createElement('button');
    button.setAttribute('class', className);
    button.innerText = label;

    button.addEventListener('click', async () => {
      console.log(label, id);
      await action(id);
    });

    return button;
  }
}
