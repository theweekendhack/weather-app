

function main()
{

    const dropDownList = document.querySelector("#location");

    dropDownList.addEventListener("change",function(){

    const endPoint = `http://api.weatherstack.com/current?access_key=7e95094afaad976de9d7797b4a9c4dd8&query=${dropDownList.value}`

    //This code is used to get a response from the REST API!!! 
    fetch(endPoint)
    .then(function(response){
     

        response.json() // async operation 
        .then(function(data){

            const div = document.querySelector("#weatherContainer");
            div.innerHTML=`The current temperature in ${dropDownList.value} is ${data.current.temperature}`;
            div.innerHTML+=`<br>The current weather description is ${data.current.weather_descriptions[0]}`;
        
            const weatherImg = document.createElement("img");
            weatherImg.setAttribute("src",data.current.weather_icons[0]);
            div.appendChild(weatherImg);
        
        
        })
        .catch(function(err){

            console.log(`Error :${err}`)
        })

    })
    .catch(function(error){

        
        console.log(`Error :${err}`)

    });

})



}


main();
