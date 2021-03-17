'use strict';

export class Interface {
    constructor(root, config) {
        this.root = root;
        this.config = config;
        this.info = {
            id: 0,
            name: '',
            number: 0,
        }
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

        const optionDelete = document.createElement('th');
        optionDelete.classList.add('th-options');
        optionDelete.innerText = 'delete';
        table.appendChild(optionDelete);

        const thead = document.createElement('thead');
        thead.classList.add('thead');
        thead.appendChild(name);
        thead.appendChild(number);
        thead.appendChild(optionDelete);
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
}
