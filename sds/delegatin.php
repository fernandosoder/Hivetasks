<?php

$data = file_get_contents("https://api.hive-keychain.com/hive/delegators/" . $user);


//[{"delegator":"shapeshiftdaobr","vesting_shares":0,"delegation_date":"2021-12-07T17:18:18.000Z"},
//{"delegator":"wagnertamanaha","vesting_shares":99190.3325,"delegation_date":"2019-08-14T21:38:48.000Z"},
//{"delegator":"fernandosoder","vesting_shares":2671934.298471,"delegation_date":"2022-02-17T20:06:57.000Z"}]
$delegators = array();
foreach (json_decode($data) as $key => $value) {
    //print_r($value->delegation_date);
    $delg = array(strtotime($value->delegation_date),$value->delegator,$user,$value->vesting_shares);
    
    $delegators[] = $delg;
}
//print_r($delegators);
$res = array(
		"code" => 0,
		"result" => array(
			"cols" => array(
				"time"	=>	0,
				"from"	=>	1,
				"to"	=>	2,
				"vests"	=>	3
				),
			"rows" => $delegators
			)
	);

echo json_encode($res);
exit();