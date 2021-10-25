<?php 
header("Access-Control-Allow-Origin: *");

//print_r($_GET);

switch($_GET['var1']){
	case 'ticker_api' :
		switch($_GET['var2']){
			case 'getTicker' :
					switch($_GET['var3']){
						case 'rates' :
							header("Content-Type: application/json");
							include "rates.json";
							break;
					}
				break;
		}
		break;
	case '' :
		break;
	case '' :
		break;
	
}
