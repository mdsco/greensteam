<?php
	//session_start();

	include 'connectToDb.php';

	if($_POST['username'] != ""){
		if($_POST['password'] != ""){

			$uid = $_POST['username'];
			$upwd = $_POST['password'];
			$aOrT = $_POST['admin'];
			//$ugrd = $_POST['grade'];


			$sql = "SELECT * FROM Teacher WHERE t_username = '$uid' AND t_password = '$upwd'";
			
			$result = $conn->query($sql);
			$row = $result->fetch_assoc();

			
			if ($result->num_rows == 1){

				$name = $row["t_firstName"];
				$grade = $row["grade"];
				
				if($row['admin'] == 1 && $aOrT == 1){

			
					$reply = "You are now logged in as an administrator.";

					echo json_encode(array("msg"=>$reply, "name"=>$name, "usertype"=>"admin", "class"=>$grade));

				} else if ($aOrT == 0){

					$tId = $row['t_id'];
					$reply  = "You are now logged in as a teacher.";
					echo json_encode(array("msg"=>$reply, "name"=>$name, "tId"=>$tId, "class"=>$grade));
				}

				else {

					$reply = "Sorry, you can not log in";
					echo json_encode(array("msg"=>$reply, "name"=>""));
				}
			
			} else if ($result->num_rows < 1){


				$uid = $_POST['username'];
				$upwd = $_POST['password'];
				// $aOrT = $_POST['admin'];
				$ugrd = $_POST['grade'];

				$sql = "SELECT * FROM Student WHERE s_username = '$uid' AND s_password = '$upwd'";
				$result2 = $conn->query($sql);
				$row = $result2->fetch_assoc();
				
				if ($result2->num_rows == 1){

					if($row['grade'] == $ugrd){
					

						$reply = "You are now logged in.";

						$name = $row["s_name"];
						$grade = $row["grade"];
						$teacher = $row["teacher"];
						
						echo json_encode(array("msg"=>$reply, "name"=>$name, "usertype"=>"student", "class"=>$grade, "teacher"=>$teacher));
					} else if($row['grade'] != $ugrd){
						$reply = "Sorry, only teachers and students in this grade can log in to this page :(";
						echo json_encode(array("msg"=>$reply, "name"=>""));
					}

				} else {
					$reply = "Login unsuccessful.  Please try again.";
					echo json_encode(array("msg"=>$reply, "name"=>""));
				} 
			} 

			$conn->close();
		// close $_POST password		
		} else {
			echo json_encode(array("msg"=>"You need to enter a password", "name"=>""));
		} 
	// close $_POST username
	} else{
		echo json_encode(array("msg"=>"You need to enter a username", "name"=>""));
	} 

	
	
	
?>