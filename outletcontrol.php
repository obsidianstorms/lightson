<?php





//DYNAMIC VALUES
//$num = 1;  //outlet port # (1-8)
$num = $_REQUEST['outletnum'];
$op = ".".$num; //outlet port # (1-8)
$cmd = 2;  //state change: 1 immediateon, 2 immediateoff, 3 reboot


$oid = $pre.$det.$op;


//FUNCTIONS
//READ STATUS 
$status = snmp3_real_walk($ip, $sec_name, $sec_level, $auth_protocol,  $auth_passphrase, $priv_protocol, $priv_passphrase, $oid);


//CHANGE STATE
$result = snmpset($ip, $comm, $oid, 'i', $cmd); //true/false or 1/0?


//RETURN VALUES
//echo "Outlet: ".$num." was ".$result." turned ".$cmd;
//return $result;
echo $result;



?>
