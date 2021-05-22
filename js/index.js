console.log("hello")

var setting = document.getElementById("setting-icons");
var settingBox = document.getElementById("setting-box");
var time = document.getElementById("today");
var timeBox = document.getElementById("time-box");
var act = document.getElementById("act");
var topBar = document.getElementById("top-bar");
var dash = document.getElementById("dash");
var back01 = document.getElementById("back01");


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
