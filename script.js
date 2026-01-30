function displayInput(){

    let inputEle=document.getElementById("finder");
    let input=inputEle.value;
    console.log(input);
   let locationEle=document.querySelector(".location");
   input=input.trim();
   inputEle.value="";
   locationEle.textContent=input;
   console.log(locationEle.innerText)
}
let inputEle=document.getElementById("finder");
inputEle.addEventListener("keydown",function(event){
    if (event.key=="Enter"){
        displayInput();
    }
});

document.getElementById("button")
.addEventListener("click",displayInput)

