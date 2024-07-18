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





document.addEventListener('DOMContentLoaded', () => {
    const headerMenuListDropdown = document.querySelector('.headerMenuListDropdown');
    const headerSubMenuList = document.querySelector('.headerSubMenuList');

    headerMenuListDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); 
        headerSubMenuList.style.display = headerSubMenuList.style.display === 'none' || headerSubMenuList.style.display === '' ? 'block' : 'none';
    });

    document.body.addEventListener('click', () => {
        headerSubMenuList.style.display = 'none';
    });

    headerSubMenuList.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const introText = document.querySelector('.introText');
    const introImg = document.querySelector('.introImg');

    introText.classList.add('animate');
    introImg.classList.add('animate');
});


const unMarkAsFavorites = document.querySelectorAll('.unMark');
unMarkAsFavorites.forEach(unMarkAsFavourite => {
    unMarkAsFavourite.addEventListener('click', () => {
        const markAsFavourite = unMarkAsFavourite.nextElementSibling;
        unMarkAsFavourite.style.display = 'none';
        markAsFavourite.style.display = 'block';
        markAsFavourite.classList.add('markfavourite');
        unMarkAsFavourite.classList.add('unMarkFavourite');
    });
});


const markAsFavorites = document.querySelectorAll('.mark');
markAsFavorites.forEach(markAsFavourite => {
    markAsFavourite.addEventListener('click', () => {
        const unMarkAsFavourite = markAsFavourite.previousElementSibling;
        markAsFavourite.style.display = 'none';
        unMarkAsFavourite.style.display = 'block';
        markAsFavourite.classList.remove('markfavourite');
        unMarkAsFavourite.classList.remove('unMarkFavourite');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll(' .rating i');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            star.classList.toggle('fa-regular');
            star.classList.toggle('fa-solid');
            star.classList.toggle('markImportant');
        });
    });
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',()=>{
    const headerMenuListItems = document.querySelector('.headerMenuListItems');
    headerMenuListItems.style.display = headerMenuListItems.style.display  === 'none' ? 'block': 'none';
})