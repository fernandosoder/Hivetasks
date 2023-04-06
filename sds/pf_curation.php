<?php
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', 'Abtuab34!');
define('MYSQL_DB_NAME', 'perfilbrasil');
try {
    $pdo = new PDO('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD);

    if (!(is_int($_GET["var2"]) || ctype_digit($_GET["var2"]))) {
        $posts = $pdo->prepare("SELECT id,author,permlink,motivo,UNIX_TIMESTAMP(paytime) as paytime FROM post where paytime > now() order by paytime asc");
        $posts->execute();
        $posts_array = array();
        while ($linha = $posts->fetch(PDO::FETCH_ASSOC)) {
            array_push($posts_array, $linha);
        }
        echo json_encode($posts_array);
        exit();
    }
    $votes = $pdo->prepare("select id,voter,value,time from votes where id_post = :id_post");
    $votes->bindParam(":id_post", $_GET["var2"]);
    $votes->execute();
    $votes_array = array();
    while ($linha = $votes->fetch(PDO::FETCH_ASSOC)) {
        array_push($votes_array, $linha);
    }
    echo json_encode($votes_array);

    exit();
} catch (Exception $exc) {
    http_response_code(404);
}
