<?php

	// Server connect variables for mike's computer
	if(gethostname() === "GoOutside"){
		$server = 'localhost';
		$loginID = 'root';
		$pword = 'Letmein2MySQL';
		$db = 'GreenSteam';
	} else { // Server connect variables for db2 server
		$server = 'localhost';
		$loginID = '201501_481_04'; 
		$pword = 'sd0el7PDN';
		$db = 'db201501_481_g04';
	}
	
	//create mysql connection object with login vars
	$conn = new mysqli($server, $loginID, $pword, $db);

	//connect or die
	if ($conn->connect_error) {
	 	die("Connection failed: " . $conn->connect_error);
	}
?>