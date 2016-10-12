console.log("loaded")
var dates = new Date ();

function setTime(){
var hr= (dates.getHours()%12);
var min=(dates.getMinutes());
var sec=(dates.getSeconds());
}

var hexColor = document.getElementById('hex');



function timeclock(){
	var dates = new Date ();
	var hours = (dates.getHours()%12).toString();
	var minutes = dates.getMinutes().toString();
	var seconds = dates.getSeconds().toString();

	if (hours.length<2){
		hours = '0' + hours;
	}

	if (minutes.length<2){
		minutes ='0' + minutes;

	}

	if (seconds.length<2){
		Seconds ='0'+ Seconds;
	}

	
var hexStr =hours +' : ' + minutes + '.'+ seconds;
var hexStr = '#' + hours + minutes + seconds;


hexColor.textContent= hexStr;

document.body.style.backgroundColor = hexStr;
}
timeclock();
setTime();

setInterval(timeclock,1000)