<?php // copyright license/LICENSE ?><html>
<head>
<?php /*on the fly php gif img creation for light box*/ ?>
<!--style type="text/css"></style-->
<link rel="stylesheet" href="interface.css" type="text/css" />
<script src="interface.js" type="text/javascript"></script>
<script src="utils.js" type="text/javascript"></script>
<!--script type="text/javascript" language="Javascript"></script-->
 
</head>
<body id="body">

<div id="top">
	<div id="roomcontrol">
	<div class="switch"><div class="label">Lights</div><div id="lights" class="button">On</div></div>
	</div>
</div>

<div id="overlay" class="off"></div>

<div id="bottom">
<p>Green indicator squares means the respective outlets have power, red indicator means they are shut off. 
Choose specific ports to turn off or on, or use the Master to restart all outlets. If the master restart is used, wait 5-8 seconds for the indicator lights to refresh.</p>
	<div id="portcontrol">
	<div class="switch"><div class="label">Master</div><div id="p0" class="button">Restart</div><!--div id="p0s" class="error"></div--></div>
<!---------------------->
	<div id="host">
		<div class="device"><div class="label">Host: </div><input id="hostvalue" class="hostdisplay">209.114.126.13</input></div>
	</div>
<!---------------------->
	<div class="switch"><div class="label">Port 1</div><div id="p1" class="button">On</div><div id="p1s" class="error"></div></div>
	<div class="switch"><div class="label">Port 2</div><div id="p2" class="button">On</div><div id="p2s" class="error"></div></div>
	<div class="switch"><div class="label">Port 3</div><div id="p3" class="button">On</div><div id="p3s" class="error"></div></div>
	<div class="switch"><div class="label">Port 4</div><div id="p4" class="button">On</div><div id="p4s" class="error"></div></div>
	<div class="switch"><div class="label">Port 5</div><div id="p5" class="button">On</div><div id="p5s" class="error"></div></div>
	<div class="switch"><div class="label">Port 6</div><div id="p6" class="button">On</div><div id="p6s" class="error"></div></div>
	<div class="switch"><div class="label">Port 7</div><div id="p7" class="button">On</div><div id="p7s" class="error"></div></div>
	<div class="switch"><div class="label">Port 8</div><div id="p8" class="button">On</div><div id="p8s" class="error"></div></div>
	</div>


</div>

</body>
</html>
