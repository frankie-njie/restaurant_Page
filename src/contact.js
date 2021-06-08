function createContact (){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    let contactHead = document.createElement('h1');
    contactHead.textContent = "How to Get to Us";

    let phone = document.createElement('h4');
    phone.textContent = 'Phone'

    let phoneText = document.createElement('p')
    phoneText.textContent = '+237 123 456 789';

    let address = document.createElement('h4');
    address.textContent = "Adress";

    let addressText = document.createElement('p')
    addressText.textContent = "Douala, Cameroon"

    contactDiv.appendChild(contactHead)
    contactDiv.appendChild(phone)
    contactDiv.appendChild(phoneText)
    contactDiv.appendChild(address)
    contactDiv.appendChild(addressText)

    return contactDiv
}

function displayContact() {
    let section = document.getElementsByClassName('main-content')[0]
    section.textContent = ""
    section.appendChild(createContact());
}

export default displayContact