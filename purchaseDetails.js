const plusOrder = document.querySelector('.plus-order');
const minusOrder = document.querySelector('.minus-order');
const orderNumber  = document.querySelector('.order-num');

let a = 1;
plusOrder.addEventListener('click', ()=>{
    a++;
    a =(a< 10) ? "0" + a : a;
    orderNumber.innerText = a;
});

minusOrder.addEventListener('click',()=>{
    if(a > 1){
        a--;
        a = (a <10 ) ? "0" + a : a;
        orderNumber.innerText = a;
    }
});

const blueColorAirpod = document.querySelector('.blue-color-airpod');
const greyColorAirpod = document.querySelector('.grey-color-airpod');
const whiteColorAirpod = document.querySelector('.white-color-airpod');
const blackColorAirpod = document.querySelector('.black-color-airpod');
const pinkColorAirpod = document.querySelector('.pink-color-airpod');

const blueAirpod = document.querySelector('.blue-airpod');
const greyAirpod = document.querySelector('.grey-airpod');
const whiteAirpod = document.querySelector('.white-airpod');
const blackAirpod = document.querySelector('.black-airpod');
const pinkAirpod = document.querySelector('.pink-airpod');

const blueImage = document.querySelector('.blue');
const greyImage = document.querySelector('.grey');
const whiteImage = document.querySelector('.white');
const blackImage = document.querySelector('.black');

blueColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "block";
    blueImage.classList.add('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
})

blueImage.addEventListener('click',()=>{
    blueImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    blueColorAirpod.classList.add('image-hover');
    greyColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    pinkAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "block";
})

greyColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    greyAirpod.style.display = "block";

    greyImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})

greyImage.addEventListener('click',()=>{
    greyImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    greyColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    greyAirpod.style.display = "block";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})

whiteColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    whiteAirpod.style.display = "block";

    whiteImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})

whiteImage.addEventListener('click',()=>{
    whiteImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    whiteColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    greyColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    whiteAirpod.style.display = "block";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})

blackColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "block";
    blackImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
})

blackImage.addEventListener('click',()=>{
    blackImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');

    blackColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    greyColorAirpod.classList.remove('image-hover');

    blackAirpod.style.display = "block";
    whiteAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})
pinkColorAirpod.addEventListener('click',()=>{
    greyAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    pinkAirpod.style.display = "block";
    whiteImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll(' .product-rating .fa-star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            star.classList.toggle('fa-regular');
            star.classList.toggle('fa-solid');
            star.classList.toggle('markImportant');
        });
    });
});

// async function fetchProducts() {
//     try {
//         const response = await fetch("https://shopcart-0q3t.onrender.com/api/products");
//         const products = await response.json();
//         console.log(products);

//         allProducts = products; 
//         createProducts(products);
//         filterProductsByCategories();
//         AOS.init();
//     } catch (error) {
//         console.error(error);
//     }
// }

async function fetchProductDetails(id) {
    try {
        const response = await fetch(`https://shopcart-0q3t.onrender.com/api/products/${id}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}


function displayProductDetails(product) {
    const productListType = document.querySelector('.product-list-type');
    productListType.innerHTML = `
        <li>Electronics /</li>
        <li>furniture /</li>
        <li>sports /</li>
        <li>home & kitchen /</li>
        <li style="font-weight: bold;">${product.subcategory}</li>
    `;


    const productOriginalImg = document.querySelector('.product-original-img');
    productOriginalImg.innerHTML = product.images.map((img, index) => 
        `<img class="${index === 0 ? 'pink-airpod' : ''}" src="${img}" alt="" style="${index === 0 ? 'height: 350px; width: 300px;' : 'display: none; height: 250px; width: 300px;'}">`
    ).join('');

    const productVarietyImg = document.querySelector('.product-variety-img');
    productVarietyImg.innerHTML = product.images.slice(0, 4).map((img, index) => 
        `<img class="${['blue', 'grey', 'black', 'white'][index]}" src="${img}" alt="">`
    ).join('');


    document.querySelector('.product-name').textContent = product.name;
    document.querySelector('.product-description').textContent = product.description;
    document.querySelector('.product-rating sup').textContent = `(${product.reviews})`;

    document.querySelector('.product-pricing h3').textContent = `$${product.price.toFixed(2)} or $${(product.price / 6).toFixed(2)}/month`;

    const generalTable = document.querySelector('.general table');
    generalTable.innerHTML = `
        <tr><th>General</th></tr>
        <tr><td>brand</td><td>${product.brand}</td></tr>
        <tr><td>model</td><td>${product.name}</td></tr>
        <tr><td>price</td><td>$${product.price.toFixed(2)}</td></tr>
        <tr><td>in stock</td><td>${product.inStock ? 'Yes' : 'No'}</td></tr>
        <tr><td>subcategory</td><td>${product.subcategory}</td></tr>
    `;

    const productDetailsTable = document.querySelector('.product-details table');
    productDetailsTable.innerHTML = `
        <tr><th>Specifications</th></tr>
        ${Object.entries(product.specifications).map(([key, value]) => 
            `<tr><td>${key}</td><td>${value}</td></tr>`
        ).join('')}
    `;
}