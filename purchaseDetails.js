
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        fetchAndDisplayProductDetails(productId);
    } else {
        console.error('No product ID provided');
    }
});

async function fetchAndDisplayProductDetails(id) {
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
        <li style="font-weight: bold;">${product.category} /</li>
        <li style="font-weight: bold;">${product.subcategory}</li>
    `;

    const productPurchaseDetails = document.querySelector('.product-purchase-details');
    productPurchaseDetails.innerHTML = ''; 
    const productImg =  document.createElement('div');
    productImg.classList.add('product-img');
    productImg.innerHTML = `
        <div class="product-original-img">
          <img class="original-img" src=" ${product.images[0]}"  >
        </div>
        <div class="product-variety-img">
            <img class="variety-img1"  src="${product.images[1]}">
            <img class="variety-img2"  src="${product.images[2]}">
            <img class="variety-img3"  src="${product.images[3]}">
            <img class="variety-img4"  src="${product.images[4]}">
        </div>
    `;
    productPurchaseDetails.appendChild(productImg);
    

    const productPurchaseInfo =  document.createElement('div');
    productPurchaseInfo.classList.add('product-purchase-info');    
    productPurchaseInfo.innerHTML = `
        <div class="product-details">
            <h1 class="product-name">${product.name}</h1>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <sup>(${product.reviews})</sup>
            </div>
        </div>
        <hr style="width: 80%;">
        <div class="product-pricing">
            <h3>$${product.price.toFixed(2)} or $${(product.price / 6).toFixed(2)}/month</h3>
            <p>suggested payment with 6 months special financing</p>
        </div>
        <hr style="width: 80%;">
        <div class="product-color">
            <p>choose a color</p>
            <div class="colors">
                <div  style="background-color: rgb(237, 156, 169);"></div>
                <div  style="background-color:rgb(86, 86, 151);"></div>
                <div  style="background-color: grey;"></div>
                <div  style="background-color: black;"></div>
                <div  style="background-color: white; border: 1px solid grey;"></div>
            </div>
        </div>
        <hr style="width: 80%;">
        <div class="product-order-amount">
            <div class="item-amount">
                <span class="minus-order">-</span>
                <span class="order-num">01</span>
                <span class="plus-order">+</span>
            </div>
            <div class="item-text">
                <p>only <span>12 items</span> left</p>
                <p>don't miss it</p>
            </div>
        </div>
        <div class="product-btn">
            <button><a href="buyNow.html" style="color: white; text-decoration: none;">buy now</a></button>
            <button>add to cart</button>
        </div>
        <div class="delivery-details">
            <div class="delivery">
                <i class="fa-solid fa-truck"></i>
                <div>
                    <p>free delivery</p>
                    <p><a href="">enter your postal code for delivery availability</a></p>
                </div>
            </div>
            <div class="delivery">
                <i class="fa-regular fa-calendar"></i>
                <div>
                    <p>return delivery</p>
                    <p>free 30 days delivery returns. <a href="">Details</a></p>
                </div>
            </div>
        </div>


    `;
    productPurchaseDetails.appendChild(productPurchaseInfo);

    const specifications = document.querySelector('.specifications');
    const productListType2 = document.querySelector('.specifications');

    const generalTable = document.createElement('div');
    generalTable.classList.add('general');
    generalTable.innerHTML = `
        <table>   
            <tr><th>General</th></tr>
            <tr><td>brand</td><td>${product.brand}</td></tr>
            <tr><td>model</td><td>${product.name}</td></tr>
            <tr><td>price</td><td>$${product.price.toFixed(2)}</td></tr>
            <tr><td>in stock</td><td>${product.inStock ? 'Yes' : 'No'}</td></tr>
            <tr><td>subcategory</td><td>${product.subcategory}</td></tr>
        </table>
    `
    specifications.appendChild(generalTable);
   
    const productDetailsTable = document.createElement('div');
    productDetailsTable.classList.add('product-details');
    productDetailsTable.innerHTML = `
            <table>
            <tr><th>Specifications</th></tr>
        ${Object.entries(product.specifications).map(([key, value]) => 
            `<tr><td>${key}</td><td>${value}</td></tr>`
        ).join('')}
        </table>
    `
    specifications.appendChild(productDetailsTable);

}
const originalImg = document.querySelector('.original-img');
const varietyImg1 = document.querySelector('.variety-img1');
const varietyImg2 = document.querySelector('.variety-img2');
const varietyImg3 = document.querySelector('.variety-img3');
const varietyImg4 = document.querySelector('.variety-img4');
console.log(varietyImg1);

varietyImg1.addEventListener('click',() => {
    varietyImg1.style.display = "none"
})

