function InfoList(infoName){
    const Name = document.getElementById(infoName);
    return Name ;
   
}

InfoList("searchBtn").addEventListener("click", function(){
       const searchName= InfoList("searchValue").value ;
       if(searchName != ""){
        callApi(searchName);
        InfoList("alert").style.display= "none"
        InfoList("weather").style.display= "block"
        InfoList("weatherSearchSection").style.display= "none"
       }else{
        InfoList("alert").style.display= "block"
       }
        
})


function callApi(searchName){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=d43cb01398c40595ff7994c6b466bfb7`)
 .then(res => res.json())
 .then(data => {
    displayData(data) ;
 })
 .catch(err => {
    InfoList("weather").style.display= "none";
    InfoList("weatherSearchSection").style.display= "block"
    InfoList("alert").style.display= "block"
 })

}



function displayData(data){
    const img = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    InfoList("weatherImg").src = `${img}`
    InfoList("weatherValue").innerText= data.weather[0].description ;
    const celsius = data.main.temp - 273.15 ;
    InfoList("tempval").innerText= `${parseFloat(celsius).toFixed(2)}° C`;
    InfoList("location").innerText= data.name;
    InfoList("curDate").innerText= `  ${new Date().toLocaleDateString()}`;
    InfoList("humidity").innerText=`  ${data.main.humidity}`;
    InfoList("pressure").innerText=`  ${data.main.pressure}`;
    InfoList("feels").innerText=`  ${data.main.feels_like}`;
    InfoList("country").innerText=`  ${data.sys.country}`;
    InfoList("visibility").innerText=`  ${data.visibility}`;

}

    InfoList("close").addEventListener("click", function(){
        InfoList("weather").style.display= "none";
        InfoList("weatherSearchSection").style.display= "block"
    })



