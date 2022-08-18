
function petsGallery(){
document.addEventListener("DOMContentLoaded", function(event) {
    let pic1 = document.getElementById("first");
    let pic2 = document.getElementById("second");
    let pic3 = document.getElementById("third");
    let pic4 = document.getElementById("fourth");
    let pic5 = document.getElementById("fifth");
    let pic6 = document.getElementById("sixth");
    let pic7 = document.getElementById("seventh");
    let pic8 = document.getElementById("eight");
    let pic9 = document.getElementById("ninth");

    pic1.addEventListener("click", function() {
      alert("Kitty in laundry in Quincy, MA house");
   });

    pic2.addEventListener("click", function() {
      alert("Bear and Kitty lounging on couch");
   });

    pic3.addEventListener("click", function() {
      alert("Kittens wearing christmas sweaters");
   });

    pic4.addEventListener("click", function() {
      alert("Bear on my bed in Newton, MA");
   });

    pic5.addEventListener("click", function() {
      alert("Babysitting Olga's cat in Newton, a ragdoll");
   });

    pic6.addEventListener("click", function() {
      alert("Kitty against puzzle pieces of different cat breeds");
   });

    pic7.addEventListener("click", function() {
      alert("Bear liked to cuddle in blankets");
   });

    pic8.addEventListener("click", function() {
      alert("Bear in another blanket");
   });

    pic9.addEventListener("click", function() {
      alert("Kitty when she saw another cat on the tv for the first time");
   });

});}
