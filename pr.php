<?php

if (isset($_GET['pr'])) {

    try {
        include "conn.php"
        $stmt = $conn->prepare('SELECT img,user,permlink FROM hivetasks.promo where due > now() order by due asc;');
        $stmt->execute();
        $promos = array();
        while ($linha = $stmt->fetch(PDO::FETCH_ASSOC)) {
            header("content-type: application/json");
            //header("Last-Modified: " . date("r", $linha["lastseen"]));
            $data = array(
                "user" => $linha["user"],
                "permlink" => $linha["permlink"]);
            array_push($promos, $data);
            }
        echo json_encode($promos);
    } catch (PDOException $e) {
        //echo $e->getMessage();
    }
    exit();
}

//phpinfo();



    
    