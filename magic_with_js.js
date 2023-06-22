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






function btn1_function(){
    const inputValue = document.getElementById("inputValue");
    inputValue.value = "";
}

let btn2_state = 0;

function btn2_function(){
    const inputValue = document.getElementById("inputValue");
    if(btn2_state === 0 ){
        btn2_state = 1;
        inputValue.value = inputValue.value.toUpperCase();
    }else{
        btn2_state = 0;
        inputValue.value = inputValue.value.toLowerCase();
    }
    
}

function btn3_function(){
    const inputValue = document.getElementById("inputValue");
    const arr = inputValue.value.split("\n");
    const sortedArray = arr.sort();
    
    let tempString = "";

    // sortedArray.forEach(element => {
    //     tempString+=element+"\n";
    // });
    sortedArray.forEach(function(element, index, array) {
        tempString+=element;
        if(index !== array.length -1){
            tempString+="\n";
        }
    });

    inputValue.value = tempString;
}


// https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
https://stackoverflow.com/questions/29738535/catch-foreach-last-iteration



function btn4_function(){
    const inputValue = document.getElementById("inputValue");
    const arr = inputValue.value.split("\n");

    let tempString = "";

    arr.forEach(function(element, index, array) {
        tempString += element.split("").reverse().join("");    
        if(index !== array.length - 1){
            tempString += "\n";
        }
    });

    inputValue.value = tempString;
}


function btn5_function(){
    const inputValue = document.getElementById("inputValue");
    const arr = inputValue.value.split("\n");
    let tempString = "";
    arr.forEach(function(element, index, array) {
        tempString += element.trim();
        if(index !== array.length - 1 && element !== ""){
            tempString += "\n";
        }
    });

    inputValue.value = tempString;
}

// https://www.educative.io/answers/how-to-remove-whitespaces-from-the-beginning-of-a-string-in-js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


function btn6_function(){
    const inputValue = document.getElementById("inputValue");
    const arr = inputValue.value.split("\n");
    let tempString = "";

    arr.forEach(function(element, index, array) {
        tempString += ((index+1) + ". " + element);
        if(index !== array.length - 1){
            tempString += "\n";
        }
    });

    inputValue.value = tempString;
}



function btn7_function(){
    const inputValue = document.getElementById("inputValue");
    const arr = inputValue.value.split("\n");
    let tempString = "";
    let numState = false;
    const randomNumber = new Array(arr.length);
    let ranNo = Math.floor(Math.random() * arr.length);

    for (let index = 0; index < arr.length; index++) {
        
        while(randomNumber.includes(ranNo)){
            ranNo = Math.floor(Math.random() * arr.length);
        }

        randomNumber[index] = ranNo;
        
    }

    randomNumber.forEach(function(element, index, array) {
        tempString+=arr[element];
        if(index !== array.length -1){
            tempString += "\n";
        }
    });

    inputValue.value = tempString;
}

// https://java2blog.com/fill-array-with-random-numbers-javascript/
// https://www.w3schools.com/jsref/jsref_includes_array.asp#:~:text=The%20includes()%20method%20returns,()%20method%20is%20case%20sensitive.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
