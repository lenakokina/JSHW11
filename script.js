const contactTemplate = document.getElementById('newContactTemplate').innerHTML;
const contactsListEl = document.getElementById('contactsList');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const phoneInputEl = document.getElementById('phoneInput');

document.getElementById('addContactButton')
        .addEventListener('click', onAddContactBtnClick);

contactsListEl.addEventListener('click', onContactsBtnClick);

function onContactsBtnClick(e) {
if (e.target.classList.contains('delete-btn')) {
    const el = getContactRow(e.target);
    deleteContact(el)
}
}

function getContactRow(el) {
    return el.closest('.contact-item');
}

function deleteContact(el) {
    el.remove();
}



function onAddContactBtnClick() {
    if(isFormValid()) {
        const newContact = getFormData();
        addContact(newContact);
        resetForm();
    }
}

function isFormValid() {
return !isEmpty(nameInputEl.value) &&
       !isEmpty(surnameInputEl.value) &&
       !isEmpty(phoneInputEl.value) 
}


function isEmpty(str) {
    return str == '' || str == null;
}


function addContact(contact) {
    const newContactHtml = getContactRowHtml(contact);

    contactsListEl.insertAdjacentHTML('beforeend', newContactHtml); 
}

function getContactRowHtml(contact) {
    return contactTemplate
                          .replace('{{Name}}', contact.name)
                          .replace('{{Surname}}', contact.surname)
                          .replace('{{Phone}}', contact.phone)
}

function getFormData() {
    return {
        name: nameInputEl.value,
        surname: surnameInputEl.value,
        phone: phoneInputEl.value
    };
}

function resetForm(){
    nameInputEl.value = '';
    surnameInputEl.value = '';
    phoneInputEl.value = '';
 }
