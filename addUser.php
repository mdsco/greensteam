<?php
	
	include 'connectToDb.php';
	
	if($_POST['type'] === "teacher"){

		$t_f = $_POST['teach_f'];
		$t_l = $_POST['teach_l'];
		$t_u = $_POST['teach_u'];
		$t_p = $_POST['teach_p'];
		$t_g = $_POST['teach_g'];


		$entTeachSql="INSERT INTO Teacher (t_firstName, t_lastName, t_username, t_password, grade) VALUES ('$t_f', '$t_l', '$t_u', '$t_p', '$t_g')";
		
		$result = $conn->query($entTeachSql);
		
		if ($result){
			echo "Teacher: '" . $t_f . " " . $t_l . "' Entered";
		}

	} else if($_POST['type'] === "student"){
		
		$sn = $_POST['student_f'];
		$su = $_POST['student_u'];
		$sg = $_POST['student_g'];
		$st = $_POST['student_t'];

		$sp = "";

		$passSql = "SELECT * FROM Teacher WHERE t_id = '$st'";
			
		$result = $conn->query($passSql);
		$row = $result->fetch_assoc();
		
		if ($result->num_rows == 1){
			$sp =  $row["t_username"];
		}

		$entStudSql = "INSERT INTO Student (s_username, s_password, s_name, grade, teacher) VALUES ('$su', '$sp', '$sn', '$sg','$st')";

		$result = $conn->query($entStudSql);

		if ($result){
			echo "Student: '" . $sn . "' Entered";
		}
	}
	
	$conn->close();
	
?>