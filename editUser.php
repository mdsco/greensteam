<?php

	include 'connectToDb.php';

	if($_POST['type'] === "teacher"){

		$t_i = $_POST['teach_i'];
		$t_f = $_POST['teach_f'];
		$t_l = $_POST['teach_l'];
		$t_u = $_POST['teach_u'];
		$t_p = $_POST['teach_p'];
		$t_g = $_POST['teach_g'];

		//update teacher info
		$updateTeachSql = "UPDATE Teacher SET t_lastName='$t_l', t_firstName='$t_f', t_username='$t_u', t_password='$t_p', grade='$t_g' WHERE t_id='$t_i'";

		$result = $conn->query($updateTeachSql);

		//update passwords of all students if teacher's username changes
		$updateStudPassSql = "UPDATE Student SET s_password='$t_u' WHERE teacher='$t_i'";

		$result = $conn->query($updateStudPassSql);

		echo "Teacher '" . $t_f . "' Updated";

	} elseif($_POST['type'] === "student"){//$_POST['type'] === "student"){
		
		
		$si = $_POST['student_i'];
		$sn = $_POST['student_n'];
		$su = $_POST['student_u'];
		$st = $_POST['student_t'];

		$sp = "";
		$sg = "";


		//get password and grade info to update the students record based on teacher change
		$passSql = "SELECT * FROM Teacher WHERE t_id = '$st'";

		$result = $conn->query($passSql);
		$row = $result->fetch_assoc();
		
		if ($result->num_rows == 1){
			$sp = $row["t_username"];
			$sg = $row["grade"];
		}

		//update student info
		$updateTeachSql = "UPDATE Student SET s_name='$sn', s_username='$su', s_password='$sp', grade='$sg', teacher='$st' WHERE s_id='$si'";

		$result = $conn->query($updateTeachSql);

		if ($result){
			echo "Student '" . $sn . "' Updated";
		}
	}
	
	$conn->close();
	
?>