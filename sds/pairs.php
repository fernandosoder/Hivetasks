<?php

header("Content-Type: application/json");
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', 'Abtuab34!');
define('MYSQL_DB_NAME', 'perfilbrasil');
try {
    $pdo = new PDO('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD);


    $votes = $pdo->prepare("select symbol from votes");
    $votes->execute();
    $votes_array = array();
    $out = [
        "code" => 0,
        "result" => [
            "cols" => [
                "symbol" => 0,
                "priceChange" => 1,
                "priceChangePercent" => 2,
                "lastPrice" => 3,
                "openPrice" => 4,
                "lowPrice" => 5,
                "highPrice" => 6,
                "volume" => 7
            ],
            "rows" => []
        ]
    ];

    while ($linha = $votes->fetch(PDO::FETCH_ASSOC)) {
        $w = [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ];
        array_push($out['result']['rows'], $w);
    }

    echo json_encode($out);

    exit();
} catch (Exception $exc) {
    http_response_code(404);
}

//echo ($result) . "\n\n";
//print_r(json_decode($result)->result);

