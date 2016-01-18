window.onload = initCSS;
//rule: onclick must be set to = functionname not "functionname()"
function initCSS() {	
	var master_lights = document.getElementById("lights");
	master_lights.onclick = run;
	}
	
function test () {
	alert ("hi");
	}


function run () {
	var master_lights = document.getElementById("lights");

	var old_label = master_lights.firstChild;
	if (old_label) {
		master_lights.removeChild(old_label);
		}
	
	var new_label = document.createTextNode("on");
	master_lights.appendChild(new_label);
	master_lights.onclick = off;
}

function off () {
	var master_lights = document.getElementById("lights");

	var old_label = master_lights.firstChild;
	if (old_label) {
		master_lights.removeChild(old_label);
		}

	var new_label = document.createTextNode("off");
	master_lights.appendChild(new_label);
	master_lights.onclick = run;
}
