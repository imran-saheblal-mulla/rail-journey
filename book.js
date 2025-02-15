let firstD = sessionStorage.getItem("origin");
let secondD = sessionStorage.getItem("origin2");
let thirdD =  sessionStorage.getItem("origin4");
let fourD =  sessionStorage.getItem("origin3");
let allPass1 = sessionStorage.getItem('origin5');


 document.querySelector("#secondlocation").value = firstD
            document.querySelector("#return").value = secondD
            document.querySelector("#seat1").value = thirdD
           document.querySelector("#datepicker2").value =fourD
           document.querySelector("#pass2").value = allPass1
            console.log(firstD, secondD)