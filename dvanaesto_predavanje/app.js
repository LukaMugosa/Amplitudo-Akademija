// 1. MAKE CLASS PhonebookContact - This class will be used to model our data
class PhonebookContact {
    constructor(id, firstName, lastName, phoneNumber, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

// 2. MAKE CLASS Storage - This class will be used to retrieve, store and delete our data
class Storage {
    static getPhonebookContacts() {
        let phoneBookContacts;
        if (localStorage.getItem('phoneBookContacts') === null) {
            phoneBookContacts = [];
        } else {
            phoneBookContacts = JSON.parse(localStorage.getItem('phoneBookContacts'));
        }
        return phoneBookContacts;
    }

    static generateUniqueID(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static addContact(phoneBookContact) {
        const contactsTemp = Storage.getPhonebookContacts();
        contactsTemp.push(phoneBookContact);
        console.log(contactsTemp);
        localStorage.setItem('phoneBookContacts', JSON.stringify(contactsTemp));
    }

    static removeContact(phoneBookContactId) {
        const contactsTemp = Storage.getPhonebookContacts();
        contactsTemp.forEach((contact, index) => {
            if (contact.id === phoneBookContactId) {
                contactsTemp.splice(index, 1);
            }
        });
        localStorage.setItem('phoneBookContacts', JSON.stringify(contactsTemp));
    }
}

// 3. MAKE CLASS UserInterface - This class will control the whole app flow

class UserInterface {
    static displayBooks() {
        const contacts = Storage.getPhonebookContacts();
        contacts.forEach(contact => {
            UserInterface.addContactToPhonebookList(contact);
        })
    }

    static addContactToPhonebookList(contact) {
        const contactList = document.querySelector("#contact-list");
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.id}</td>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phoneNumber}</td>
            <td>${contact.email}</td>
            <td><a href="#" class="btn btn-sm btn-danger delete">X</a></td>
        `;
        contactList.appendChild(row);
    }

    static deleteContact(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearField() {
        document.querySelector("#firstName").value = '';
        document.querySelector("#lastName").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#phoneNumber").value = '';
    }
}


const contact = {
    id: 2,
    firstName: 'Luka',
    lastName: 'Mugosa',
    phoneNumber: 'xxxxxx',
    email: 'xxx@xxx.xxx'
};
Storage.addContact(contact);

document.addEventListener('DOMContentLoaded', UserInterface.displayBooks);

const saveForm = document.querySelector("#contact-form");

saveForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;

    if (firstName === '' || lastName === '' || email === '' || phoneNumber === '') {
        UserInterface.showAlert('Please fill all fields', 'danger');
    } else {
        const phonebook = new PhonebookContact(Storage.generateUniqueID(9), firstName, lastName, phoneNumber, email);

        UserInterface.addContactToPhonebookList(phonebook);
        Storage.addContact(phonebook);

        UserInterface.showAlert('Contact is added successfully!', 'success');

        UserInterface.clearField();
    }
});

document.querySelector("#contact-list").addEventListener('click', (e) => {
    UserInterface.deleteContact(e.target);

    Storage.removeContact(e.target.parentElement.previousSibling.textContent);

    UserInterface.showAlert('Contact successfully deleted', 'success');
});
