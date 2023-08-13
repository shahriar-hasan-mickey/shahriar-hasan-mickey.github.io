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








// https://java2blog.com/fill-array-with-random-numbers-javascript/
// https://www.w3schools.com/jsref/jsref_includes_array.asp#:~:text=The%20includes()%20method%20returns,()%20method%20is%20case%20sensitive.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random



var form = document.getElementById("form");

form.addEventListener("submit", async function(event){
    // console.log("clicked");
    event.preventDefault();

    const data = new FormData(form);
    // const data = new URLSearchParams(data1);
    // const url = "http://localhost:8080";
    const url = "classscheduling-production.up.railway.app";
    const path = "/Class_Enrollment";



    const fromDataObject = await Object.fromEntries(data.entries());
    const formDataJsonString = JSON.stringify(fromDataObject);


    const fetchOptions = {
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : '*/*',
        },

        body : formDataJsonString,
        
    };

    const uri = url + path;
    try{
        const response = await fetch(uri, fetchOptions);
        if(!response.ok){
            const error = await response.text();
            throw new Error(error);
        }

        const responseData = await response.text();
        alert(responseData);
        console.log(responseData);
    }catch (error){
        console.log(error);
        alert(error.message);
    }

});



function cancel(){
    var temp = document.getElementById("firstName");
    temp.value = "";
    temp = document.getElementById("lastName");
    temp.value = "";
    temp = document.getElementById("email");
    temp.value = "";
    temp = document.getElementById("sid");
    temp.value = "";
    temp = document.getElementById("section");
    temp.value = 0;
    
    console.log("clicked");
}


const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function loginPage(){
    window.location.href = "Login_admin.html";
})