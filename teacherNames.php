<?php

	$method = $_SERVER['REQUEST_METHOD'];
	if( strtolower($method) == 'post'){
		// Server connect variables for mike's computer
		include 'connectToDb.php';

		//create sql statement 
		$sql="SELECT * FROM Teacher";// ORDER BY t_lastName ASC";	

		//create array for table results
		$teacher_arr = array();
		
		if ($result = $conn->query($sql)) {
			
		    // fetch associative array 
		    while ($row = $result->fetch_object()) {
				$teacher_arr[] = $row;
		    }

		    // free result set 
		    $result->free();
		}

		$conn->close();

		echo json_encode($teacher_arr);
	}	
	return null;

?>