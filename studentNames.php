<?php

	$method = $_SERVER['REQUEST_METHOD'];
	if( strtolower($method) == 'post'){
		// Server connect variables for mike's computer
		
		include 'connectToDb.php';	

		$t_i = $_POST['teacher'];

		//create sql statement 
		$sql="SELECT * FROM Student WHERE teacher='$t_i' ORDER BY s_name ASC";	

		//create array for table results
		$student_arr = array();
		
		if ($result = $conn->query($sql)) {
			
		    // fetch associative array 
		    while ($row = $result->fetch_object()) {
				$student_arr[] = $row;
		    }

		    // free result set 
		    $result->free();
		}

		$conn->close();

		echo json_encode($student_arr);
	}	
	return null;
?>