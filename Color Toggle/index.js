const body = document.body;
const menu = document.querySelector(".menu");
const grey = document.querySelector(".grey");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const burger = document.querySelector(".burger");
let visible = document.querySelector(".visible");



let makeMenuVisible =()  => {
    menu.classList.toggle("visible");
};

burger.addEventListener("click", makeMenuVisible);

grey.addEventListener("click", function() {
    body.classList.add("grey");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.remove("blue");
    body.classList.remove("orange");
    body.classList.remove("green");
    menu.classList.toggle("visible");
});

red.addEventListener("click", function() {
    body.classList.add("red");
    body.classList.remove("grey");
    body.classList.remove("yellow");
    body.classList.remove("blue");
    body.classList.remove("orange");
    body.classList.remove("green");
    menu.classList.toggle("visible");
});

yellow.addEventListener("click", function() {
    body.classList.add("yellow");
    body.classList.remove("grey");
    body.classList.remove("red");
    body.classList.remove("blue");
    body.classList.remove("orange");
    body.classList.remove("green");
    menu.classList.toggle("visible");
});

blue.addEventListener("click", function() {
    body.classList.add("blue");
    body.classList.remove("grey");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.remove("orange");
    body.classList.remove("green");
    menu.classList.toggle("visible");
});

orange.addEventListener("click", function() {
    body.classList.add("orange");
    body.classList.remove("grey");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.remove("blue");
    body.classList.remove("green");
    menu.classList.toggle("visible");
});

green.addEventListener("click", function() {
    body.classList.add("green");
    body.classList.remove("grey");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.remove("blue");
    body.classList.remove("orange");
    menu.classList.toggle("visible");
});