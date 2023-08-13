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






function getCookie(key){
    const cookie = document.cookie.split("; ").find(row => row.startsWith(key + "="));
    if(cookie){
        const cookieList = cookie.split("=");
        return cookieList[1];
    }else{
        return null;
    }
}






const url = "https://classscheduling-production.up.railway.app";
// const url = "http://localhost:8080";
let path = "";
let uri = "";

const section = document.getElementById("section");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const sid = document.getElementById("sid");
window.addEventListener('load', async function(event){
    event.preventDefault();
    
    uncheck();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    // console.log(isJwtCookieSet.jwttoken);
    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };
        // https://www.baeldung.com/spring-security-cors-preflight

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
    
        // https://stackoverflow.com/questions/58744677/httpservletrequest-request-getheader-is-always-null
    
    path = "/View_Class_Schedule_With_Enrollment";
    uri = url+path;
    // try{
    //     const response = await fetch(url, fetchOptions);
    //     if(!response.ok){
    //         const error = await response.text ;
    //         throw new Error(error);
    //     }

    //     // const responseData = response.text;
    //     console.log(response.text);
    //     this.alert(response.text());
    // }catch(error){
    //     console.log(error);
    //     alert(error.message);
    // }

    // this.fetch("http://localhost:8080/jwtProject", fetchOptions)
    //     .then(response => {
    //         if(!response.ok){
    //             throw new Error("Network Error with response");
    //         }
    //         return response.text();
    //     }).then(data => {
    //         this.alert(data);
    //     }).catch(error => {
    //         console.log(error);
    //     });


    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {
            // this.alert(data);

            const classData = document.getElementById("classData");
            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });

});



// async function loginChecker(){

//     var isJwtCookieSet = document.cookie;
    
//     if(isJwtCookieSet == null){
//         window.location.href = "Login_admin.html";
//     }
//     isJwtCookieSet = JSON.parse(isJwtCookieSet);
//     if(isJwtCookieSet.jwttoken == null){
//         window.location.href = "Login_admin.html";
//     }
    

//     // console.log(isJwtCookieSet.jwttoken);
//     const jwttoken = isJwtCookieSet.jwttoken

//     const fetchOptions = 
//     {
//         method: "GET", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept' : '*/*',
//             'Authorization' : 'Bearer ' + jwttoken,
//         }

//     };

    
//         // https://stackoverflow.com/questions/58744677/httpservletrequest-request-getheader-is-always-null
    
//     const url = "http:localhost:8080/jwtProject";
//     try{
//         const response = await fetch(url, fetchOptions);
//         if(!response.ok){
//             const error = await response.text ;
//             throw new Error(error);
//         }

//         console.log(response.text);
//     }catch(error){
//         console.log(error);
//         alert(error.message);
//     }

// }

// loginChecker();


function remover(){
    let delData = document.getElementsByClassName("data");
    delData = Array.from(delData);
    delData.forEach(element => {
    element.remove();
    });

    delData.innerHTML = "";
}



let fname_clicked = 0;

firstName.addEventListener("click", async event => {

    remover();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };

    if(fname_clicked == 0){
        fname_clicked = 1;
        path = "/sortByFirstnameASC";
    }else{
        fname_clicked = 0;
        path = "/sortByFirstnameDESC"; 
    }

    uri = url + path;
    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {

            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
});



let lname_clicked = 0;

lastName.addEventListener("click", async event => {

    remover();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };

    if(lname_clicked == 0){
        lname_clicked = 1;
        path = "/sortByLastnameASC";
    }else{
        lname_clicked = 0;
        path = "/sortByLastnameDESC"; 
    }

    uri = url + path;
    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {

            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
});




let email_clicked = 0;

email.addEventListener("click", async event => {

    remover();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };

    if(email_clicked == 0){
        email_clicked = 1;
        path = "/sortByEmailASC";
    }else{
        email_clicked = 0;
        path = "/sortByEmailDESC"; 
    }

    uri = url + path;
    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {

            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
});


let sid_clicked = 0;

sid.addEventListener("click", async event => {

    remover();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };

    if(sid_clicked == 0){
        sid_clicked = 1;
        path = "/sortBySidASC";
    }else{
        sid_clicked = 0;
        path = "/sortBySidDESC"; 
    }

    uri = url + path;
    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {

            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
});










section.addEventListener("change", async event => {
    if(lastName.checked){
        lastName.checked = false;
    }
    if(firstName.checked){
        firstName.checked = false;
    }
    if(email.checked){
        email.checked = false;
    }
    if(sid.checked){
        sid.checked = false;
    }

    path = "/filterbySection";
    section_filter(path);
});


async function section_filter(path){
    remover();

    var isJwtCookieSet = getCookie("Authentication");
    
    if(isJwtCookieSet == null){
        window.location.href = "Login_admin.html";
    }
    isJwtCookieSet = JSON.parse(isJwtCookieSet);
    if(isJwtCookieSet.jwttoken == null){
        window.location.href = "Login_admin.html";
    }
    

    const jwttoken = isJwtCookieSet.jwttoken

    const fetchOptions = 
    {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*',
            'Authorization' : 'Bearer ' + jwttoken,
        }

    };

    if(section.value == 1){
        path += "/1";
    }else if(section.value == 2){
        path += "/2"; 
    }else if(section.value == 3){
        path += "/3"; 
    }else if(section.value == 4){
        path += "/4"; 
    }else{
        path = "/View_Class_Schedule_With_Enrollment";
    }

    uri = url + path;
    await fetch(uri, fetchOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Network Error with response");
            }
            return response.json();
        }).then(data => {

            data.forEach(eachData => {
                let row = classData.insertRow(-1);
                row.className = "data";
                let section = row.insertCell(0);
                let sid = row.insertCell(1);
                let email = row.insertCell(2);
                let firstName = row.insertCell(3);
                let lastName = row.insertCell(4);
                
                section.innerText = eachData.section;
                sid.innerText = eachData.sid;
                email.innerText = eachData.email;
                firstName.innerText = eachData.firstName;
                lastName.innerText = eachData.lastName;
                
            });

            
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
}

const clear_filter = document.getElementById("clear_filter");
clear_filter.addEventListener("click", event => {
    uncheck();
    location.reload();
});

function uncheck(){


    // console.log("clicked");
    lastName.checked = false;
    firstName.checked = false;
    sid.checked = false;
    email.checked = false;
    section.value = 0;

    // https://bobbyhadz.com/blog/javascript-set-radio-to-checked-unchecked
    // https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection
}





const logout = document.getElementById('logout');

logout.addEventListener('click', event => {
    console.log("clicked")
    document.cookie = "";
    console.log(document.cookie);
    delete_token('Authentication', 20);
    window.location.href = "Login_admin.html";
})


function delete_token(key, duration){
    const jwtToken = getCookie(key);

    // https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
    if(jwtToken != null){
        const now = new Date();
        const expiration_Date = new Date(now.getTime() - duration * 60 * 1000);
        document.cookie = `Authentication=${jwtToken}; expires=${expiration_Date.toUTCString()};`;
    }
}