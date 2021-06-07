import createHome from './home'

function createHeader (){
    const mainHeader = document.createElement('header');

    const restauName = document.createElement('h1');
    restauName.textContent = "Triver";

    mainHeader.appendChild(restauName);
    mainHeader.appendChild(createNav());

    return mainHeader;
}
function createNav (){
    const navHeader = document.createElement('nav');

    let home = document.createElement('span')
    home.textContent = "Home";
    home.classList.add('nav-list')

    let menu = document.createElement('span')
    menu.textContent = "Menu";
    menu.classList.add('nav-list')

    let contact = document.createElement('span')
    contact.textContent = "Contact";
    contact.classList.add('nav-list')

    navHeader.appendChild(home)
    navHeader.appendChild(menu)
    navHeader.appendChild(contact)

    return navHeader;
}

function createFooter() {
    const footer = document.createElement('h5')
    footer.textContent = "@copyright frankie-njie"

    return footer
}

function loadPage(){
    let mainContent = document.getElementById('content')
    mainContent.appendChild(createHeader());
    mainContent.appendChild(createHome());
    mainContent.appendChild(createFooter())
}

loadPage()


