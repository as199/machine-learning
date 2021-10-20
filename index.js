
const isWeekend = day =>{  
    return day % 7 === 6 || day % 7 === 0;
} 
const getDayName = day =>{
    const date =new Date(Date.UTC('2021', 0, day));
    return  new Intl.DateTimeFormat('en-US', {weekday: "short"}).format(date);
}

const calendar = document.querySelector("#app-calendar");   
for (let day = 1; day<= 31; day++){
    const weekend = isWeekend(day);
    let name ='';
    if(day <= 7){
         name = ` <div class="dayName">${getDayName(day)}</div>` ;
    }
    calendar.insertAdjacentHTML("beforeend",` <div class="day ${weekend ? 'weekend': ''}">${name} ${day}</div>` );
}

   document.querySelectorAll("#app-calendar .day").forEach(day =>{
       day.addEventListener("click", event =>{
event.currentTarget.classList.toggle("selected")
       } );
   });