const languageText = document.querySelector('.languageText');
const languageTextContent= document.querySelector('.languageTextContent');
const languageList = document.querySelector('.languageList');
languageText.addEventListener('click',()=>{
    languageList.style.display= languageList.style.display === 'none' ? 'block': 'none';
    
});
languageList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (event) => {
        languageTextContent.textContent = event.target.textContent;
        languageList.style.display = 'none';
    });
});


const locationText  = document.querySelector('.locationText');
const locationTextContent = document.querySelector('.locationTextContent');
const locationList = document.querySelector('.locationList');
locationText.addEventListener('click',()=>{
    locationList.style.display = locationList.style.display === 'none'? 'block' : 'none'
})
locationList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (event) => {
        locationTextContent.textContent = event.target.textContent;
        locationList.style.display = 'none';
    });
});
const headerMenuListDropdown = document.querySelector('.headerMenuListDropdown');
const headerSubMenuList = document.querySelector('.headerSubMenuList');
headerMenuListDropdown.addEventListener('click',()=>{
    headerSubMenuList.style.display = headerSubMenuList.style.display === 'none'? 'block':'none';
})
document.addEventListener('DOMContentLoaded', () => {
    const introText = document.querySelector('.introText');
    const introImg = document.querySelector('.introImg');

    introText.classList.add('animate');
    introImg.classList.add('animate');
});
