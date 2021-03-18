import {AddForm} from "./addForm.js";

export class Interface {
  constructor(root, config) {
    this.AddForm = new AddForm({
      addItem: config.addItem,
    });
    this.root = root;
    this.config = config;
    this.info = {
      id: 0,
      name: '',
      number: 0,
    }
  }

  createForm() {
    this.AddForm.createAddForm();
  }

  createTable(data) {
    const app = document.querySelector('.container');
    const form = document.querySelector('.form');

    const table = document.createElement('table');
    table.classList.add('table');
    app.appendChild(table);

    const name = document.createElement('th');
    name.classList.add('th-name');
    name.innerText = 'name';
    table.appendChild(name);

    const number = document.createElement('th');
    number.classList.add('th-number');
    number.innerText = 'number';
    table.appendChild(number);

    const optionDelete = document.createElement('th');
    optionDelete.classList.add('th-options');
    optionDelete.innerText = 'delete';
    table.appendChild(optionDelete);

    const optionUpdate = document.createElement('th');
    optionUpdate.classList.add('th-options');
    optionUpdate.innerText = 'update';
    table.appendChild(optionUpdate);

    const thead = document.createElement('thead');
    thead.classList.add('thead');
    thead.appendChild(name);
    thead.appendChild(number);
    thead.appendChild(optionDelete);
    thead.appendChild(optionUpdate);
    table.prepend(thead);

    for (let user of data) {
      const row = document.createElement('tr');

      this.info.id = user._id;
      this.info.name = user.name;
      this.info.number = user.number;

      const userNameCell = this.createTableCell(this.info.name);
      row.appendChild(userNameCell);

      const userNumberCell = this.createTableCell(this.info.number);
      row.appendChild(userNumberCell);

      const deleteButton = this.createTableButton(
        'Delete',
        this.info.id,
        'btn btn-remove',
        this.config.delete,
      );
      const deleteButtonCell = document.createElement('td');
      deleteButtonCell.append(deleteButton);
      row.appendChild(deleteButtonCell);

      const updateButton = this.createTableButton(
        'Update',
        this.info,
        'btn btn-update',
        this.config.update,
      );
      const updateButtonCell = document.createElement('td');
      updateButtonCell.append(updateButton);
      row.appendChild(updateButtonCell);
      table.appendChild(row);
    }

    const openBtn = this.createOpenButton('Open');
    app.prepend(openBtn);
    openBtn.addEventListener('click', (e) => {
      form.classList.toggle('open');
    })
  }

  createTableCell(text) {
    const cell = document.createElement('td');
    cell.innerText = text;

    return cell;
  }

  createTableButton(label, data, className, action) {
    const button = document.createElement('button');
    button.setAttribute('class', className);
    button.innerText = label;

    button.addEventListener('click', async () => {
      await action(data);
    });

    return button;
  }

  createRoot() {
    const root = document.createElement('div');
    root.setAttribute('id', this.root);
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(root);

    const app = document.createElement('div');
    app.setAttribute('class', 'container');

    root.appendChild(app);
  }

  createOpenButton(text) {
    const openButton = document.createElement('button');
    openButton.setAttribute('class', 'btn btn-open');
    openButton.innerText = text;

    return openButton;
  }

  createAddNumberForm() {
  }
}
