if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


function updateTotal(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"))
    document.getElementById("navTotal").innerHTML = "Your Total: $" + cartItems["Total"]
}


function ready(){
    if(localStorage.getItem("cartItems") == null){
        console.log("null cart")
        var cartItems = {
            "Pets": [],
            "Total": 0
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    var addItems = document.getElementsByClassName("updateCart")
    for(var i = 0; i < addItems.length; i++){
        var button = addItems[i]
        button.addEventListener('click', addCartItem)
    }
    updateTotal()

}


function addCartItem(event){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"))
    var item = event.target.name
    console.log(cartItems["Pets"].includes(item))
    if(!cartItems["Pets"].includes(item)){
        cartItems["Pets"].push(item)
        cartItems["Total"] += 800
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        updateTotal();
        updateCheckout
    }else{
        alert("You have already added " + item + " to your order! \n You cannot add more than one of each pet.")
    }
}

function updateCheckout(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"))
    document.getElementById("checkoutPets").innerHTML = cartItems["Pets"]
}