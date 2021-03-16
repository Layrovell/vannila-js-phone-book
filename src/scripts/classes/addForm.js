'use strict';

import {ApiMethods} from "./apiMethods.js";

export class AddForm {
  constructor() {
    this.newContact = [];
    this.name = '';
    this.number = '';
  }

  createAddForm() {
    const root = document.getElementById('root')
    // const table = document.createElement('table');
    // const br = document.createElement('br');
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    const button = document.createElement("button");
    button.innerHTML = "Add";
    button.type = 'submit';
    button.setAttribute('class', 'form-button');
    //
    // button.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   if (this.name && this.number) {
    //     this.addNewContact(this.number, this.name);
    //   }
    // })

      const labels = ['name', 'number'];

      labels.forEach(labelName => {
        const isName = labelName === 'name';
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `form-${labelName}`;
        input.placeholder = isName ? 'Sasha' : '+8 880 20 20 534';

        input.addEventListener('change', (e) => {
          if (e.target.value) {
            this[labelName] = e.target.value;
          }
        });

        form.appendChild(label);
        label.htmlFor = input.id;
        label.innerHTML = isName ? 'First name:' : 'Phone:';
        label.after(input);
    });

    // const labelForName = document.createElement('label');
    // const inputName = document.createElement('input');
    // inputName.type = 'text';
    // inputName.id = 'form-name';
    // inputName.placeholder = 'Sasha';
    // form.appendChild(labelForName);
    // labelForName.htmlFor = inputName.id;
    // labelForName.innerHTML = 'First name:';
    // labelForName.after(inputName);
    // this.name = inputName.value;
    //
    // const labelForPhone = document.createElement('label');
    // const inputPhone = document.createElement('input');
    // inputPhone.type = 'text';
    // inputPhone.id = 'form-phone';
    // inputPhone.placeholder = '+8 880 20 20 534';
    // form.appendChild(labelForPhone);
    // labelForPhone.htmlFor = inputPhone.id;
    // labelForPhone.innerHTML = 'Phone:';
    // labelForPhone.after(inputPhone);
    // this.number = inputPhone.value;

    form.appendChild(button);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.addNewContact(this.number, this.name);
      console.log(this.newContact);
    });

    root.before(form);
  }

  async addNewContact(number, name) {
    const api = new ApiMethods();
    if (this.name && this.number) {
      const response = await api.create(number, name);
      this.newContact = response.newItem;
    } else {
      console.log('Not all values are provided!');
    }
  }

}

const aaa = new AddForm().addNewContact();

const addForm = new AddForm();

const createForm = addForm.createAddForm();
