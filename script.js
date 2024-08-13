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
    fetchCategories();
    fetchProducts();
});

let allProducts = [];
let selectedCategories = [];

async function fetchCategories() {
    try {
        const response = await fetch("https://shopcart-0q3t.onrender.com/api/categories");
        const categories = await response.json();
        console.log(categories);

        const categoryNames = [];
        for (let i = 0; i < categories.length; i++) {
            categoryNames.push(categories[i]);
        }
        bestDealBtnName(categoryNames);
        AOS.init();
    } catch (error) {
        console.error(error);
    }
}

const bestDealBtns = document.querySelector('.bestDealBtn');

function bestDealBtnName(names) {
    bestDealBtns.innerHTML = '';  
    names.forEach(name => {
        const button = document.createElement('button');
        button.textContent = name;
        button.classList.add('category-btn'); 
        button.addEventListener('click', () => buttonClick(button, name));
        bestDealBtns.appendChild(button);
    });
}

function buttonClick(clickedButton, category) {
    clickedButton.classList.toggle('btn-click');
    if (selectedCategories.includes(category)) {
        selectedCategories = selectedCategories.filter(selectedCategory => selectedCategory !== category);
    } else {
        selectedCategories.push(category);
    }
    filterProductsByCategories();
}

function filterProductsByCategories() {
    if (selectedCategories.length === 0) {
        createProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(product =>
            selectedCategories.includes(product.category)
        );
        createProducts(filteredProducts);
    }
}

async function fetchProducts() {
    try {
        const response = await fetch("https://shopcart-0q3t.onrender.com/api/products");
        const products = await response.json();
        console.log(products);

        allProducts = products; 
        createProducts(products);
        filterProductsByCategories();
        rateProduct(products)
        AOS.init();
    } catch (error) {
        console.error(error);
    }
}

function createProducts(productItems) {
    const bestDealItemsSection = document.querySelector('.bestDealItems');
    bestDealItemsSection.innerHTML = '';
    productItems.forEach(productItem => {
        const dealItem = document.createElement('div');
        dealItem.classList.add('dealItem');

        dealItem.innerHTML = `
               <div class="dealItemDisplay">
                <div class="markDealItemAsFavorite">
                    <i class="fa-regular fa-heart unMark"></i>
                    <i class="fa-solid fa-heart mark" style="display: none"></i>
                </div>
                <div class="ItemImg">
                    <img src="${productItem.images[0]}" alt="${productItem.name}" onclick="purchaseDetails(${productItem.id})">
                </div>
            </div>
            <div class="dealItemDispalyInfo">
                <span class="dealitemInfoNameAndPrice">
                    <p class="dealItemDisplayName">${productItem.name}</p>
                    <p class="dealItemDisplayPrice"><sup>$</sup><span class="dealItemDisplayPriceAmnt">${productItem.price}</span><sup>.00</sup></p>
                </span>
                <p class="dealItemDispalyDescription">${productItem.description}</p>
                <div class="rating">
                    <div class="star-outer" >
                         <div class="star-inner" > </div>
                    </div>
                    <sup>(${productItem.reviews})</sup>
                </div>
            </div>
            <div class="dealItemAddToCart">
                <button>add to cart</button>
            </div>
        `;
        bestDealItemsSection.appendChild(dealItem);

        const unMarkAsFavourite = dealItem.querySelector('.unMark');
        const markAsFavourite = dealItem.querySelector('.mark');
        
        unMarkAsFavourite.addEventListener('click', () => {
            unMarkAsFavourite.style.display = 'none';
            markAsFavourite.style.display = 'block';
            markAsFavourite.classList.add('markfavourite');
            unMarkAsFavourite.classList.add('unMarkFavourite');
        });

        markAsFavourite.addEventListener('click', () => {
            markAsFavourite.style.display = 'none';
            unMarkAsFavourite.style.display = 'block';
            markAsFavourite.classList.remove('markfavourite');
            unMarkAsFavourite.classList.remove('unMarkFavourite');
        });
    });
}
    const totalRating = 5;
    function rateProduct( products){
        products.forEach(product => {
            console.log(`${product.rating}`);
            const starPercentage = (`${product.rating}`/totalRating)*100;
            console.log(starPercentage);
            const starPercentageRounded = `${Math.round(starPercentage / 10)* 10}%`
            console.log(starPercentageRounded);

            const starInner = document.querySelector('.rating .star-inner');
            console.log(starInner);

            starInner.style.width = starPercentageRounded;
            
        
        })

    }

async function purchaseDetails(id) {
    window.location.href = `purchaseDetails.html?id=${id}`;
}  ;

