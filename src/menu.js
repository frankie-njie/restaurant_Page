function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    let menuHead = document.createElement('h1');
    menuHead.textContent = "Discover Your Best Dishes"

    menuDiv.appendChild(menuHead)

    menuDiv.appendChild(createmenuItems('Eru', "Eru is a soup from Cameroon. It is a specialty of the Bayangi people, of the Manyu region in southwestern Cameroon. It is vegetable soup made up of finely shredded leaves of the eru or okok.",'images/eru.png', 1500) );
    menuDiv.appendChild(createmenuItems('Fufu', 'Fufu is a popular African food. In Twi, fufu means "mash or mix" for a soft and doughy staple food ','images/fufu.jpg', 500));
    menuDiv.appendChild(createmenuItems('Achu',"Achu Soup (Yellow Soup) & Achu –  gloriously yellow, delicate soup prepared mostly in Cameroonian home cooking and fairly common in the Western and North West province. It is always paired with mashed/pounded achu coco (taro).", 'images/achu.jpeg', 1500));
    menuDiv.appendChild(createmenuItems('Ekwang','It is grated cocoyams tied in cocoyam leaves and cooked with palm oil and other aromatic ingredients. This is one of the dishes that reminds me of the similarities between Nigerians and Cameroonians.','images/ekwang.jpeg',1000));
    menuDiv.appendChild(createmenuItems('Ndole','Ndolé is a Cameroonian dish consisting of stewed nuts, ndoleh and fish or beef. The dish may also contain shrimp or prawns. It is traditionally eaten with plantains, bobolo,etc','images/ndole.jpg',1500))

    return menuDiv
}

function createmenuItems (foodName, description,src, price){
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    let img = document.createElement('img')
    img.src = src
    img.alt = `An image of ${foodName}`;
    img.width = '300'
    img.style.objectFit = 'cover'

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