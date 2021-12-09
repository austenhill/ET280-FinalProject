if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"))
    var checkoutPets = document.getElementById("checkoutPets")
    var checkoutTotal = document.getElementById("checkoutTotal")

    for(var i = 0; i < cartItems["Pets"].length; i++){
        var row = document.createElement("div")
        row.className = "row ml-1"
        var rowItem = document.createElement("p")
        rowItem.innerHTML = cartItems["Pets"][i]
        row.appendChild(rowItem)
        checkoutPets.appendChild(row)
    }

    var totalRow = document.createElement("row")
    var total = document.createElement("h6")
    total.innerHTML = "$" + cartItems["Total"]
    totalRow.appendChild(total)
    checkoutTotal.appendChild(totalRow)

    var orderButton = document.getElementById("submitOrder")
    orderButton.addEventListener('click', submitOrder)
}

function submitOrder(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"))
    var state = document.getElementById("state")
    var data = {
        "FirstName": document.getElementById("firstName").value,
        "LastName": document.getElementById("lastName").value,
        "Address": [
            document.getElementById("streetAddress").value,
            document.getElementById("city").value,
            document.getElementById("zipcode").value
        ],
        "Pets": cartItems["Pets"],
        "Total": cartItems["Total"]
    }

    const XHR = new XMLHttpRequest();

    XHR.open( 'POST', 'https://cd16kk1xp4.execute-api.us-east-1.amazonaws.com/order/', true);

    XHR.setRequestHeader( 'Content-Type', 'application/json' );

    XHR.send(JSON.stringify(data))

}