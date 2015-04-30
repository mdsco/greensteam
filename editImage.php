<?php

	include 'connectToDb.php';

	//update image info
	$updateImageSql = "UPDATE Media SET content='$', active='$' WHERE t_id='$t_i'";

	$result = $conn->query($updateImageSql);


?>