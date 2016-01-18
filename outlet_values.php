<?php
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