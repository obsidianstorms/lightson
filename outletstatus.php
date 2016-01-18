<?php
// copyright license/LICENSE

include("outlet_values.php");



//DYNAMIC VALUES
//$num = 1;  //outlet port # (1-8)
$num = $_REQUEST['outletnum'];
//echo $num;  //echo vs return seem to change whether it returns once or twice, also return fails to pass anything but ""
//if ($num) { echo 1; } else { echo 0;}
//$num = 1;


$op = ".".$num; //outlet port # (1-8)
//$cmd = 3;  //state change: 1 immediateon, 2 immediateoff, 3 reboot
//$cmd = $_REQUEST['commandnum'];

$oid = $pre.$det.$op;
//.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#

//FUNCTIONS
//READ STATUS 
//$status = snmp3_real_walk($ip, $sec_name, $sec_level, $auth_protocol,  $auth_passphrase, $priv_protocol, $priv_passphrase, $oid);
$status = snmpget($ip, $comm, $oid); 

//CHANGE STATE
//$result = snmpset($ip, $comm, $oid, 'i', $cmd); //true/false or 1/0?


//RETURN VALUES
//echo "Outlet: ".$num." was ".$result." turned ".$cmd;
//return $result;
//echo $result;
echo $status;


