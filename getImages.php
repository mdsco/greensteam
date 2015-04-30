<?php
	
	$method = $_SERVER['REQUEST_METHOD'];
	if( strtolower($method) == 'post' || $call == true){

		if( strtolower($method) == 'post'){ $grade = $_POST['grade']; }
		else{ $grade = $classNum; }

		include 'connectToDb.php';

		if($grade === "A"){
			$sql="SELECT * FROM Media ORDER BY grade DESC";
		}
		else{
			$sql="SELECT * FROM Media WHERE grade='$grade'";
		}
		//create array for table results
		$images_arr = array();
		$images_obj = array();


		if ($result = $conn->query($sql)) {
			
		    // fetch associative array 
		    while ($row = $result->fetch_object()) {
				$images_obj[] = $row;
				$images_arr[] = ["media_title" => $row->media_title, "date_uploaded" => $row->date_uploaded, "content" => $row->content, "media_ref" => $row->media_ref, "grade" => $row->grade];
		    }
		    // free result set 
		    $result->free();
		}

		$conn->close();

		if($call != true){
			echo json_encode($images_obj);
		}
	}	
	return null;
	
?>