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
        const inputName = this.createInput('name', 'input', 'text', 'form-name', 'Alyona');
        this.createEventListener(inputName, 'change', 'name');
        form.appendChild(labelForName);
        form.appendChild(inputName);

        const labelForNumber = this.createLabel('form-number', 'Phone:');
        const inputNumber = this.createInput('number', 'input', 'text', 'form-number', '+8 880 2020 534');
        this.createEventListener(inputNumber, 'change', 'number');
        form.appendChild(labelForNumber);
        form.appendChild(inputNumber);
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

    createLabel(htmlFor, text) {
        const label = document.createElement('label');
        label.htmlFor = htmlFor;
        label.innerHTML = text;

        return label;
    }

    createEventListener(input, typeEvent, name) {
        return input.addEventListener(typeEvent, (e) => {
            if (e.target.value) {
                this[name] = e.target.value;
            }
        });
    }
}
