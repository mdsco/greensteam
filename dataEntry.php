<?php

		$reply = "";
		
		//All these varaibles must be included in the sent JSON string
		$user = $_POST['user']; 
		$teacher = $_POST['teacher']; //teacher is passed via student's password in login form
		
		$ph  = $_POST['ph']; 
		$do = $_POST['do']; 
		$pho = $_POST['pho'];
		$ni = $_POST['ni'];
		$te = $_POST['te'];


		include 'connectToDb.php';
		
		$str = "Data input for";
		
		$sql="SELECT * FROM Water_Data where s_username = '$user' AND data_type = 'ph'";
		$result01 = $conn->query($sql);
			if (mysqli_num_rows($result01) < 1 && $ph != "")
			{
				$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'ph', '$ph')";	
				/*if (*/$conn->query($sql);//)
				//{
					$result1 = true;
					//}
				//else
				//{
				//	$result1 = false;}
				
				$str = $str . " ph;";
			}
			else 
			{
				$result1 = true;
				$noinput1 = true;
			}
			//var_dump($result1);
		$sql="SELECT * FROM Water_Data where s_username = '$user' AND data_type = 'pho'";
		$result02 = $conn->query($sql);
			if (mysqli_num_rows($result02) < 1 && $pho != "")
			{
				$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'pho', '$pho')";	
				/*if (*/$conn->query($sql);//)
				//{
					$result2 = true;
				//}
				//else
				//{
				//	$result2 = false;
				//}
				
				$str = $str . " phosphorous;";
			}
			else 
			{
				$result2 = true;
				$noinput2 = true;
			}
			//var_dump($result2);
		$sql="SELECT * FROM Water_Data where s_username = '$user' AND data_type = 'ni'";
		$result03 = $conn->query($sql);
			if (mysqli_num_rows($result03) < 1 && $ni != "")
			{
				$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'ni', '$ni')";	
				/*if (*/$conn->query($sql);//)
				//{
					$result3 = true;
				//}
				//else
				//{
				//	$result3 = false;
				//}
				
				$str = $str . " nitrates;";
			}
			else 
			{
				$result3 = true;
				$noinput3 = true;
			}
			//var_dump($result3);
		$sql="SELECT * FROM Water_Data where s_username = '$user' AND data_type = 'do'";
		$result04 = $conn->query($sql);
			if (mysqli_num_rows($result04) < 1 && $do != "")
			{
				$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'do', '$do')";	
				/*if (*/$conn->query($sql);//)
				//{
					$result4 = true;
				//}
				//else
				//{
				//	$result4 = false;
				//}
				
				$str = $str . " dissolved oxygen;";
			}
			else 
			{
				$result4 = true;
				$noinput4 = true;
			}
			//var_dump($result4);
		$sql="SELECT * FROM Water_Data where s_username = '$user' AND data_type = 'te'";
		$result05 = $conn->query($sql);
			if (mysqli_num_rows($result05) < 1 && $te != "")
			{
				$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'te', '$te')";	
				/*if (*/$conn->query($sql);//)
				//{
					$result5 = true;
				//}
				//else
				//{
				//	$result5 = false;
				//}
				
				$str = $str . " temperature;";
			}
			else 
			{
				$result5 = true;
				$noinput5 = true;
			}
			//var_dump($result5);
		
		
		//The below ONLY inserts into the database. Does not check to see if student has existing data already.
		//Needs validation of correct kind of data, and that data does not already exist. 
		/*
		$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'ph', '$ph')";	
		$result1 = $conn->query($sql);
		
		$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'pho', '$pho')";	
		$result2 = $conn->query($sql);
		
		$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'ni', '$ni')";	
		$result3 = $conn->query($sql);
		
		$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'do', '$do')";	
		$result4 = $conn->query($sql);
		
		$sql="INSERT INTO Water_Data (s_username, teacher_name, data_type, data_value) VALUES ('$user', '$teacher', 'te', '$te')";	
		$result5 = $conn->query($sql);
		*/
		
		
		if ($noinput1 && $noinput2 && $noinput3 && $noinput4 && $noinput5)
		{
			$reply = "No data entered. You've already input your data!";
		}
		else if ($result1 && $result2 && $result3 && $result4 && $result5) 
		{

			$reply = $str;
		    // free result set 
		    //$result->free();
		}
		else { 
			$reply = "Something went wrong, please try again.";
		}

		$conn->close();

		echo $reply;
		
	//}	
	//return null;
	
?>