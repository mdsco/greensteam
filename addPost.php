<?php
	
	$method = $_SERVER['REQUEST_METHOD'];
	if( strtolower($method) == 'post' || $call == true){
	
		$reply = "";

		$comment  = $_POST['comment']; 
		$user = $_POST['user']; 
		$name = $_POST['name'];
		$grade = $_POST['grade'];

		include 'connectToDb.php';
		
		$sql="INSERT INTO Post (s_username, s_name, content, grade) VALUES ('$user', '$name', '$comment', '$grade')";
		$result = $conn->query($sql);
		
		if ($result) {

			$reply = "Your comment has been entered";
		    // free result set 
		    //$result->free();
		}
		else { 
			$reply = "Something went wrong, please try again.";
		}

		$conn->close();

		echo $reply;
		
	}	
	return null;
	
?>