const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function updatetime(){

const year = new Date().getFullYear();
const newyear = new Date(`January 1 ${year+1} 00:00:00`);
const current_date = new Date();
const dif = newyear-current_date;
const d =Math.floor(dif/1000/60/60/24)
const h =Math.floor((dif/1000/60/60)%24)
const m =Math.floor((dif/1000/60)%60)
const s =Math.floor((dif/1000)%60)
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML= s<10?"0"+s:s;
// console.log(days+' '+hours+' '+minutes+" "+seconds)
}
// updatetime()
setInterval(updatetime,1000);