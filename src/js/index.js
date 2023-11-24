let addBtn = document.querySelectorAll(".add");
const menuBtn = document.getElementById('navBar');
let nav = document.getElementById('navigation');
let navMenu = document.getElementById('navMenu');
let openCart = document.querySelector('#cart');
let cartView = document.querySelector('.watches-container');
let closeCart = document.getElementById("close");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
       menuBtn.classList.add('open');
       menuOpen = true;
       nav.style.width = '80%';
       navMenu.style.opacity = "1"
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.style.width = '0';
        navMenu.style.opacity = "0"
    }
});

openCart.addEventListener('click', () => {
    cartView.style.height = "300px"
});
closeCart.addEventListener('click', () => {
    cartView.style.height = "0px"
});

let products = [
    // Rolex
    {
        name: "Rolex",
        tag: "Ulysse_Torpilleur",
        price: 150,
        inCart: 0
    },
    {
        name: "Rolex Datejust 36",
        tag: "Rolex_Datejust",
        price: 250,
        inCart: 0
    },
    {
        name: "Rolex Gold&silver",
        tag: "Rolex_Gold&silver",
        price: 450,
        inCart: 0
    },
    {
        name: "Rolex SteelBlack",
        tag: "Rolex_SteelBlack",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Piguet DiamondStainless",
        tag: "Piguet_DiamondStainless",
        price: 150,
        inCart: 0
    },
    {
        name: "Piguet Bluebrowser",
        tag: "Piguet_Bluebrowser",
        price: 250,
        inCart: 0
    },
    {
        name: "Piguet black&Gold",
        tag: "Piguet_black&Gold",
        price: 450,
        inCart: 0
    },
    {
        name: "Piguet FrostedGold",
        tag: "Piguet_FrostedGold",
        price: 650,
        inCart: 0
    },
     // Rolex
     {
        name: "Breitling Bentley",
        tag: "Breitling_Bentley",
        price: 150,
        inCart: 0
    },
    {
        name: "Breitling BlackDial",
        tag: "Breitling_BlackDial",
        price: 250,
        inCart: 0
    },
    {
        name: "Breitling Blackgold",
        tag: "Breitling_Blackgold",
        price: 450,
        inCart: 0
    },
    {
        name: "Breitling BlueBracelet",
        tag: "Breitling_BlueBracelet",
        price: 650,
        inCart: 0
    },
     // Rolex
     {
        name: "Bulova BlueSilver",
        tag: "Bulova_BlueSilver",
        price: 150,
        inCart: 0
    },
    {
        name: "Bulova Bracelet Watch",
        tag: "Bulova_Bracelet_Watch",
        price: 250,
        inCart: 0
    },
    {
        name: "Bulova DialDiamond",
        tag: "Bulova_DialDiamond",
        price: 450,
        inCart: 0
    },
    {
        name: "Bulova Octava",
        tag: "Bulova_Octava",
        price: 650,
        inCart: 0
    },
     // Rolex
     {
        name: "Citizen Brown",
        tag: "Citizen_Brown",
        price: 150,
        inCart: 0
    },
    {
        name: "Citizen CrystalAccent",
        tag: "Citizen_CrystalAccent",
        price: 250,
        inCart: 0
    },
    {
        name: "Citizen donna",
        tag: "Citizen_donna",
        price: 450,
        inCart: 0
    },
    {
        name: "Citizen_Eco",
        tag: "Piguet_FrostedGold",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Fossil Jacqueline",
        tag: "Fossil_Jacqueline",
        price: 150,
        inCart: 0
    },
    {
        name: "Fossil silverDail",
        tag: "Fossil_silverDail",
        price: 250,
        inCart: 0
    },
    {
        name: "Fossil Courier",
        tag: "Fossil_Courier",
        price: 450,
        inCart: 0
    },
    {
        name: "Fossil Everett",
        tag: "Fossil_Everett",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Hamilton Aviation",
        tag: "Hamilton_Aviation",
        price: 150,
        inCart: 0
    },
    {
        name: "Hamilton Jazzmaster",
        tag: "Hamilton_Jazzmaster",
        price: 250,
        inCart: 0
    },
    {
        name: "Hamilton KhakiNavy",
        tag: "Hamilton_Khaki_Navy",
        price: 450,
        inCart: 0
    },
    {
        name: "Hamilton Matic",
        tag: "Hamilton_Matic",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Heuer aqua",
        tag: "Heuer_aqua",
        price: 150,
        inCart: 0
    },
    {
        name: "Heuer Aquaracer",
        tag: "Heuer_Aquaracer",
        price: 250,
        inCart: 0
    },
    {
        name: "Heuer Black&gold",
        tag: "Heuer_Black&gold",
        price: 450,
        inCart: 0
    },
    {
        name: "Heuer Carrera",
        tag: "Heuer_Carrera",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "IWC Pilot",
        tag: "IWC_Pilot",
        price: 150,
        inCart: 0
    },
    {
        name: "IWC Schaffhausen",
        tag: "IWC_Schaffhausen",
        price: 250,
        inCart: 0
    },
    {
        name: "IWC Timezoner",
        tag: "IWC_Timezoner",
        price: 450,
        inCart: 0
    },
    {
        name: "IWC WatchPortofino",
        tag: "IWCWatchPortofino",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Jaeger Geographic",
        tag: "Jaeger_Geographic",
        price: 150,
        inCart: 0
    },
    {
        name: "Jaeger Lecoultre",
        tag: "Jaeger_Lecoultre",
        price: 250,
        inCart: 0
    },
    {
        name: "Jaeger Master",
        tag: "Jaeger_Master",
        price: 450,
        inCart: 0
    },
    {
        name: "Jaeger Reserve De Marche",
        tag: "Jaeger_Reserve_De_Marche",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Longines DolceVita",
        tag: "Longines_DolceVita",
        price: 150,
        inCart: 0
    },
    {
        name: "Longines La Grande",
        tag: "Longines_La_Grande",
        price: 250,
        inCart: 0
    },
    {
        name: "Longines Presence",
        tag: "Longines_Presence",
        price: 450,
        inCart: 0
    },
    {
        name: "Longines silver",
        tag: "Longines_silver",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Omega Adkins",
        tag: "Omega_Adkins",
        price: 150,
        inCart: 0
    },
    {
        name: "Omega Constellation",
        tag: "Omega_Constellation",
        price: 250,
        inCart: 0
    },
    {
        name: "Omega JamesBond",
        tag: "Omega_JamesBond",
        price: 450,
        inCart: 0
    },
    {
        name: "Omega Mujer Relojes",
        tag: "Omega_Mujer_Relojes",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "OrisWatch",
        tag: "OrisWatch",
        price: 150,
        inCart: 0
    },
    {
        name: "oris propilot",
        tag: "oris_propilot",
        price: 250,
        inCart: 0
    },
    {
        name: "Oris Aquis",
        tag: "Oris_Aquis",
        price: 450,
        inCart: 0
    },
    {
        name: "Oris Diamond",
        tag: "Oris_Diamond",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Panerai Chrono",
        tag: "Panerai_Chrono",
        price: 150,
        inCart: 0
    },
    {
        name: "Panerai Luminor",
        tag: "Panerai_Luminor",
        price: 250,
        inCart: 0
    },
    {
        name: "Panerai Marina",
        tag: "Panerai_Marina",
        price: 450,
        inCart: 0
    },
    {
        name: "Panerai Officine",
        tag: "Panerai_Officine",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Patek Brown",
        tag: "Patek_Brown",
        price: 150,
        inCart: 0
    },
    {
        name: "Patek Cream",
        tag: "Patek_Cream",
        price: 250,
        inCart: 0
    },
    {
        name: "Patek GreyDial",
        tag: "Patek_GreyDial",
        price: 450,
        inCart: 0
    },
    {
        name: "Patek Nautilus",
        tag: "Patek_Nautilus",
        price: 650,
        inCart: 0
    },
    // Rolex
    {
        name: "Seiko GreenDial",
        tag: "Seiko_GreenDial",
        price: 150,
        inCart: 0
    },
    {
        name: "Seiko Silver",
        tag: "Seiko_Silver",
        price: 250,
        inCart: 0
    },
    {
        name: "Seiko SpeedtimerSolar",
        tag: "Seiko_SpeedtimerSolar",
        price: 450,
        inCart: 0
    },
    {
        name: "Rolex Oystersteel",
        tag: "Rolex_Oystersteel",
        price: 650,
        inCart: 0
    },
];

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        displayCart();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('#cart span').textContent = productNumbers;
    }
}



function cartNumbers(products) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart span').textContent = 1;
    }
    setItems(products);
}

function setItems(products) {
    let cartItems =localStorage.getItem('productsinCart');
    cartItems = JSON.parse(cartItems);
    console.log("my cartItems are", cartItems); 

    if(cartItems != null) {
        if(cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    localStorage.setItem("productsinCart",JSON.stringify(cartItems));
}

function totalCost(products) {
    
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsinCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".watches");

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="watch-list">
                <div class="watch">
                    <img src="./src/img/${item.tag}.jpeg">
                    <div class="watch-text">
                        <span>${item.name}</span>
                        <p class="sub">Rolex watch</p>
                        <div class="price">${item.price}</div>
                    </div>    
                </div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.inCart}</span>
                    <span class="plus">+</span>
                </div>
                <div class="delete">
                    <i class="fa-solid fa-delete-left delete-btn"></i>
                </div>    
            </div>
            `;
        });


        let deleteButtons = document.querySelectorAll('.delete-btn');
        let plusButtons = document.querySelectorAll('.plus');
        let minusButtons = document.querySelectorAll('.minus');

        deleteButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                handleDelete(index, cartItems);
            });
        });

        plusButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                handleQuantityChange(index, cartItems, 'increase');
            });
        });

        minusButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                handleQuantityChange(index, cartItems, 'decrease');
            });
        });

        deleteButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                handleDelete(index, cartItems);
            });
        });
    }
}

function handleQuantityChange(index, cartItems, action) {
    let productKeys = Object.keys(cartItems);
    let productKeyToChange = productKeys[index];

    if (action === 'increase') {
        cartItems[productKeyToChange].inCart += 1;
    } else if (action === 'decrease' && cartItems[productKeyToChange].inCart > 1) {
        cartItems[productKeyToChange].inCart -= 1;
    }

    localStorage.setItem('productsinCart', JSON.stringify(cartItems));
    displayCart(); // Re-render the cart after quantity change
    onLoadCartNumbers(); // Update the cart number indicator
}

function handleDelete(index, cartItems) {
    let productKeys = Object.keys(cartItems);
    let productKeyToDelete = productKeys[index];

    // Reduce the total cost by the price of the item being deleted
    let totalCost = localStorage.getItem('totalCost');
    totalCost -= cartItems[productKeyToDelete].price * cartItems[productKeyToDelete].inCart;
    localStorage.setItem('totalCost', totalCost);

    // Remove item from cartItems
    delete cartItems[productKeyToDelete];

    localStorage.setItem('productsinCart', JSON.stringify(cartItems));
    displayCart(); // Re-render the cart after deletion
    onLoadCartNumbers(); // Update the cart number indicator
}


onLoadCartNumbers();
displayCart();


