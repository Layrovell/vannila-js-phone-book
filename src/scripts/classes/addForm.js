// import {Controllers} from "./controllers.js";
//
// export class AddForm {
//   constructor() {
//     this.newContact = [];
//     this.name = '';
//     this.number = '';
//   }
//
//   createAddForm() {
//     const root = document.getElementById('root')
//     const form = document.createElement('form');
//     form.setAttribute('class', 'form');
//     const button = document.createElement("button");
//     button.innerHTML = "Add";
//     button.type = 'submit';
//     button.setAttribute('class', 'form-button');
//
//     ['name', 'number'].forEach(labelName => {
//         const isName = labelName === 'name';
//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.id = `form-${labelName}`;
//         input.placeholder = isName ? 'Alyona' : '+8 880 2020 534';
//
//         input.addEventListener('change', (e) => {
//           if (e.target.value) {
//             this[labelName] = e.target.value;
//           }
//         });
//
//         form.appendChild(label);
//         label.htmlFor = input.id;
//         label.innerHTML = isName ? 'First name:' : 'Phone:';
//         label.after(input);
//     });
//
//     form.appendChild(button);
//
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       // await this.addNewContact(this.number, this.name);
//       await new Controllers().addItem(this.name, this.number, this.newContact);
//       // console.log(this.newContact);
//       await new Controllers().addItem(this.name, this.number, this.newContact);
//     });
//     root.before(form);
//   }
// }
//
// const createForm = new AddForm();
// const addFormToPage = createForm.createAddForm();

// import {Controllers} from "./controllers.js";

export class AddForm {
  constructor(config) {
    this.newContact = [];
    this.name = '';
    this.number = '';
    this.config = config;
  }

  createAddForm() {
    const app = document.querySelector('.container');

    const form = document.createElement('form');
    form.setAttribute('class', 'form');

    const button = document.createElement("button");
    button.innerHTML = "Add";
    button.type = 'submit';
    button.setAttribute('class', 'btn btn-form');

    ['name', 'number'].forEach(labelName => {
      const isName = labelName === 'name';
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `form-${labelName}`;
      input.placeholder = isName ? 'Alyona' : '+8 880 2020 534';

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

    form.appendChild(button);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // await this.config.addItem(this.name, this.number, this.newContact);
      await this.config.addItem(this.name, this.number, this.newContact);
    });

    app.prepend(form);

    console.log(this)
  }
}

// const qqq = new AddForm().createAddForm();
