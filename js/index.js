let setting = document.getElementById("setting-icons");
let settingBox = document.getElementById("setting-box");
let time = document.getElementById("today");
let timeBox = document.getElementById("time-box");
let act = document.getElementById("act");
let topBar = document.getElementById("top-bar");
let dash = document.getElementById("dash");
let back01 = document.getElementById("back01");

let nowTime = new Date();
let month;
console.log(nowTime.getSeconds())

switch (nowTime.getMonth() + 1) {
  case 1:
    month = 'Jan'+nowTime.getDate();
    break;
  case 2:
    month = 'Feb'+nowTime.getDate();
    break;
  case 3:
    month = 'Mar'+nowTime.getDate();
    break;
  case 4:
    month = 'Apr'+nowTime.getDate();
    break;
  case 5:
    month = 'May'+nowTime.getDate();
    break;
  case 6:
    month = 'Jun'+nowTime.getDate();
    break;
  case 7:
    month = 'Jul'+nowTime.getDate();
    break;
  case 8:
    month = 'Aug'+nowTime.getDate();
    break;
  case 9:
    month = 'Sep'+nowTime.getDate();
    break;
  case 10:
    month = 'Oct'+nowTime.getDate();
    break;
  case 11:
    month = 'Nov'+nowTime.getDate();
    break;
  case 12:
    month = 'Dec'+nowTime.getDate();
    break;

  default:
    month = 'Jan'+nowTime.getDate();
    break;
}

setInterval(()=>{
  nowTime = new Date();
  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();
  if (seconds.toString().length == 1) {
    seconds = '0'+seconds;
  }
  if (hours.toString().length == 1) {
    hours = '0'+hours;
  }
  if (minutes.toString().length == 1) {
    minutes = '0'+minutes;
  }
  time.innerHTML = `${month} &nbsp;${hours}:${minutes}:${seconds}`;
},1000)


settingBox.style.opacity = "0";
settingBox.style.transform = "scaleY(0)";

timeBox.style.opacity = "0";
timeBox.style.transform = "scaleY(0)";

// back01.style.opacity = "0";
// back01.style.zIndex = "0";
back01.style.display = "none";


function hideTime(){
    time.style.borderBottomColor = "transparent";
    timeBox.style.opacity = "0";
    timeBox.style.transform = "scaleY(0)";
}
function showTime(){
     time.style.borderBottomColor = "orange";
    timeBox.style.opacity = "1";
    timeBox.style.transform = "scaleY(1)";
}
function hideSetting(){
    setting.style.borderBottomColor = "transparent";
    settingBox.style.opacity = "0";
    settingBox.style.transform = "scaleY(0)";
}
function showSetting(){
     setting.style.borderBottomColor = "orange";
    settingBox.style.opacity = "1";
    settingBox.style.transform = "scaleY(1)";
}
function hideAct(){
    act.style.borderBottomColor = "transparent";
    topBar.style.zIndex = "auto";
    dash.style.zIndex = "auto";
    // back01.style.opacity = "0";
    // back01.style.zIndex = "0";
    back01.style.display = "none";
}
function showAct(){
     act.style.borderBottomColor = "orange";
     topBar.style.zIndex = "99999";
     dash.style.zIndex = "99999";
    // back01.style.opacity = "1";
    // back01.style.zIndex = "9999";
    back01.style.display = "flex";
}


document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
		document.querySelector("#loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};


setting.addEventListener("click", function() {

  if ( settingBox.style.opacity == "0" ) {
   showSetting();
   hideTime();
  } else {
    hideSetting();
  }
});

time.addEventListener("click", function() {

  if ( timeBox.style.opacity == "0" ) {
    showTime();
    hideSetting();
  } else {
     hideTime();
  }
});

act.addEventListener("click", function(){

  if ( back01.style.display == "none" ) {
    showAct();
    hideSetting();
    hideTime();
  } else {
     hideAct();
  }
})
