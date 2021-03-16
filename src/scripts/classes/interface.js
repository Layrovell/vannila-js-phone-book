'use strict';

export class Interface {
  constructor(root) {
    this.root = root;
  }

  createTable(data) {
    const table = document.createElement('table');
    this.root = document.getElementById('root');
    table.classList.add('table');
    // table.id = 'myTable';
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

    for (let i = 0; i < data.length; i++) {
      let row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].number}</td>
                 </tr>`
      table.innerHTML += row;
    }
  }
}
