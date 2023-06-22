const logo = document.getElementById('logo');
const sublogo = document.getElementById('sub-logo');

logo.style.color = "#0A4D68";
logo.style.fontSize = '35px';
logo.style.letterSpacing = '1px';
logo.style.cursor = 'pointer';
sublogo.style.color = "#00FFCA";

logo.addEventListener('mouseover', function mouseHover(){
    logo.style.color = "#00FFCA";
    sublogo.style.color = "#0A4D68";
    
});

logo.addEventListener('mouseout', function mouseHoverOut(){
    logo.style.color = "#0A4D68";
    sublogo.style.color = "#00FFCA";
    logo.style.transition = "0.4s";
    sublogo.style.transition = "0.4s";
})




// // METHOD 1
let inputValue = document.getElementById("inputValue");

let stringArray = [];
let numArray = [];

const max = document.getElementById("max");
const min = document.getElementById("min");
const sum = document.getElementById("sum");
const average = document.getElementById("average");
const reverseOrder = document.getElementById("reverseOrder");

inputValue.addEventListener('input', ()=>{
    stringArray = inputValue.value.split(",");
    numArray = stringArray.map(function(str){
        return parseInt(str);
    }); 
    
    let total = numArray.reduce((a, b) => {
        return a + b;
    });
    
    max.innerText = numArray.reduce((a, b) => Math.max(a, b), -Infinity); ;
    min.innerText = numArray.reduce((a, b) => Math.min(a, b), Infinity);
    sum.innerText = total;
    average.innerText = total/(numArray.length);
    reverseOrder.innerText = numArray.reverse();    
    // console.log(numArray.reverse());
    
});





// https://www.tutorialspoint.com/how-to-convert-array-of-strings-to-array-of-numbers-in-javascript
// https://www.youtube.com/watch?v=J4e3e1lbXfs
// https://reqbin.com/code/javascript/m81eb1ms/javascript-sum-array-example
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max