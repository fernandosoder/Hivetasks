<?php

$res = array(
		"code" => 0,
		"result" => array(
			"cols" => array(
				"time"	=>	0,
				"from"	=>	1,
				"to"	=>	2,
				"vests"	=>	3
				),
			"rows" => array(
				array(1635198626,"user1",$user,412113.874601),
				array(1635188626,"user2",$user,4124313.874601),
				array(1635128626,"user3",$user,41213.87401)
				)
			)
	);

echo json_encode($res);
