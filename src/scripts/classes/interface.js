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
        const formContainer = document.querySelector('.form-container');

        const table = document.createElement('table');
        table.classList.add('table');
        app.appendChild(table);

        const thead = document.createElement('thead');
        thead.classList.add('thead');

        ['name', 'number', 'delete', 'update'].forEach(el => {
            const th = document.createElement('th');
            th.innerHTML = `${el}`;
            th.classList.add(`th-${el}`);
            table.appendChild(th);
            thead.appendChild(th);

            table.prepend(thead);
        })


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
        formContainer.prepend(openBtn);
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
        console.log(root);
    }

    createOpenButton(text) {
        const openButton = document.createElement('button');
        openButton.setAttribute('class', 'btn btn-open');
        openButton.innerText = text;

        return openButton;
    }
}

