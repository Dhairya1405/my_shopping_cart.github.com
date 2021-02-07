products = [
    {
        id: 1,
        title: 'Apple',
        price: 50,
        rating: 5,
        image: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png",
    },
    {
        id: 2,
        title: 'Banana',
        price: 75,
        rating: 3,
        image: "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1",
    },
    {
        id: 3,
        title: 'Shirt-Cotton',
        price: 788,
        rating: 4,
        image: 'https://rukminim1.flixcart.com/image/800/960/kixgtjk0-0/shirt/d/o/t/40-rmsz10366-b6-raymond-original-imafyhxjyqyn6yek.jpeg?q=50'
    },
    {
        id: 4,
        title: 'EEZAY MAXOUT Slippers',
        price: 1088,
        rating: 4,
        image: 'https://rukminim1.flixcart.com/image/800/960/k5wse4w0/slipper-flip-flop/h/g/z/eezay-maxout-grey-6-adidas-grey-original-imafzhhsmyzc8fdy.jpeg?q=5'
    },
    {
        id: 5,
        title: 'Bulb',
        price: 88,
        rating: 5,
        image: 'https://rukminim1.flixcart.com/image/416/416/k0igia80/smart-lighting/f/t/r/sb0110-b22-led-smitch-original-imafka9umvxwrecq.jpeg?q=70'
    },
    {
        id: 6,
        title: 'Wireless Optical Mouse',
        price: 500,
        rating: 4,
        image: 'https://rukminim1.flixcart.com/image/416/416/kex5ci80/mouse/z/4/h/flipkart-smartbuy-m7012-original-imafvhv7gchmzgmh.jpeg?q=70'
    },
]

function display_card() {
    all_card = ""

    for (item of products) {
        all_card += `
<div class="card">
            <img class="card-img" src="${item.image}">
            <h3 class="title">${item.title}</h3>
            <h3 class="title">&#x20B9-${item.price}</h3>
            <div class="card-property">
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span> 
                    <span class="fa fa-star checked"></span> 
                    <span class="fa fa-star checked"></span>
            
                </div>
                <a class="btn-cart" onclick="add_to_cart( ${item.id} )">Add to Cart</a>
            </div>
        </div>
        `
    }
    document.getElementById('products').innerHTML = all_card
}



display_card()


function show_cart() {
    document.getElementById("cart_section").style.display = 'block'
    document.getElementById("products").style.display = 'none'
    display_cart()
}

function show_products() {
    document.getElementById("cart_section").style.display = 'none'
    document.getElementById("products").style.display = 'block'
    document.getElementById("products").style.display = 'flex'


}

cart = []
total_price = 0

function add_to_cart(prod_id) {
    for (item of products) {
        if (item.id == prod_id) {
            cart.push(item)
            //console.log(cart)
            total_price += item.price
            return
        }
    }
}
function display_cart() {
    all_cart = ""
    for (item of cart) {
        all_cart += `
        
        <div class="cart_item">
        <h1 class="cart-title" > ${item.title} </h1>
        
        <div class="cart-image">
            <img  src="${item.image}">
        </div>

        <h1 class="cart-price">&#x20B9; ${item.price} </h1>
        <button class="cart-delete" onclick="delete_item(${cart.indexOf(item)})">Delete</button>
    </div>

    `

    }
    all_cart += `
    
    <h1 id="tot_price">Total Price = ${total_price}</h1>
    
    
    
    `
    document.getElementById('cart_section').innerHTML = all_cart
}
function delete_item(index) {
    total_price -= cart[index]['price']
    cart.splice(index, 1)
    display_cart()
}