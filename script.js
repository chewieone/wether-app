// =========== Taking input ==========

const inputElem = document.querySelector("#finder");
const buttonElem = document.querySelector("#button");

buttonElem.addEventListener("click", ()=> {
    const location = inputElem.value.trim();

    //call the API -
    
fetchWeather(location).then((data)=>{

    console.log(data)
    updateDom(data)

} )


    //update the DOM



    inputElem.value="";
})

    //     Promises
         async function fetchWeather(location) {
        const link =`https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${location}&aqi=no`
        const response = await fetch(
          link,
        );
        console.log(response);
        const jsonData = await response.json();
       
        return jsonData;
      }
        function updateDom(data){
            //filter data
            //1 getting temp
           const temp=data.current.temp_c
            const lcn=data.location.name
            const WetherCond=data.current.condition.text
           const timeline=data.location.localtime
           const [date,time]=timeline.split(" ")
           const iconUrl=data.current.condition.icon

           //***************update dom ***************/
           //select ele
           const tempEle=document.querySelector(".temperature");
           const locEle=document.querySelector(".location");
           const imgUrl=document.querySelector(".image");
            const cdnEle=document.querySelector(".condition");
            const dayele=document.querySelector(".date")
            const timeEle=document.querySelector(".time")
           //update
           tempEle.textContent=temp+"°C"
           locEle.textContent=lcn
           imgUrl.src=iconUrl
           cdnEle.textContent=WetherCond
            dayele.textContent=date
            timeEle.textContent=time
        }



