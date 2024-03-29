<?php

echo time();

exit();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("content-type: text/plain");

$op = array(
    "jsonrpc" => "2.0",
    "id" => 123,
    "method" => "foo.bar",
    "params" => array(
        "hello" => "there"
    )
);



# JSON+Base64 request params
echo $params = base64_encode(json_encode($op["params"]));
echo "\n";
# 8 byte nonce
$nonce = random_bytes(8);
echo bin2hex($nonce);
echo "\n";
# ISO 8601 formatted timestamp
echo ($timestamp = date(DATE_ISO8601)); # "2017-11-26T16:57:40.633Z"
echo "\n";
# Signer account name
echo $account = 'foo';
echo "\n";
# Private posting key belonging to foo
$signing_key = "5K3uesdyBMQLG5k3qEsUo9k5Hrsgxh81fGzVKexa67qzLyszxgp";
//$signing_key_hex = "80A2A0599F8E313AFAEAD460FCE96ACC487BC736FE19A134D932E2A2CAD35D3EA0F8DE5C09";
echo "\n";
# Signing constant K (sha256('steem_jsonrpc_auth'))
//echo $K = hex2bin('3b3b081e46ea808d5a96b08c4bc5003f5e15767090f344faab531ec57565136b');


# first round of sha256
$first = hash("sha256", $timestamp . $account . $op['method'] . $params);

echo "\n\nFirst:   " . ($first);


$message = hash("sha256", $K + $first + $nonce);

echo "\nMessage: " . ($message);
echo "\n";



$bufWif = hex2bin($signing_key_hex);

echo ($signing_key_hex);
//echo "\n" . ($bufWif);

//split($signing_key_hex);


$privKey = substr($bufWif, 0, -4);
$checksum = substr($bufWif, -4);
echo "\n" . bin2hex($privKey);
echo "\n" . bin2hex($checksum);

$newChecksum = hex2bin(hash("sha256",$privKey));
echo "\n" . bin2hex($newChecksum);
$newChecksum = substr($newChecksum, 0, 4); 
echo "\n" . bin2hex($newChecksum);
/* 
$privKey = $bufWif.slice(0, -4);
$checksum = $bufWif.slice(-4);
		var newChecksum = hash.sha256(privKey);
		newChecksum = hash.sha256(newChecksum);
		newChecksum = newChecksum.slice(0, 4);
		if (checksum.toString() == newChecksum.toString()) {
			isWif = true;
		}

*/


//$signature = ecdsa_sign($message, $signing_key);
//echo ($signing_key);
echo "\n";
//echo $signing_key;

$signed = "";
echo openssl_sign($message, $signed, $privKey);
echo "\nSigned:  " . $signed;
echo "\nFim";

exit();

$digests = openssl_get_md_methods();
$digests_and_aliases = openssl_get_md_methods(true);
$digest_aliases = array_diff($digests_and_aliases, $digests);

print_r($digests);

print_r($digest_aliases);
                                                        