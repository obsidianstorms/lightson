// copyright license/LICENSE
window.onload = initLoad;
//rule: onclick must be set to = functionname not "functionname()"
//rule: use of "this" might allow this.childValue.nodeValue to be read and then changed by simple assignment rather than having to use this.childNode to get then delete then createTextNode then appendNode.... see v2 vs v3


function initLoad() {	//globals and initial functions
//LIGHTS
	master_lights = document.getElementById("lights");
	overlay = document.getElementById("overlay");
	lightsOn();//lights on to start w/   //use master_lights.onclick = lightsOn; //or call lightsOff(); if want the overlay active at start
//POWER
	powerControlSetup(); //run power control setup to create port and master controls
//ERROR
	
}
	


// ######################  ROOM "LIGHTS" CONTROLS  ###################### CURRENTLY DEFAULTING TO ON

function lightsOn () {
	//Change Button Label	
	var old_label = master_lights.firstChild;
	if (old_label) { master_lights.removeChild(old_label); }//if text(node) exists in div, remove it 
	var new_label = document.createTextNode("Off");
	master_lights.appendChild(new_label);
	master_lights.onclick = lightsOff;
	//Interface Effect	
	overlay.className="on"; // "disable" or remove the overlay values so buttons are usable underneath //turn lights on
	document.getElementById("body").style.backgroundColor = "#888888";

}

function lightsOff () {
	//Change Button Label
	var old_label = master_lights.firstChild;
	if (old_label) { master_lights.removeChild(old_label); } //if text(node) exists in div, remove it
	var new_label = document.createTextNode("On");
	master_lights.appendChild(new_label);
	master_lights.onclick = lightsOn;
	//Interface Effect	
	overlay.className="off"; // "enable" or replace the overlay values so buttons are disabled underneath //turn lights off
	document.getElementById("body").style.backgroundColor = "#333333";
}



// ######################  OUTLET CONTROLS  ######################


function powerControlSetup () { //prepare switches
	outlets = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8); //0 is the master, if cycling through only ports, start w/ i=1 not i=0 //GLOBAL
	document.getElementById("p"+0).onclick = switchControl; 
	for (i=1;i<outlets.length;i++){ //only for outlets 1-8
		var b_id = "p"+outlets[i]; //"re""create" button ids. They exist but the code needs to read them as a loop
		document.getElementById(b_id).onclick = switchControl; //set outletControl to each button 
		checkOutletState(b_id); //check and update current outlet state for button label and light color accuracy
	}
}

function switchControl () {	 
	var switch_id = this.id;  	//Get current clicked button's id  
	turnOutletSwitch(switch_id);
}

function checkOutletState(o_id){ //return int:outlet_state; //1 for on, 2 for off
	var o_num = parseInt(o_id[1]);
	var outlet_state = checkOutletStatus(o_num); //response should be "INTEGER: #" w/ # being 1 for on, 2 for off
	outlet_state = parseInt(outlet_state.substr(9,1));

	switch(outlet_state) {
		case 1: //on, I'm using class "good" for "on" state
			var color = "good";
			var label = "Off"; //setting next state for switch to go into
			break;
		case 2: //off, I'm using class "error" for "off" state
			var color = "error";
			var label = "On"; //setting next state for switch to go into
			break;
		default:
			alert("Error with outlet state determination");
			var error = "fatal";  //<----------------------------------------WORKING ON EXIT PROCEDURE
		}
	if (error == "fatal") {
		alert("Stopping Script. There is a fatal error with communication or the script.");
		break;	
	}
	updateLightState(o_id,color);
	updateButtonState(o_id,label);
	return outlet_state; //1 for on, 2 for off
}

function updateLightState(port_id,status) { //changing indicator light :: error/red is off, good/green is on
	var port_id_light = port_id+"s";
	document.getElementById(port_id_light).className = status;
}

function updateButtonState(port_id,status) { //changing button label
	document.getElementById(port_id).firstChild.nodeValue = status;//change switch/button label
}


function turnOutletSwitch (port_id) { //sending command to php and device, updating indicator light status
	//EXTRACT PORT NUMBER
	portNum = parseInt(port_id[1]); //number only, not "p#" (respectively)
	if (port_id == "p0") { //if master is toggled
		for (i=1;i<outlets.length;i++){  //cycle through the port list (1 through 8)
			cmd = 3;
			sendChangeRequest(i,cmd);
			checkOutletState("p"+i);
			setTimeout('recheckState()',7000); //checking port status after 7 seconds
		}
	}
	else { //if individual outlet is toggled
		var cmd = findCommand(port_id);
		sendChangeRequest(portNum,cmd);
		checkOutletState(port_id);
	}	
}

function recheckState() { //needed to get the timedelay to work after full restart
	for (i=1;i<outlets.length;i++){  //cycle through the port list (1 through 8)
		checkOutletState("p"+i);
	}
}

function findCommand (port_id) { //determine command needed based on current outlet state  //return int:command; //1 for on, 2 for off,
	var cur_o_state = checkOutletState(port_id);
	if (cur_o_state == 1) { //if current outlet state is 1 or "on"
		var command = 2; //issue off command, the button will be set to shut off
	} else if (cur_o_state == 2) { //if current outlet state is 2 or "off"
		var command = 1; //issue on command, the button will be set to turn on
	} else {alert("The command structure is all messed up. Get someone to check out the findCommand() function"); }
	return command;
}


//==================== PHP INTERACTION =========================	
function checkOutletStatus(num) {   
	switchRequest = createRequest(); //from utils.js
	if (switchRequest == null) { //if the util.js script fails for some reason.
		alert("Unable to create request");
	} else {
		var url= "outletstatus.php?outletnum=" + num;
		switchRequest.onreadystatechange = passResponse;
		//switchRequest.open("GET",url,true); //learn what true vs false again is for  and learn security issues and uses of GET vs POST here
		switchRequest.open("GET",url,false); //http://www.codingforums.com/showthread.php?p=767027
		switchRequest.send(null); //learn what this line was for as well	
	}
	output = switchRequest.responseText;
	//alert("Result: "+output);
	return output;
}

//==================== PHP INTERACTION =========================	
function sendChangeRequest(num,cmd) {  
	switchRequest = createRequest(); //from utils.js
	if (switchRequest == null) { //if the util.js script fails for some reason.
		alert("Unable to create request");
	} else {
		//?variable=value&variable=value
		//var url= "outletcontrol.php?outletnum=" + num;
		var url= "outletcontrol.php?outletnum=" + num + "&commandnum=" + cmd;
	//	switchRequest.onreadystatechange = passResponse; //tried passResponse(pid) but didn't appear to work
		switchRequest.onreadystatechange = passResponse;
		//switchRequest.open("GET",url,true); //learn what true vs false again is for  and learn security issues and uses of GET vs POST here
		switchRequest.open("GET",url,false); //http://www.codingforums.com/showthread.php?p=767027
		switchRequest.send(null); //learn what this line was for as well	
	}
	
	//alert(output);  //seems to work, interesting 2ndary result though, it will display full text
	//alert(output.result); //also seems to work, currently undefined though
	output = switchRequest.responseText;
	//alert("Result: "+output);
	return output;
}

//==================== PHP INTERACTION =========================	
function passResponse () { //for some reason this is responding 2 or 3 times - first is blank, that's if php is 'echo', there's no data at all if php is 'return', 
//apparently the 'repeats' are other responses per the readyState and status values...with the following two if statements, there's only "1" response.
  	if (switchRequest.readyState == 4) {
    	if ((switchRequest.status == 200) || (switchRequest.status == 0)) { //==0 for local file:// rather than localhost
			//var result = switchRequest.responseText;
			//var result = switchRequest.responseText;			
			return passResponse.responseText;
		} 
	}
}

