console.log("hello")

var setting = document.getElementById("setting");
var settingBox = document.getElementById("setting-box");
var time = document.getElementById("time");
var timeBox = document.getElementById("time-box");

settingBox.style.opacity = "0";
settingBox.style.transform = "scaleY(0)";

timeBox.style.opacity = "0";
timeBox.style.transform = "scaleY(0)";



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

// document.getElementsByTagName("body").addEventListener("click", function(){
//   hideSetting();
//   hideTime();
// });