import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ["My Grandpa","Batman","My chubby Aunt","George W. Bush", "The Rolling Stones", "Yoshi"]
let action = ["ate","trampled","torched","crushed", "peed on", "ran off with"]
let what = ["my phone","my TV","my car","my computer", "my house", "my girlfriend"]
let when = ["when I was sleeping","when I was at McDonalds","when I was at the movies","when I was in class", "when I was 14"]

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length)
}
  
const whoValue = who[getRandomIndex(who)]
const actionValue = action[getRandomIndex(action)]
const whatValue = what[getRandomIndex(what)]
const whenValue = when[getRandomIndex(when)]

const entireExcuse = `${whoValue} ${actionValue} ${whatValue} ${whenValue}`

console.log(entireExcuse)

let excuseLine = this.document.querySelector("#excuse")
  excuseLine.textContent = entireExcuse;
};

const myButton = document.getElementById("bigRedButton");

function handleClick() {
  location.reload(); // refreshes the page
}
myButton.addEventListener("click", handleClick);

