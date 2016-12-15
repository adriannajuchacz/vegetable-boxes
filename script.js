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
//contact icons
var homeIcon = document.getElementById('home_icon');
var homeText = document.getElementById('address');
var phoneIcon = document.getElementById('phone_icon');
var phoneText = document.getElementById('phone');
var mailIcon = document.getElementById('mail_icon');
var mailText = document.getElementById('mail');
homeIcon.addEventListener("click", function(){
    $(homeText).fadeIn(2000);
    $(mailText).fadeOut(2000);
    $(phoneText).fadeOut(2000);
});

mailIcon.addEventListener("click", function(){
    $(homeText).fadeOut(2000);
    $(mailText).fadeIn(2000);
    $(phoneText).fadeOut(2000);
});

phoneIcon.addEventListener("click", function(){
    $(homeText).fadeOut(2000);
    $(mailText).fadeOut(2000);
    $(phoneText).fadeIn(2000);
});

//TESTING
var tray= document.getElementById('temp');
tray.addEventListener("click", function(){
    $(this).css("position", "relative");

    $(this).animate(
        {
            right: 100,
            opacity: 0.5,
            width: 200
        }, 2000, "easeInQuad", function(){alert("All done!");});

});
