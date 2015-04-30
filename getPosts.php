<?php
	
	$method = $_SERVER['REQUEST_METHOD'];
	if( strtolower($method) == 'post' || $call == true){
	
		if( strtolower($method) == 'post'){ $grade = (int) $_POST['grade']; }
		//else{ $grade = $classNum; }

		include 'connectToDb.php';

		if($grade === "A"){
			$sql="SELECT * FROM Post ORDER BY grade DESC";
		}
		else{
			$sql="SELECT * FROM Post WHERE grade='$grade' ORDER BY date_posted ASC";
		}

		//create array for table results
		$post_arr = array();
		$post_obj = array();

		if ($result = $conn->query($sql)) {
			
		    // fetch associative array 
		    while ($row = $result->fetch_object()) {
				$post_obj[] = $row;
				//$post_arr[] = ["s_username" => $row->s_username, "s_name" => $row->s_name, 
				//"date_posted" => $row->date_posted, "content" => $row->content, "approved" => 
				//$row->approved, "grade" => $row->grade];
		    }
		    // free result set 
		    $result->free();
		}

		$conn->close();

		//if($call != true){
		echo json_encode($post_obj);
		//}
	}	
	return null;
	
?>