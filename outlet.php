<?php
// copyright license/LICENSE
//NOT USED - has been split between outletcontrol, outletstatus, and outlet_values

//SNMPv3 Details
$sec_name = "_security_name_";
//$sec_level = "authPriv";
$sec_level = "_security_level_";
$auth_protocol = "_protocol_";
$auth_passphrase = "_auth_pass_phrase_";
$priv_protocol  = "_protocol_";
$priv_passphrase = "_priv_pass_phrase_";

//SNMPv1 Details
$comm = "private"; //public vs private (read vs read/write)

$ip = "ip.ad.dr.ess"; //device ip or host ip of the PDU
$pre = ""; //device prefix oid values - ".#.#.#.#.#.#.#"

//OID values
$det = ""; //rPDUOutletControlOutletCommand - state on/off - ".#.#.#.#.#.#.#.#"


//DYNAMIC VALUES
$num = 1;  //outlet port # (1-8)
$op = ".".$num; //outlet port # (1-8)
$cmd = 2;  //state change: 1 immediateon, 2 immediateoff, 3 reboot


//FUNCTIONS
//READ STATUS 
$oid = $pre.$det.$op;
$status = snmp3_real_walk($ip, $sec_name, $sec_level, $auth_protocol,  $auth_passphrase, $priv_protocol, $priv_passphrase, $oid);


//CHANGE STATE
$result = snmpset($ip, $comm, $oid, 'i', $cmd); //true/false or 1/0?


//RETURN VALUES
echo "Outlet: ".$num." was ".$result." turned ".$cmd;
