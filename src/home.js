function createHome (){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const welcome = document.createElement('h1');
    welcome.textContent = "Know About Our Restaurant";

    const image = document.createElement('img');
    image.src = ''
    image.alt = 'welcome pic'
    // width="250px" height="200px"

    const homeContent = document.createElement('p');
    homeContent.textContent = "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.";

    homeDiv.appendChild(welcome);
    homeDiv.appendChild(image);
    homeDiv.appendChild(homeContent);

    return homeDiv
}

export default createHome