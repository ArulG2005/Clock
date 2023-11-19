let time = document.querySelector(".Time");
let timebut = document.querySelector(".time");
let alarmbut = document.querySelector(".alarm");
let swatchbut = document.querySelector(".swatch");
let timerbut = document.querySelector(".timer");
let alarm = document.querySelector(".Alarm");
let swatch = document.querySelector(".Stopwatch");
let timer = document.querySelector(".Timer"); 
let h=document.getElementById("hour");
let m=document.getElementById("min");
let s=document.getElementById("sec");
let sh=document.getElementById("shour");
let sm=document.getElementById("smin");
let ss=document.getElementById("ssec");
let sms=document.getElementById("smillsec");
let stbut=document.getElementById("start");
let spbut=document.getElementById("stop");
let rebut=document.getElementById("restart");
let set=document.getElementById("set");
let Dis=document.querySelector(".dis");
let audio=document.getElementById("aud");
let tstbut=document.getElementById("tstart");
let canbut=document.getElementById("cancel");
let thour = document.getElementById("thour");
let tmin = document.getElementById("tmin");
let tsec = document.getElementById("tsec");
let timerinput = 0; 
let timeUsed = 0; 
let hours;
let minutes;
 let seconds;
 let stoptimer;
 
 tstbut.addEventListener("click", () => {
    let inputSeconds = parseInt(document.getElementById("timerinput").value);

    if (inputSeconds === null || isNaN(inputSeconds)) {
       
        return;
    }

    if (inputSeconds >= 0) {
        timerinput = inputSeconds;

        if (timeUsed >= timerinput) {
            thour.innerText = 0;
            tmin.innerText = 0;
            tsec.innerText = 0;
            timeUsed = 0;
        } else {
            let remainingSeconds = timerinput - timeUsed;
            hours = Math.floor(remainingSeconds / 3600);
            minutes = Math.floor((remainingSeconds % 3600) / 60);
            seconds = remainingSeconds % 60;

            thour.innerText = zero(hours);
            tmin.innerText = zero(minutes);
            tsec.innerText = zero(seconds);
            timeUsed += inputSeconds;
        }
    }

    tstbut.setAttribute('disabled', '');
    stoptimer = setInterval(timerstart, 1000);
});


function timerstart(){
    seconds--;
    if(seconds==0&&minutes!=0){
        minutes--;
        seconds=59;
    }
    if(minutes==0&&hours!=0){
        hours--;
        minutes=59;
    }
    if(seconds==0&&minutes==0&&hours==0){
        audio.play();
        thour.innerText ="00";
        tmin.innerText = "00";
        tsec.innerText = "00";
        clearInterval(stoptimer);
        return;
    }
        
    
    thour.innerText = zero(hours);
    tmin.innerText =zero(minutes);
    tsec.innerText = zero(seconds);
}
canbut.addEventListener("click",()=>{
    clearInterval(stoptimer);
    window.location.reload();
    tstbut.disabled=false;
    thour.innerText ="00";
    tmin.innerText = "00";
    tsec.innerText = "00";
});



let hor;
let men;
let pmam;
let timvis;
let ortim;
let ohour;
let aorp;

let tim = [];

window.onload = () => {
    tim = JSON.parse(localStorage.getItem("timelist"))||[];
    tim.forEach(data => {
        displaytime(data);
    });
}


set.addEventListener("click",()=>{
   let alm=document.getElementById("alarm").value;
    if (alm ==="") {
        return;
    }
    else{
   
    var alam=new Date(alm);
    var d=new Date();
    if(alam.getTime()<d.getTime()){
        alert("Invalid !");
        return;
    }
    else{
      
        if(alam.getHours()>12){
           hor=alam.getHours()-12;
          pmam="PM";
        }
        else{
            hor=alam.getHours();
            pmam="AM";
        }
        men=alam.getMinutes();
    }
     timvis=zero(hor)+":"+zero(men)+ " "+pmam;
    displaytime(timvis);
    tim.push(timvis);
    localStorage.setItem("timelist",JSON.stringify(tim));
}
})



function displaytime(val){
  
        let para=document.createElement('p');
        para.innerText=val;
        Dis.appendChild(para);
    
    para.addEventListener("dblclick",()=>{
        Dis.removeChild(para);
        remove(val);
        console.log(timvis)
        localStorage.setItem("timelist",JSON.stringify(tim));
       
    });
}
function remove(val){
    let index=tim.indexOf(val);
    if(index>-1){
        tim.splice(index,1);
    }
    
}
    
    


var mill=0;
var se=0;
var me=0;
var ho=0;

stbut.addEventListener("click",()=>{
    stop=setInterval(Swatch,10);
   stbut.setAttribute('disabled','');
})
spbut.addEventListener("click",()=>{
    clearInterval(stop);
    stbut.disabled=false;

})
rebut.addEventListener("click",()=>{
    sh.innerHTML="00";
    sm.innerText="00";
    ss.innerText="00";
    sms.innerText="00";
    clearInterval(stop);
    stbut.disabled=false;
    mill=me=ho=se=0;
})
function Swatch(){
   mill++;
  if(mill==100){
    se++;
    mill=0;
  }
  if(se==60){
    se=0;
    me++;
  }
  if(me==60){
    ho++;
    me=0;
  }
  sms.innerText=zero(mill);
  ss.innerText=zero(se);
  sm.innerText=zero(me);
  sh.innerText=zero(ho);

}

setInterval(display,1000);
function display(){
var d=new Date();
let H=d.getHours();
let M=zero(d.getMinutes());
let S=zero(d.getSeconds());
if(H>12){
    H=H-12;
    document.getElementById("nord").innerText="PM";
}
else{
    document.getElementById("nord").innerText="AM";
}
m.innerText=M;
s.innerText=S;
h.innerText=zero(H);
}
function zero(num){
    return num<10?"0"+num:num;
}

timebut.addEventListener('click', () => {
    time.style.visibility = 'visible';
    swatch.style.visibility = 'hidden';
    alarm.style.visibility = 'hidden';
    timer.style.visibility = 'hidden';
    timebut.style.backgroundColor="#000000";
    timebut.style.color="#f8a145"
    alarmbut.style.backgroundColor="#f8a145";
    alarmbut.style.color="#000000"
    swatchbut.style.backgroundColor="#f8a145";
    swatchbut.style.color="#000000"
    timerbut.style.backgroundColor="#f8a145";
    timerbut.style.color="#000000"
    
});
alarmbut.addEventListener('click', () => {
    time.style.visibility = 'hidden';
    swatch.style.visibility = 'hidden';
    alarm.style.visibility = 'visible';
    timer.style.visibility = 'hidden';
    timebut.style.backgroundColor="#f8a145";
    timebut.style.color="#000000"
    alarmbut.style.backgroundColor="#000000";
    alarmbut.style.color="#f8a145"
    swatchbut.style.backgroundColor="#f8a145";
    swatchbut.style.color="#000000"
    timerbut.style.backgroundColor="#f8a145";
    timerbut.style.color="#000000"

});
swatchbut.addEventListener('click', () => {
    time.style.visibility = 'hidden';
    swatch.style.visibility = 'visible';
    alarm.style.visibility = 'hidden';
    timer.style.visibility = 'hidden';
    swatchbut.style.backgroundColor="#000000";
    swatchbut.style.color="#f8a145";
    timerbut.style.backgroundColor="#f8a145";
    timerbut.style.color="#000000";
    alarmbut.style.backgroundColor="#f8a145";
    alarmbut.style.color="#000000";
    timebut.style.backgroundColor="#f8a145";
    timebut.style.color="#000000";
});
timerbut.addEventListener('click', () => {
    time.style.visibility = 'hidden';
    swatch.style.visibility = 'hidden';
    alarm.style.visibility = 'hidden';
    timer.style.visibility = 'visible';
    timerbut.style.backgroundColor="#000000";
    timerbut.style.color="#f8a145";
    alarmbut.style.backgroundColor="#f8a145";
    alarmbut.style.color="#000000";
    timebut.style.backgroundColor="#f8a145";
    timebut.style.color="#000000";
    swatchbut.style.backgroundColor="#f8a145";
    swatchbut.style.color="#000000";

});
setInterval(check,1000);
let triggeredAlarms = new Set();

function check() {
    var d = new Date();
    if (d.getHours() > 12) {
        ohour = d.getHours() - 12;
        aorp = "PM";
    } else {
        ohour = d.getHours();
        aorp = "AM";
    }
    ortim = ohour + ":" + d.getMinutes() + " " + aorp;
    tim.forEach(val => {
        if (val === ortim && !triggeredAlarms.has(val)) {
            audio.play();
            triggeredAlarms.add(val);
            remove(val);
            localStorage.setItem("timelist",JSON.stringify(tim));
            
        }
    })
}
