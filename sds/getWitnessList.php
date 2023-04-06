<?php

header("Content-Type: application/json");
//header("Content-Type: text/plain");
$url = isset($_POST["hive_node"]) ? $_POST["hive_node"] : 'https://api.hive.blog';
$data = [
    "id" => 0,
    "jsonrpc" => "2.0",
    "method" => "call",
    "params" => [
        "database_api",
        "get_witnesses_by_vote", [
            "",
            700]
    ]
];
$data_string = json_encode($data);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER,
        array(
            'Content-Type:application/json',
            'Content-Length: ' . strlen($data_string)
        )
);

$result = curl_exec($ch);
curl_close($ch);

//echo ($result) . "\n\n";
//print_r(json_decode($result)->result);

$out = [
    "code" => 0,
    "result" => [
        "cols" => [
            "owner" => 0,
            "last_hbd_exchange_update" => 1,
            "votes" => 2,
            "produced" => 3,
            "total_missed" => 4,
            "running_version" => 5,
            "signing_key" => 6,
            "url" => 7,
            "props" => 8,
            "hbd_exchange_rate" => 9
        ],
        "rows" => []
    ]
];

foreach (json_decode($result)->result as $value) {
    if (strlen($value->votes)  >= 13) {
        $dt = new DateTime($value->last_hbd_exchange_update);
        $w = [
            $value->owner,
            $dt->getTimestamp() * 1000,
            $value->votes,
            10000000,
            $value->total_missed,
            $value->running_version,
            $value->signing_key,
            $value->url,
            $value->props,
            $value->hbd_exchange_rate,
        ];
        array_push($out['result']['rows'], $w);
    }
}



echo json_encode($out);
