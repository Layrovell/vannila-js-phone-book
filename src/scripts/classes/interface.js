'use strict';

// import {Controllers} from "./controllers.js";

export class Interface {
    constructor(root) {
        this.root = root;
        // this.controls = new Controllers();
    }

    createTable(data) {
        const table = document.createElement('table');
        this.root = document.getElementById('root');
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
            let row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.number}</td>
                            <td>
                                <button class="btn btn-remove">remove</button>
                            </td>        
                            <td>
                                <button class="btn btn-update">update</button>
                            </td>
                       </tr>`
            table.innerHTML += row;

            // const removeBtnAll = document.querySelectorAll('.btn-remove');
            // for (const btn of removeBtnAll) {
            //     btn.addEventListener('click', (e) => {
            //         console.log(user._id);
            //     })
            // }

            // const updateBtnAll = document.querySelectorAll('.btn-update');
            // for (const btn of updateBtnAll) {
            //     btn.addEventListener('click', (e) => {
            //         console.log(user._id);
            //     })
            // }
        }

        // this.deleteItem(data);
    }

    // deleteItem(data) {
    //     const controls = new Controllers();
    //     for (let user of data) {
    //         const removeBtnAll = document.querySelectorAll('.btn-remove');
    //         for (const btn of removeBtnAll) {
    //             btn.addEventListener('click', (e) => {
    //                 controls.removeItem(user._id);
    //                 console.log('drfgfghf')
    //             })
    //         }
    //     }
    // }
    //
    // updateItem(users) {
    //     for (const user of users) {
    //         const updateBtnAll = document.querySelectorAll('.btn-update');
    //         for (const btn of updateBtnAll) {
    //             btn.addEventListener('click', (e) => {
    //                 console.log(user._id);
    //             })
    //         }
    //     }
    // }
}

// const del = new Interface().deleteItem()