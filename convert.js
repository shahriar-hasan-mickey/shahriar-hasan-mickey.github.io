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






function convert(){
    const lbPerKg = 0.453592;
    const kgPerLb = 2.20462;
    const option = document.getElementById("option");
    const inputValue = document.getElementById("inputValue");
    const result = document.getElementById("result");
    
    let output = 0;

    if(option.value == "lb-to-kg"){
        output = inputValue.value * lbPerKg;
        result.innerText= "Converted Value : " +  output + " kilograms";
    }else if(option.value == "kg-to-lb"){
        output = inputValue.value * kgPerLb;
        result.innerText= "Converted Value : " + output + " pounds";
    }

    inputValue.value = "";
    // console.log(inputValue.value);
}