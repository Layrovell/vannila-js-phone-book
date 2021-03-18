export class AddForm {
    constructor(config) {
        this.newContact = [];
        this.name = '';
        this.number = '';
        this.config = config;
    }

    createAddForm() {
        const container = document.querySelector('.container');
        const formContainer = document.createElement('div');
        formContainer.setAttribute('class', 'form-container');

        const form = document.createElement('form');
        form.setAttribute('class', 'form');

        const button = document.createElement("button");
        button.innerHTML = "Add";
        button.type = 'submit';
        button.setAttribute('class', 'btn btn-form');

        const labelForName = this.createLabel('form-name', 'First name:');
        const labelForNumber = this.createLabel('form-number', 'Phone:');

        const inputName = this.createInput('name', 'input', 'text', 'form-name', 'Alyona');
        const inputNumber = this.createInput('number', 'input', 'text', 'form-number', '+8 880 2020 534');

        form.appendChild(labelForName);
        form.appendChild(inputName);
        form.appendChild(labelForNumber);
        form.appendChild(inputNumber);

        inputNumber.addEventListener('change', (e) => {
            if (e.target.value) {
                this.number = e.target.value;
            }
        });

        form.appendChild(button);
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.config.addItem(this.name, this.number);
        });

        container.appendChild(formContainer);
        formContainer.appendChild(form);
    }

    createInput(name, className, type, id, placeholder) {
        const input = document.createElement('input');
        input.setAttribute('name', `${name}`);
        input.setAttribute('class', `${className}`);
        input.type = type;
        input.id = id;
        input.placeholder = placeholder;

        return input;
    }

    // createInputWithLabel(name, className, type, id, placeholder, htmlFor, text) {
    //     const input = document.createElement('input');
    //     input.setAttribute('name', `${name}`);
    //     input.setAttribute('class', `${className}`);
    //     input.type = type;
    //     input.id = id;
    //     input.placeholder = placeholder;
    //
    //     const label = document.createElement('label');
    //     label.htmlFor = htmlFor;
    //     label.innerHTML = text;
    //
    //
    //     return input.append(label);
    // }

    createLabel(htmlFor, text) {
        const label = document.createElement('label');
        label.htmlFor = htmlFor;
        label.innerHTML = text;

        return label;
    }


    // createEventL(input, typeEvent, name) {
    //     return `${input}`.addEventListener(`${typeEvent}`, (e) => {
    //         if (e.target.value) {
    //             [name] = e.target.value;
    //         }
    //     });
    // }
}
