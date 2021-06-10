function createHome (){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const welcome = document.createElement('h1');
    welcome.textContent = "Know About Our Restaurant";

    const image = document.createElement('img');
    image.src = 'images/welcome.jpg'
    image.alt = 'welcome pic';
    image.width = '500'
    image.height = '400'
    image.style.objectFit = 'cover'
    // image.object
    // width="250px" height="200px"

    const homeContent = document.createElement('p');
    homeContent.textContent = "Triver Restaurant is a best quality African dish restaurant, where you can get All your african dishes served. For all the african dish lovers here is a place where you can enjoy all your dishes craved and to remind you its top quality. ";

    homeDiv.appendChild(welcome);
    homeDiv.appendChild(image);
    homeDiv.appendChild(homeContent);

    return homeDiv
}

function displayHome (){
    let section = document.getElementsByClassName('main-content')[0]
    section.innerHTML = "";
    section.appendChild(createHome());

}

export default displayHome