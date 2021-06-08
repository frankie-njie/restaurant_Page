import displayHome from './home';
import displayContact from './contact';
import displayMenu from './menu';

loadPage()

function createHeader() {
    const mainHeader = document.createElement('header');

    const restauName = document.createElement('h1');
    restauName.textContent = "Triver";

    mainHeader.appendChild(restauName);
    mainHeader.appendChild(createNav());

    return mainHeader;
}

function createNav() {
    const navHeader = document.createElement('nav');

    let home = document.createElement('button')
    home.textContent = "Home";
    home.classList.add('nav-list');
    home.addEventListener('click', function(e) {
        if (e.target.classList.contains('active')) return
        setActiveButton(home)
        displayHome();
    })

    let menu = document.createElement('button')
    menu.textContent = "Menu";
    menu.classList.add('nav-list')
    menu.addEventListener('click', function(e) {
        if (e.target.classList.contains('active')) return
        setActiveButton(menu)
        displayMenu();
    })

    let contact = document.createElement('button')
    contact.textContent = "Contact";
    contact.classList.add('nav-list')
    contact.addEventListener('click', function(e) {
        if (e.target.classList.contains('active')) return
        setActiveButton(contact)
        displayContact();
    })

    navHeader.appendChild(home)
    navHeader.appendChild(menu)
    navHeader.appendChild(contact)

    return navHeader;
}

function createMain() {
    let menuContent = document.createElement('section');
    menuContent.classList.add('main-content');
    menuContent.textContent = ""


    return menuContent
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.textContent = "@copyright frankie-njie"

    return footer
}

function setActiveButton(button) {
    const buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        if (button === this) {
            button.classList.add('active')
        }
        button.classList.remove('active')
    };
}


function loadPage() {
    let mainContent = document.getElementById('content')
    mainContent.appendChild(createHeader());
    mainContent.appendChild(createMain());
    displayHome()
    // mainContent.appendChild(createHome());
    // mainContent.appendChild(createMenu());
    // mainContent.appendChild(createContact())
    mainContent.appendChild(createFooter())
}