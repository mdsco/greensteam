<?php
	
	function makeChartDiv($id){
		echo "<div class=\"chartContainer\" id=\"$id\">
					<div class=\"subchart\" id=\"t$id\"></div>
			  		<div class=\"subchart\" id=\"$id.1\"></div>
			  		<div class=\"subchart\" id=\"$id.2\"></div>
			  		<div class=\"subchart\" id=\"$id.3\"></div>
			  		<div class=\"subchart\" id=\"$id.4\"></div>
			  		<div class=\"subchart\" id=\"$id.5\"></div>
			   </div>";
	}

/*
	@params: 
		$teacher - name of teacher's class whos graph will be generated. This is used to
			query the database, and to make the (tentative) title. Note the title currently assumes
			title "Ms." for the teacher, and will need some way to place correct title. 
		$location - container div where graphs will be placed	
*/	

function makeChart($teacher, $location){
	//retrieve data from db block
	//$db = mysql_connect("localhost", "root", "123pass");
	//$db = mysql_connect("localhost", "root", "Letmein2MySQL");

	if(gethostname() === "GoOutside"){
		$server = 'localhost';
		$loginID = 'root';
		$pword = 'Letmein2MySQL';
		$dbase = 'GreenSteam';
	} else { // Server connect variables for db2 server
		$server = 'localhost';
		$loginID = '201501_481_04'; 
		$pword = 'sd0el7PDN';
		$dbase = 'db201501_481_g04';
	}

	$db = mysql_connect($server, $loginID, $pword);

	if (!$db) {
	     print "Error - Could not connect to MySQL";
	     exit;
	}
	
	//connect to the database
	$er = mysql_select_db($dbase);
	//$er = mysql_select_db("GreenSteam");
	if (!$er) {
	    print "Error - Could not select the greensteam database";
	    exit;
    }

		$ph_avg = 0; 	//ph
   	 	$do_avg = 0; 	//percent
   	 	$n_avg = 0; 	//mg per liter
   	 	$phos_avg = 0; 	//ppm
   	 	$temp_avg = 0; //Celcius
   	 	
		//loop that selects $datatype, makes sums/averages
		//for (# of types of data)
		for ($i=0;$i<=4;$i++)
		{
			switch ($i){
				case 0: $datatype = "ph"; 
						break;
				case 1: $datatype = "do"; 
						break;
				case 2: $datatype = "ni"; 
						break;
				case 3: $datatype = "pho"; 
						break;
				case 4: $datatype = "te"; 
						break;
				default: print "Error in getTable datatype select loop"; 
						exit;
		}
				
		$sql="SELECT data_value FROM Water_Data WHERE data_type = '$datatype' AND teacher_name = '$teacher';";
	
		$result = mysql_query($sql);
  	
  		if (!$result) {
    		print "Error - the query could not be executed";
    		$error = mysql_error();
    		print "<p>" . $error . "</p>";
    		exit;
		}

		$num_rows = mysql_num_rows($result);

		$temp = 0;
		for ($row_num = 0; $row_num < $num_rows; $row_num++) 
		{
			$row = mysql_fetch_array($result);
			$values = array_values($row);
    		$temp =  $temp + htmlspecialchars($values[1]);
		}
		
		$temp = $temp/$num_rows;
		switch ($i) {
			case 0: $ph_avg = round($temp, 2);
					break;
			case 1: $do_avg = round($temp, 2);
					break;
			case 2: $n_avg = round($temp, 2);
					break;
			case 3: $phos_avg = round($temp, 2);
					break;
			case 4: $temp_avg = round($temp, 2);
					break;
			default: print "Error in getTable avg set switch"; 
					exit;
			}
   	 	
   	 	}
   	 	
	   	for ($i=1;$i<=5;$i++)
	   	{
	   	 	switch ($i) {
				case 1: $using = $ph_avg;
						$title = "pH Level";
						$label = "ph";
						$color = "#2c8437";
						break;
				case 2: $using = $do_avg;
						$title = "Dissolved Oxygen";
						$label = "dissolved oxygen %";
						$color = "#6d4d90";
						break;
				case 3: $using = $n_avg;
						$title = "Nitrogen";
						$label = "nitrates (mg/liter)";
						$color = "#c32e27";
						break;
				case 4: $using = $phos_avg;
						$title = "Phosphorous";
						$label = "phosphorous (ppm)";
						$color = "orange"; //#e2e140
						break;
				case 5: $using = $temp_avg;
						$title = "Temperature";
						$label = "degrees celcius";
						$color = "#134c9b";
						break;
				default: print "Error in getTable avg set switch"; 
						exit;
		}
		
   	 	print "<script type=\"text/javascript\">
		  			var $location$i = new CanvasJS.Chart(\"$location.$i\", {
		  				title:{ text: \"$title\"},
		      			data: 
		      			[{type: \"column\",
		      		   		dataPoints: 
		      		   	[{ label: \"$label\", y: $using, color: \"$color\" }]}]});
		      		   	
					$location$i.render();
			   </script>";
  	}

 	print "<script>$(\"#t$location\").html(\"<h2>Data collected by TEACHER's class</h2>\");
 		$(\"#t$location\").css(\"text-align\", \"center\");</script>";
}


?>