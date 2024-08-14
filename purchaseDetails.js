
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
            <img class="v-img1"  src="${product.images[1]}">
            <img class="v-img2"  src="${product.images[2]}">
            <img class="v-img3"  src="${product.images[3]}">
            <img class="v-img4"  src="${product.images[4]}">
        </div>
    `;
    productPurchaseDetails.appendChild(productImg);
    
    ////variety design toggle to display as original image
    const varietyImg1 = document.querySelector('.v-img1');
    const varietyImg2 = document.querySelector('.v-img2');
    const varietyImg3 = document.querySelector('.v-img3');
    const varietyImg4 = document.querySelector('.v-img4');
    const originalImg = document.querySelector('.original-img');
    varietyImg1.addEventListener('click', ()=>{
       
    });
    
    varietyImg1.addEventListener('click', ()=>{
        originalImg.src = varietyImg1.src;
    });
    varietyImg2.addEventListener('click', ()=>{
        originalImg.src = varietyImg2.src;
    });
    varietyImg3.addEventListener('click', ()=>{
        originalImg.src = varietyImg3.src;
    });
    varietyImg4.addEventListener('click', ()=>{
        originalImg.src = varietyImg4.src;
    });

    productPurchaseDetails.appendChild(productImg);
    

    const productPurchaseInfo =  document.createElement('div');
    productPurchaseInfo.classList.add('product-purchase-info');   
    
    const filledStar = ' <span style="color:yellow; font-size:25px"> &#9733;</span>'.repeat(Math.round(`${product.rating}`))
    const emptyStar = ' <span style="font-size:25px">&#9734;</span>'.repeat(5 - Math.round(`${product.rating}`) );
    productPurchaseInfo.innerHTML = `
        <div class="product-details">
            <h1 class="product-name">${product.name}</h1>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                ${filledStar}${emptyStar}
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
            <p>choose a design</p>
            <div class="colors">
                <div> <img class="design1"  src="${product.images[0]}"></div>
                <div> <img class="design2"  src="${product.images[1]}"></div>
                <div> <img class="design3"  src="${product.images[2]}"></div>
                <div> <img class="design4"  src="${product.images[3]}"></div>
                <div> <img class="design5"  src="${product.images[4]}"></div>
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

    //functionality for product selection
    const design1 = document.querySelector('.design1');
    const design2 = document.querySelector('.design2');
    const design3 = document.querySelector('.design3');
    const design4 = document.querySelector('.design4');
    const design5 = document.querySelector('.design5');

    console.log(design2)
    design1.addEventListener('click', ()=>{
        originalImg.src = design1.src;
    });
    design2.addEventListener('click', ()=>{
        originalImg.src = design2.src;
    });
    design3.addEventListener('click', ()=>{
        originalImg.src = design3.src;
    });
    design4.addEventListener('click', ()=>{
        originalImg.src = design4.src;
    });
    design5.addEventListener('click', ()=>{
        originalImg.src = design5.src;
    })


// functionality to add or minus order
    const minusOrder = document.querySelector('.minus-order');
    const plusOrder = document.querySelector('.plus-order');
    const orderNumber = document.querySelector('.order-num');
    let num = 1;
    plusOrder.addEventListener('click', ()=>{
        num++
        if((num<10)){
            orderNumber.innerText = "0" + num;
        }
        else{
            orderNumber.innerText = num;
        }
    })
    minusOrder.addEventListener('click', ()=>{
        if((num>1)){
            num--
            orderNumber.innerText = "0" + num;
        }
    })

//product specifications here
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
