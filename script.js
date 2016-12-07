var cartPopUp = document.getElementById('cart-pop-up');
var cartIcon = document.getElementById('cart-icon');
var theX = document.getElementById('the_x');

var shoppingButtons = document.getElementsByClassName('shopping_button');

console.log("I was loaded!");
console.log(cartPopUp);
console.log(cartIcon);

cartIcon.addEventListener("click", function(){
    console.log("I was clicked!");
    cartPopUp.style.display = "block";
});

theX.addEventListener("click", function(){
    console.log("I was clicked! ~X-button");
    cartPopUp.style.display = "none";
});

for (var i=0; i<shoppingButtons.length; i++){
    shoppingButtons[i].addEventListener("click", function(event){
        console.log(event.target.innerHTML);
    });
}
