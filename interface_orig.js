window.onload = initPage;


	lights();


function lights() {
	master_lights = document.getElementById("lights");
	master_lights.onclick = lightsOn;
	current_label = master_lights.firstChild.nodeValue;
	alert(current_label);
	
/*SAMPLE	
	var sortSpace = document.getElementById("wordbox");
	var sortCell = sortSpace.getElementsByTagName("table")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[cellCount];	
	var sortLetter = this.firstChild.nodeValue;
	var sortValue = document.createTextNode(sortLetter);
	sortCell.appendChild(sortValue);
*/
	}



function lights_on() {
		
	}
// lights onclick="enable()" 









/* DISABLE ALL OF REST OF SCRIPT



/* ---works----- setTimeout('timeout_trigger()', 3000);  function timeout_trigger() {  alert('Hello!');   }  */

var countdown;
var countdown_number;


function countdown_init() {
    countdown_number = 11;
    countdown_trigger();
}

function countdown_trigger(id) {
    if(countdown_number > 0) {
        countdown_number--;
		//code to do something
        //alert("0.1134");
		value1 = id.style.opacity;
		alert(value1);
		value2 = id.style.filter;
		//id.style.opacity = value-(0.1);
		id.style.opacity = value1-0.1;
		id.style.filter = "alpha(opacity="+(value2-10)+")";
		//end of code to do something
        if(countdown_number > 0) {
            countdown = setTimeout('countdown_trigger()', 1000);
        }
    }
}
function countdown_clear() {
    clearTimeout(countdown);
}
	
 function enable() { overlay = document.getElementById("overlay"); countdown_init(overlay); /*overlay.className = "on"; */}
 function disable() { overlay = document.getElementById("overlay"); overlay.className = "off";
 //countdown_init(overlay);
	//overlay.style.opacity = value-(i/10);  	//overlay.style.backgroundColor = i;
 //overlay.className = "off"; 
 }




 function onm() { //overlay = document.getElementById("master"); overlay.className = "good"; 
 on1();on2();on3();on4();on5();on6();on7();on8();
 }
 function offm() { //overlay = document.getElementById("master"); overlay.className = "error"; 
 off1();off2();off3();off4();off5();off6();off7();off8();
 }
 
 function on1() { overlay = document.getElementById("o1"); overlay.className = "good"; }
 function off1() { overlay = document.getElementById("o1"); overlay.className = "error"; }
 function on2() { overlay = document.getElementById("o2"); overlay.className = "good"; }
 function off2() { overlay = document.getElementById("o2"); overlay.className = "error"; }
 function on3() { overlay = document.getElementById("o3"); overlay.className = "good"; }
 function off3() { overlay = document.getElementById("o3"); overlay.className = "error"; }
 function on4() { overlay = document.getElementById("o4"); overlay.className = "good"; }
 function off4() { overlay = document.getElementById("o4"); overlay.className = "error"; }
 function on5() { overlay = document.getElementById("o5"); overlay.className = "good"; }
 function off5() { overlay = document.getElementById("o5"); overlay.className = "error"; }
 function on6() { overlay = document.getElementById("o6"); overlay.className = "good"; }
 function off6() { overlay = document.getElementById("o6"); overlay.className = "error"; }
 function on7() { overlay = document.getElementById("o7"); overlay.className = "good"; }
 function off7() { overlay = document.getElementById("o7"); overlay.className = "error"; }
 function on8() { overlay = document.getElementById("o8"); overlay.className = "good"; }
 function off8() { overlay = document.getElementById("o8"); overlay.className = "error"; } 


/*======================================================






