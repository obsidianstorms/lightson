window.onload = initLoad;
//rule: onclick must be set to = functionname not "functionname()"
//rule: use of "this" might allow this.childValue.nodeValue to be read and then changed by simple assignment rather than having to use this.childNode to get then delete then createTextNode then appendNode.... see v2 vs v3
function test () { alert ("hi"); } //test function




function initLoad() {	//globals and initial functions
//LIGHTS
	master_lights = document.getElementById("lights");
	overlay = document.getElementById("overlay");
	lightsOn();//lights on to start w/   //use master_lights.onclick = lightsOn; //or call lightsOff(); if want the overlay active at start
//POWER
	powerControlSetup(); //run power control setup to create port and master controls
}
	


// ######################  ROOM "LIGHTS" CONTROLS  ######################

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
	
	for (i=0;i<outlets.length;i++){
		var b_id = "p"+outlets[i]; //"re""create" button ids. They exist but the code needs to read them as a loop
		document.getElementById(b_id).onclick = switchControl; //set outletControl to each button 
	}
}

function switchControl () {	 //Change Button Labels,         //Change Indicator Lights

	//Get current status                                         //and place code focus on related indicator light	
	var old_label = this.firstChild.nodeValue; 
	//passing selected ids (individual or master) to intermediate functions to ultimately pass to sendOutletId php-js function
	if (this.id == "p0") { 
		masterControl(old_label);
	} else {
		outletControl(this.id[1]); //number of id only, not full id name
	}
	var new_label = changeSwitchState(old_label); //get new label
 	this.firstChild.nodeValue = new_label; //change switch/button label
	
}



function masterControl(masterSwitchState) {  //to apply to all ports/outlets based on master's old state
	for (i=1;i<outlets.length;i++){
		sendOutletId(i);
		var outletSwitchState = document.getElementById("p"+i);
		var new_label = changeSwitchState(masterSwitchState); //get new label 
 		outletSwitchState.firstChild.nodeValue = new_label; //change switch/button label
	}
}

function outletControl(port){
	sendOutletId(port);
}


function changeSwitchState(old_state) {
	if (old_state == "Off") { new_state = "On"; }
	else if (old_state == "On") { new_state = "Off"; }
	else { alert("Error changing state")};
	return new_state;
}


function changeIndicatorLight(ipid,r){ //good vs error
	if (r==1) { var status = "good";} 
	else if (r==0) { var status = "error";}
	else {alert("Error changing indicator light");}
	
	var indicator_id = "p"+ipid+"s"; //"create" the id value to be searched in next line of code
	//old_status = document.getElementById(indicator_id).className; //not using, instead pulling from PDU actual status
	document.getElementById(indicator_id).className = status;

}

function sendOutletId(pid) { //pid is an integer
//	alert(pid);
	//send id to another script and return result


	switchRequest = createRequest(); //from utils.js
	if (switchRequest == null) { //if the util.js script fails for some reason.
		alert("Unable to create request");
	} else {
		var url= "outletcontrol.php?outletnum=" + pid;
//		switchRequest.onreadystatechange = somescript; //run or set some script to change status?
		switchRequest.open("GET",url,true); //learn what true vs false again is for 
		switchRequest.send(null); //learn what this line was for as well

	}

	var result = switchRequest;
	alert(result);
	//var result = 1; //successful response from another script, also might need to read response to get a "current on" or "current off" status rather than just successful
	//...otherwise the indicator light would probably stay green the whole time, regardless whether on or off.
	//stop sending to another script and accept results

	changeIndicatorLight(pid,result);		


}
 
//example source
/*
  	usernameRequest = createRequest();
  	  	if (usernameRequest == null) {
  		alert("Unable to create request");
  	} else {
   		var theName = document.getElementById("username").value;
    	var username = escape(theName);
    	var url= "checkName.php?username=" + username;
    	usernameRequest.onreadystatechange = showUsernameStatus;
    	usernameRequest.open("GET", url, true);
    	usernameRequest.send(null);


function showUsernameStatus() {
  if (usernameRequest.readyState == 4) {
    if ((usernameRequest.status == 200) || (usernameRequest.status == 0)) { //==0 for local file:// rather than localhost
      if (usernameRequest.responseText == "okay") {
        document.getElementById("username").className = "approved";
        usernameValid = true;
      } else {
        document.getElementById("username").className = "denied";
        document.getElementById("username").focus();
        document.getElementById("username").select();
        usernameValid = false;
      }
      checkFormStatus();
    }
  }
}
*/
  	
  	
