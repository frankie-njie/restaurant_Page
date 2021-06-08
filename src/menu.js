function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    let menuHead = document.createElement('h1');
    menuHead.textContent = "Discover Your Best Dishes"

    menuDiv.appendChild(menuHead)

    menuDiv.appendChild(createmenuItems('eru', "Eru is a soup from Cameroon. It is a specialty of the Bayangi people, of the Manyu region in southwestern Cameroon. It is vegetable soup made up of finely shredded leaves of the eru or okok.", 1500) )
    menuDiv.appendChild(createmenuItems('fufu', 'Fufu is a popular African food. In Twi, fufu means "mash or mix" for a soft and doughy staple food ', 500))

    return menuDiv
}

function createmenuItems (foodName, description, price){
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    let img = document.createElement('img')
    img.src = ''
    img.alt = `An image of ${foodName}`;

    const name = document.createElement('h3')
    name.textContent = foodName;

    const foodDesc = document.createElement('p')
    foodDesc.textContent = description; 

    const foodPrice = document.createElement('h5')
    foodPrice.textContent = price + ' frs';


    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(foodDesc);
    menuItem.appendChild(foodPrice);

    return menuItem
}

function displayMenu () {
        let section = document.getElementsByClassName('main-content')[0]
        section.textContent = ""
        section.appendChild(createMenu());
    
}
export default displayMenu