let countriesWeather=[]
let searchBtn=document.getElementById('searchBtn')
let locationInput=document.getElementById('locationInput')
let apiData;


// *************

function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
console.log(position);
let lat=position.coords.latitude;
console.log(`lat=${lat}`);
let lon=position.coords.longitude;
console.log(`lon=${lon}`);
coords=lat+','+lon
console.log(coords);
locationInput.value=coords
getall()
locationInput.value=''

    },
    function(error){
      console.log(error);

    }
    )
  }
}

  getLocation()




// ***********

async function getCityCoordinate(){ 
    apiData=[]
    let countryName=locationInput.value
    
    let geoCodingApi=`https://api.weatherapi.com/v1/forecast.json?key=a0cae05862144a81aa4133713230708&q=${countryName}&days=3&aqi=no&alerts=no`
    
     
     let response=await fetch(geoCodingApi);
     let data=await response.json()
     apiData.push(data)
    
    


}

// *********

 async function getall(){
    await getCityCoordinate()
     await current()
     await Day2th()
     await Day3th()
    
}
searchBtn.addEventListener('click',getall)
locationInput.addEventListener('input',getall)
// **********
function current(){
    let date= new Date()
    let day= date.toString().slice(0,3)
    let month= date.toString().slice(4,10)

   



   let cartona=`<div class="forcast-inner ">
   <div class="forecast-header d-flex justify-content-between align-items-center terr-color rounded-top rounded-end-0">
     <p class="ms-3 p-color pt-3">${day}</p>
     <p class="me-3 p-color pt-3">${month}</p>
   </div>
   <div class="forcast-content bg-div py-4 px-3">
     <div class="p-color fs-5 pt-3 ps-3" >${apiData[0].location.name}</div>
     <div class="degree text-white display-2 fw-bolder">
       <div class="num  d-flex mt-4 ps-3 ">
         <p>${apiData[0].current.temp_c}</p>
         <sup class="py-5">o</sup>
         <p>C</p>

       </div>
       <div class="forcast-ico ps-5 fs-1">
       <img src='${apiData[0].current.condition.icon}'>
      
       </div>
     </div>
     <div class="custom text-primary ps-3 mt-2 mb-3 fs-5">${apiData[0].current.condition.text}</div>
     <div class="info-climate ps-3 d-flex justify-content-between">
       <span class="p-color  "><img src="./img/icon-umberella.png" alt=""> 20%</span>
     
     <span class="p-color  "><img src="./img/icon-wind.png" alt=""> 18km/h</span>
     <span class="p-color  "><img src="./img/icon-compass.png" alt=""> East</span>
     </div>
   </div>
 </div>`


let current= document.getElementById('current')
current.innerHTML=cartona


}
// ************
function Day2th(){


    let today=new Date()

    let tommorow=new Date(today)
    tommorow.setDate(today.getDate()+1)
   let day=tommorow.toString().slice(0,3)


    let cartona=`<div class="forcast-inner ">
    <div class="forecast-header  d-flex justify-content-center align-items-center head-color ">
      <p class="ms-3 p-color pt-3">${day}</p>
    
    </div>
    <div class="forcast-content bg-section py-4 px-3">

      <div class="forcast-ico d-flex justify-content-center  mt-3 fs-1">
        <img  src="${apiData[0].forecast.forecastday[1].day.condition.icon}" alt="">
      </div>
      <div class="num text-white fs-2 fw-bold  d-flex justify-content-center mt-5 ">
        <p>${apiData[0].forecast.forecastday[1].day.maxtemp_c}</p>
        <sup class="py-4">o</sup>
        <p>C</p>

      </div>
      <small class="p-color d-flex justify-content-center mt-2 fs-5">${apiData[0].forecast.forecastday[1].day.mintemp_c}
        <sup class="py-2 ">o</sup>
      </small>
      
      
      <div class="custom text-primary mt-5 d-flex justify-content-center mt-2 mb-3 fs-5">${apiData[0].forecast.forecastday[1].day.condition.text}</div>
       
    </div>
  </div>`
let second=document.getElementById('second')
second.innerHTML=cartona;


}

// ************
function Day3th(){

    let today=new Date()

    let tommorow=new Date(today)
    tommorow.setDate(today.getDate()+2)
   let day=tommorow.toString().slice(0,3)


   let cartona=` <div class="forcast-inner ">
   <div class="forecast-header  d-flex justify-content-center align-items-center terr-color rounded-top rounded-start-0">
     <p class="ms-3 p-color pt-3">${day}</p>
   
   </div>
   <div class="forcast-content bg-div py-4 px-3">

     <div class="forcast-ico d-flex justify-content-center  mt-3 fs-1">
       <img  src="${apiData[0].forecast.forecastday[2].day.condition.icon}" alt="">
     </div>
     <div class="num text-white fs-2 fw-bold  d-flex justify-content-center mt-5 ">
       <p>${apiData[0].forecast.forecastday[2].day.maxtemp_c}</p>
       <sup class="py-4">o</sup>
       <p>C</p>

     </div>
     <small class="p-color d-flex justify-content-center mt-2 fs-5">${apiData[0].forecast.forecastday[2].day.mintemp_c}
       <sup class="py-2 ">o</sup>
     </small>
     
     
     <div class="custom text-primary mt-5 d-flex justify-content-center mt-2 mb-3 fs-5">${apiData[0].forecast.forecastday[2].day.condition.text}</div>
      
   </div>
 </div>`

  let third=document.getElementById('third')
  third.innerHTML=cartona;
}




