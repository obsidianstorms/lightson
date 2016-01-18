window.onload = initPage;

function initPage() {	//	alert("checkinglines");// 	document.getElementById("username").onblur = checkUsername; //	document.getElementById("password2").onblur = checkPassword;  //	document.getElementById("register").onclick = registerUser;  
	lights();}


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


/*======================================================
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






function checkUsername() {  	document.getElementById("username").className = "thinking";  	  	usernameRequest = createRequest();  	if (usernameRequest == null) {  		alert("Unable to create request");  	} else {   		var theName = document.getElementById("username").value;    	var username = escape(theName);    	var url= "checkName.php?username=" + username;    	usernameRequest.onreadystatechange = showUsernameStatus;    	usernameRequest.open("GET", url, true);    	usernameRequest.send(null);    	  	}}function showUsernameStatus() {  if (usernameRequest.readyState == 4) {    if ((usernameRequest.status == 200) || (usernameRequest.status == 0)) { //==0 for local file:// rather than localhost      if (usernameRequest.responseText == "okay") {        document.getElementById("username").className = "approved";        usernameValid = true;      } else {        document.getElementById("username").className = "denied";        document.getElementById("username").focus();        document.getElementById("username").select();        usernameValid = false;      }      checkFormStatus();    }  }}function checkPassword() {  var password1 = document.getElementById("password1");  var password2 = document.getElementById("password2");  password1.className = "thinking";  //compare two passwords  if ((password1.value == "") || (password1.value == null) || (password1.value != password2.value)) {  	password1.className = "denied";  	passwordValid = false;  	checkFormStatus();  	return;  }   //passwords match, sent request to server  passwordRequest = createRequest();  if (passwordRequest == null) {  	alert ("Unable to creat request");  } else {  	var password = escape(password1.value);  	var url = "checkPass.php?password="+password;  	passwordRequest.onreadystatechange = showPasswordStatus;  	passwordRequest.open("GET", url, true);  	passwordRequest.send(null);  }}function showPasswordStatus() {	var password1 = document.getElementById("password1");	if (passwordRequest.readyState == 4) {		if ((passwordRequest.status == 200) || (passwordRequest.status == 0)) { //==0 for local file			if (passwordRequest.responseText == "okay") { 				password1.className = "approved"; //highlight works, not graphic				document.getElementById("password2").className = "approved";				passwordValid = true;			} else {				password1.className = "denied";				password1.focus();				password1.select();				passwordValid = false;			}			checkFormStatus();		}	}}function checkFormStatus() {	if (usernameValid && passwordValid) {		document.getElementById("register").disabled = false;	} else {		document.getElementById("register").disabled = true;	}}function registerUser() {	t = setInterval("scrollImages()", 50);	document.getElementById("register").value = "Processing...";	registerRequest = createRequest();	if (registerRequest == null) {		alert("Unable to create request.");	} else {		var url = "register.php?username=" +			escape(document.getElementById("username").value) + "&password="+			escape(document.getElementById("password1").value) + "&lastname="+			escape(document.getElementById("lastname").value) + "&firstname="+			escape(document.getElementById("firstname").value) + "&email="+			escape(document.getElementById("email").value) + "&genre="+			escape(document.getElementById("genre").value) + "&favorite="+			escape(document.getElementById("favorite").value) + "&tastes="+			escape(document.getElementById("tastes").value);		registerRequest.onreadystatechange = registrationProcessed;		registerRequest.open("GET", url, true);		registerRequest.send(null);	}}function registrationProcessed() {	if (registerRequest.readyState == 4) {		if (registerRequest.status == 200) {			document.getElementById('wrapper').innerHTML = registerRequest.responseText;		}	}}function scrollImages() {	var coverBarDiv = document.getElementById("coverBar");	var images = coverBarDiv.getElementsByTagName("img");	for (var i=0; i<images.length; i++) {		var left = images[i].style.left.substr(0, images[i].style.left.length-2);		if (left <= -86) {			left = 532;		}		images[i].style.left = (left -1) + "px";	}}*/ //END OF DISABLE ALL REST OF SCRIPT