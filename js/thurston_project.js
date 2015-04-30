$(document).ready(function(){

	var teachers;
	var students;
	var loginTeach;


	//header navigation scroll functions
	$("#nav5").click(function(){
			$('html, body').animate({
			scrollTop: $("#fifth_graders").offset().top
		}, 1000);
	});

	$("#nav4").click(function(){
			$('html, body').animate({
			scrollTop: $("#fourth_graders").offset().top
		}, 1000);
	});

	$("#nav3").click(function(){
			$('html, body').animate({
			scrollTop: $("#third_graders").offset().top
		}, 700);
	});

	$("#nav2").click(function(){
			$('html, body').animate({
			scrollTop: $("#second_graders").offset().top
		}, 1000);
	});

	$("#nav1").click(function(){
			$('html, body').animate({
			scrollTop: $("#first_graders").offset().top
		}, 1000);
	});

	$("#navK").click(function(){
			$('html, body').animate({
			scrollTop: $("#kindergarteners").offset().top
		}, 1000);
	});

	$("#navP").click(function(){
			$('html, body').animate({
			scrollTop: $("#pre-schoolers").offset().top
		}, 1000);
	});

	$(".button").click(function(){
			$('html, body').animate({
			scrollTop: $("#introduction_section").offset().top
		}, 1000);
	});

	
	//Set page header hiding settings
	$("div.navbar-fixed-top").autoHidingNavbar({
		'disableAutohide': false,
		'showOnBottom': false,
		'showOnUpscroll': false,
		'hideOffset': 'auto',
		'animationDuration': 200
	});
	
	//show scroll bar on page load
	$("#navT").mouseenter(function() {
	    $('.navbar-fixed-top').autoHidingNavbar('show');
  	});

	//show scroll bar when mouse moves within 40px of the window top
  	$(document).mousemove(function(e){
      	if((e.pageY - $(window).scrollTop()) < 20){
      		$('.navbar-fixed-top').autoHidingNavbar('show');
   		}
   	});
  	//show scroll bar when mouse moves away from 40px of the window top
   	$(document).mousemove(function(e){
   		if($(window).scrollTop() > 100){
	      	if((e.pageY - $(window).scrollTop()) > 20){
	      		$('.navbar-fixed-top').autoHidingNavbar('hide');
	   		}
   		}
   	});

   	//show text elements in intro section when scrolling down into section 
   	//for first time - animated to fade in 
   	$(window).scroll(function(){
		var e = window.pageYOffset;
		var h2_1 = $("#main_h2").offset().top;
		var t1 = $("#intro_table_1").offset().top;
		var h2_2 = $("#sub_h2").offset().top;
		var t2 = $("#intro_table_2").offset().top;

		//animate first header 
		if(e >= (h2_1/3)){
			$("#main_h2").animate({opacity: '1.0'});
		}

		//animate first text body
		if(e >= (t1/2)){
			$("#intro_table_1").animate({opacity: '1.0'});
		}

		//animate second header
		if(e >= h2_2/1.8){
			$("#sub_h2").animate({opacity: '1.0'});
		}

		//animate
		if(e >= (t2/1.8)){
			$("#intro_table_2").animate({opacity: '1.0'});
		}
		
	});

   	//open admin panel overlay and populate with html from file
	$("#admin_login").click(function(){

		$("#admin_panel").load("admin_panel.html", function(){

			//$("#logoutDiv").hide();
			$("#menuItems").hide();
			
			var menuDefault = "<option value='CT' selected>Choose Teacher</option>";
			$("#edit_teacher_sel").append(menuDefault);
			$("#add_teacher_val").append(menuDefault);
			$("#edit_s_teacher_sel").append(menuDefault);

			
			
			//place all teacher names in drop down select in edit user option 
			$.post("teacherNames.php", function(data){


				teachers = jQuery.parseJSON(data);

			    for(var i in teachers){
			    	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_lastName + ", " + teachers[i].t_firstName + "</option>";
			    	$("#edit_teacher_sel").append(opt);
			    	$("#add_teacher_val").append(opt);
			    	$("#edit_s_teacher_sel").append(opt);
			    	$("#edit_s_change_t_sel").append(opt);
			    }

			});

		});

		$("#overlay").fadeIn(300);
		$("#admin_panel").fadeIn(300);
	});


	$("#teacher_login").click(function(){
		$("#admin_panel").load("teacher_panel.html", function(){


			//$("#logoutDiv").hide();
			$("#menuItems").hide();
			/*
			var menuDefault = "<option value='CT' selected>Choose Teacher</option>";
			$("#edit_teacher_sel").append(menuDefault);
			$("#add_teacher_val").append(menuDefault);
			$("#edit_s_teacher_sel").append(menuDefault);

			
			
			//place all teacher names in drop down select in edit user option 
			$.post("teacherNames.php", function(data){

				teachers = jQuery.parseJSON(data);

			    for(var i in teachers){
			    	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_name + "</option>";
			    	$("#edit_teacher_sel").append(opt);
			    	$("#add_teacher_val").append(opt);
			    	$("#edit_s_teacher_sel").append(opt);
			    	$("#edit_s_change_t_sel").append(opt);
			    }

			});
			*/

		});

		$("#overlay").fadeIn(300);
		$("#admin_panel").fadeIn(300);
	});

	/*/Do I need this?
	$("#admin_panel").on('load', '#add_new_user', function(){
		$("#add_new_user ~ .section_body").slideToggle(200);
	})*/

	//slide "Add User" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#add_new_user', function(){
		$("#add_new_user +  .section_body").slideToggle(200);
	});

	//slide "Edit Teacher" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#edit_teacher', function(){
		$("#edit_teacher + .section_body").slideToggle(200);
	});

	//slide "Edit Student" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#edit_student', function(){
		$("#edit_student + .section_body").slideToggle(200);
	});

	//slide "Class Info" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#class_info', function(){
		$("#class_info + .section_body").slideToggle(200);
	});

	//slide "Edit User" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#add_images', function(){
		$("#add_images + .section_body").slideToggle(200);
	});

	//slide "Edit User" panel up or down (toggle) when clicking on its header
	$("#admin_panel").on('click', '#edit_images', function(){
		$("#edit_images + .section_body").slideToggle(200);
	});


	//expand and collapse admin panel options
	$("#admin_panel").on('click', '#expand', function(){
		$(".section_body").slideDown(200);
	});

	$("#admin_panel").on('click', '#collapse', function(){
		$(".section_body").slideUp(200);
	});



	//fade out admin panel/overlay by clicking on overlay outside panel
	$("#overlay").click(function(){
		$("#admin_panel").empty();
		$("#overlay").fadeOut(300);
		$("#admin_panel").fadeOut(300);
	});

	$("#admin_panel").on('click', '#close_display', function(){
		$("#admin_panel").empty();
		$("#overlay").fadeOut(300);
		$("#admin_panel").fadeOut(300);
	});
	

	/*$("#add_student").click(function(){
		$("#add_name").slideUp();
	});*/

	//change "Add User" panel based on user type selected
	//to show relevent fields for that user type
	$("#admin_panel").on('click', '#add_student', function(){
		//$("#nameField").removeAttr("disabled");
		$("#firstNameField").removeAttr("disabled");
		$("#lastNameField").removeAttr("disabled");
		$("#userField").removeAttr("disabled");
		$("#passwordField").removeAttr("disabled");
		$("#add_grade_val").removeAttr("disabled");
		$("#add_teacher_val").removeAttr("disabled");
		$("#addSubmit").removeAttr("disabled");
		$("#add_last_name").slideUp(200);
		$("#add_pass").slideUp(200);
		$("#add_stud_teacher").slideDown(200);
	});

	$("#admin_panel").on('click', '#add_teacher', function(){
		//$("#nameField").removeAttr("disabled");
		$("#firstNameField").removeAttr("disabled");
		$("#lastNameField").removeAttr("disabled");
		$("#userField").removeAttr("disabled");
		$("#passwordField").removeAttr("disabled");
		$("#add_grade_val").removeAttr("disabled");
		$("#add_teacher_val").removeAttr("disabled");
		$("#addSubmit").removeAttr("disabled");
		//$("#add_name").slideDown(200);
		$("#add_first_name").slideDown(200);
		$("#add_last_name").slideDown(200);
		$("#add_user").slideDown(200);
		$("#add_pass").slideDown(200);
		$("#add_grade").slideDown(200);
		$("#add_stud_teacher").slideUp(200);
	});


	//add a user to teacher or student databases based on choice selected
	//in form.  Returned comment is placed on the form
	$("#admin_panel").on('click', '#add_submit', function(){

		$("#msgLoc").html("");
		$entered = 0;

		//get input username and password, etc
		//var name = $("#nameField").val();
		var fname = $("#firstNameField").val();
		var lname = $("#lastNameField").val();
		var user = $("#userField").val();
		var pass = $("#passwordField").val();
		var grade = $("#add_grade_val").val();
		var teachVal = $("#add_teacher_val").val();
		//var teachVal = $("#add_teacher_val :selected").text();
		var student = "student";
		var teacher = "teacher";


		//add new student (This will be changed probably since student usernames will be automatically generated)
		if($("#add_student").is(":checked")){

			if(fname == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a first name</h4><span>");
			}if(user == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a username</h4><span>");
			}if(grade == "CG"){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must select a grade</h4><span>");
			}if(teachVal == "Choose Teacher"){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must select a teacher</h4><span>");
			}
			else if(fname != "" && user != "" && grade != "CG" && teachVal  != "CT"){
				$.post("addUser.php", {type:student, student_f:fname, student_u:user, student_g:grade, student_t:teachVal}, function(data){
					$("#msgLoc").append("<span><h4 style='color:green; font-size: 14px;'>" + data + "</h4><span><br>");
				});
				$entered = 1;
			}
			$("#msgLoc").fadeIn(200);
			$("#msgLoc").delay(2000).fadeOut(200);
		}
		//add new teacher
		else if($("#add_teacher").is(":checked")){



			if(fname == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a first name</h4><span>");
			}if(lname == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a last name</h4><span>");
			}if(user == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a username</h4><span>");
			}if(pass == ""){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a password</h4><span>");
			}if(grade == "CG"){
				$("#msgLoc").append("<span><h4 id='signInErrMSG'>- You must select a grade</h4><span>");
			}
			else if(fname != "" && lname != ""  && user != "" && pass != "" && grade != "CG"){	
				//ajax post request to add data (sent as json object)
				$.post("addUser.php", {type:teacher, teach_f:fname, teach_l:lname, teach_u:user, teach_p:pass, teach_g:grade}, function(data){		
					//place response on form page 
					$("#msgLoc").append("<span><h4 style='color:green; font-size: 14px;'>" + data + "</h4><span>");
				});
				$entered = 1;

				//place all teacher names in drop down select in edit user option 
				$.post("teacherNames.php", function(data){
					
					teachers = jQuery.parseJSON(data);

					var menuDefault = "<option value='CT' selected>Choose Teacher</option>";
					$("#edit_teacher_sel").append(menuDefault);
					$("#add_teacher_val").append(menuDefault);
					$("#edit_s_teacher_sel").append(menuDefault);

				    for(var i in teachers){
				    	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_lastName + ", " + teachers[i].t_firstName + "</option>";
				    	$("#edit_teacher_sel").append(opt);
				    	$("#add_teacher_val").append(opt);
				    	$("#edit_s_teacher_sel").append(opt);
				    	$("#edit_s_change_t_sel").append(opt);
				    }
				});
			}
			
			$("#msgLoc").fadeIn(200);
			$("#msgLoc").delay(2000).fadeOut(200);

			//clear current data in select teacher drop down menu in edit user option
			$("#edit_teacher_sel").html("").delay(500);
			$("#add_teacher_val").html("").delay(500);
			$("#edit_s_teacher_sel").html("").delay(500);

			// //place all teacher names in drop down select in edit user option 
			// $.post("teacherNames.php", function(data){
				
			// 	teachers = jQuery.parseJSON(data);

			// 	var menuDefault = "<option value='CT' selected>Choose Teacher</option>";
			// 	$("#edit_teacher_sel").append(menuDefault);
			// 	$("#add_teacher_val").append(menuDefault);
			// 	$("#edit_s_teacher_sel").append(menuDefault);

			//     for(var i in teachers){
			//     	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_lastName + ", " + teachers[i].t_firstName + "</option>";
			//     	$("#edit_teacher_sel").append(opt);
			//     	$("#add_teacher_val").append(opt);
			//     	$("#edit_s_teacher_sel").append(opt);
			//     	$("#edit_s_change_t_sel").append(opt);
			//     }
			// });
		}

		if($entered == 1){
			$("#firstNameField").attr('disabled', 'true');
			$("#lastNameField").attr('disabled', 'true');
			$("#userField").attr('disabled', 'true');
			$("#passwordField").attr('disabled', 'true');
			$("#add_grade_val").attr('disabled', 'true');
			$("#add_teacher_val").attr('disabled', 'true');
			$("#addSubmit").attr('disabled', 'true');
		}
	});





	//when a user selects a teachers name from the drop down list in 'Edit User'
	//the other fields populate with the teachers data and become active fr changes
	//to be made
	$("#admin_panel").on('change', '#edit_teacher_sel', function() {
		var va = "";
		
		$("#edit_teacher_sel option:selected").each(function(){
			va += $( this ).val();
		});

		for(var i = 0; i < teachers.length; i++){
			if(teachers[i].t_id == va){
				$("#editTLName").removeAttr("disabled");
				$("#editTLName").val(teachers[i].t_lastName);
				$("#editTFName").removeAttr("disabled");
				$("#editTFName").val(teachers[i].t_firstName);

				$("#editTUser").removeAttr("disabled");
				$("#editTUser").val(teachers[i].t_username);
				$("#editTPass").removeAttr("disabled");
				$("#editTPass").val(teachers[i].t_password);
				$("#edit_t_grade_val").removeAttr("disabled");
				//$("#edit_t_grade_val option").removeAttr("selected");
				$("#editTSubmit").removeAttr("disabled");

				$("#edit_t_grade_val option").each(function(){
					$(this).removeAttr("selected");
				    if ($(this).val() === teachers[i].grade)
				       $(this).attr("selected","selected");
				});
				
			}
		}

	}).trigger("change");












	//Update info in teacher database based on user changes in Edit Teacher Form, Updates teacher
	//select drop down on submission
	$("#admin_panel").on('click', '#editTSubmit', function(){

		$("#editTMsgLoc").html("");
		$entered = 0;

		//get input username and password, etc
		var tId = $("#edit_teacher_sel").val();
		var tLName = $("#editTLName").val();
		var tFName = $("#editTFName").val();
		var tUser= $("#editTUser").val();
		var tPass = $("#editTPass").val();
		var tGrade= $("#edit_t_grade_val").val();
		var teacher = "teacher";

		/*get teacher id based here*/

		if(tLName == ""){
			$("#editTMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a name</h4><span>");
		}if(tFName == ""){
			$("#editTMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a name</h4><span>");
		}if(tUser== ""){
			$("#editTMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a username</h4><span>");
		}if(tPass == ""){
			$("#editTMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a password</h4><span>");
		}if(tGrade== "CG"){
			$("#editTMsgLoc").append("<span><h4 id='signInErrMSG'>- You must select a grade</h4><span>");
		}

		//get admin access selection
		//if($("#admin_yes").is(":checked")){var adm_acc = "yes";}
		//else{ var adm_acc = "no"; }

		else if(tLName != "" && tFName != "" && tUser!= "" && tPass != "" && tGrade!= "CG"){
		//ajax post request to add data (sent as json object)
			$.post("editUser.php", {type:teacher, teach_i:tId, teach_l:tLName, teach_f:tFName, teach_u:tUser, teach_p:tPass, teach_g:tGrade}, function(data){		
				//place response on form page 
				$("#editTMsgLoc").append("<span><h4 style='color:green; font-size: 14px;'>" + data + "</h4><span>");
			});
			$entered = 1;
		}


		$("#editTMsgLoc").fadeIn(200);
		$("#editTMsgLoc").delay(2000).fadeOut(200);

		//clear current data in select teacher drop down menu in edit user option
		$("#edit_teacher_sel").html("").delay(500);
		$("#add_teacher_val").html("").delay(500);
		$("#edit_s_teacher_sel").html("").delay(500);
		$("#edit_s_change_t_sel").html("").delay(500);

		//place all teacher names in drop down select in edit user option 
		$.post("teacherNames.php", function(data){

			teachers = jQuery.parseJSON(data);

			var menuDefault = "<option value='CT' selected>Choose Teacher</option>";
			$("#edit_teacher_sel").append(menuDefault);
			$("#add_teacher_val").append(menuDefault);
			$("#edit_s_teacher_sel").append(menuDefault);


		    for(var i in teachers){
		    	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_lastName + ", " + teachers[i].t_firstName + "</option>";
		    	$("#edit_teacher_sel").append(opt);
		    	$("#add_teacher_val").append(opt);
		    	$("#edit_s_teacher_sel").append(opt);
		    	$("#edit_s_change_t_sel").append(opt);	
		    }
		});

		if($entered == 1){
			$("#editTLName").attr('disabled', 'true');
			$("#editTFName").attr('disabled', 'true');
			$("#editTUser").attr('disabled', 'true');
			$("#editTPass").attr('disabled', 'true');
			$("#edit_t_grade_val").attr('disabled', 'true');
			$("#editTSubmit").attr('disabled', 'true');
		}
	});







	//when a user selects a teachers name from the drop down list in 'Edit User'
	//the other fields populate with the teachers data and become active fr changes
	//to be made
	$("#admin_panel").on('change', '#edit_s_teacher_sel', function() {
		var teachID = "";
		$("#edit_s_name_sel").html("");
		//var sTeachVal = "";
		
		$("#edit_s_teacher_sel option:selected").each(function(){
			teachID += $( this ).val();
			//sTeachVal = $("#edit_s_teacher_sel :selected").text();
		});


		for(var i = 0; i < teachers.length; i++){
			if(teachers[i].t_id == teachID){

				$("#edit_s_name_sel").removeAttr("disabled");

				//place all teacher names in drop down select in edit user option 
				$.post("studentNames.php", {teacher:teachID}, function(data){

					students = jQuery.parseJSON(data);

					var menuDefault = "<option value='CT' selected>Choose Student</option>";
					$("#edit_s_name_sel").append(menuDefault);


				    for(var i in students){
				    	var opt = "<option value=" + students[i].s_id + ">" + students[i].s_name + "</option>";
				    	$("#edit_s_name_sel").append(opt);	
				    }
				});
			}
		}

	}).trigger("change");






	//when a user selects a teachers name from the drop down list in 'Edit User'
	//the other fields populate with the teachers data and become active fr changes
	//to be made
	$("#admin_panel").on('change', '#edit_s_name_sel', function() {
		var va = "";
		
		$("#edit_s_name_sel option:selected").each(function(){
			va += $( this ).val();
		});


		for(var i = 0; i < students.length; i++){
			if(students[i].s_id == va){
				$("#editSName").removeAttr("disabled");
				$("#editSName").val(students[i].s_name);
				$("#editSUser").removeAttr("disabled");
				$("#editSUser").val(students[i].s_username);
				$("#editSPass").removeAttr("disabled");
				$("#editSPass").val(students[i].s_password);
				$("#edit_s_grade_val").removeAttr("disabled");
				$("#edit_s_change_t_sel").removeAttr("disabled");
				//$("#edit_t_grade_val option").removeAttr("selected");
				$("#editSSubmit").removeAttr("disabled");

				$("#edit_s_grade_val option").each(function(){
					$(this).removeAttr("selected");
				    if ($(this).val() === students[i].grade)
				       $(this).attr("selected","selected");
				});

				$("#edit_s_change_t_sel option").each(function(){
					$(this).removeAttr("selected");
				    if ($(this).val() === students[i].teacher)
				       $(this).attr("selected","selected");
				});
				
			}
		}
	}).trigger("change");





	//Update info in teacher database based on user changes in Edit Teacher Form, Updates teacher
	//select drop down on submission
	$("#admin_panel").on('click', '#editSSubmit', function(){

		$("#editSMsgLoc").fadeOut(2);
		$("#editSMsgLoc").html("");
		$entered = 0;

		//get input username and password, etc
		var sId = $("#edit_s_name_sel").val();
		var sName = $("#editSName").val();
		var sUser= $("#editSUser").val();
		var sPass = $("#editSPass").val();
		var sGrade= $("#edit_s_grade_val").val();
		//var sId = $("#edit_s_name_sel").val();
		//var sTId = $("edit_s_change_t_sel").val();

		var sTId = "";
		
		$("#edit_s_change_t_sel option:selected").each(function(){
			sTId += $(this).val();
		});

		var teacher = "student";

		if(sName == ""){
			$("#editSMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a name</h4><span>");
		}if(sUser== ""){
			$("#editSMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a username</h4><span>");
		}if(sPass == ""){
			$("#editSMsgLoc").append("<span><h4 id='signInErrMSG'>- You must enter a password</h4><span>");
		}if(sGrade== "CG"){
			$("#editSMsgLoc").append("<span><h4 id='signInErrMSG'>- You must select a grade</h4><span>");
		}
		

		else if(sName != "" && sUser!= "" && sPass != "" && sGrade!= "CG"){
		//ajax post request to add data (sent as json object)
			$.post("editUser.php", {type:teacher, student_i:sId, student_n:sName, student_u:sUser, student_t:sTId}, function(data){		
				//place response on form page 
				$("#editSMsgLoc").append("<span><h4 style='color:green; font-size: 14px;'>" + data + "</h4><span>");
			});
			$entered = 1;
		}

		
		$("#editSMsgLoc").fadeIn(200);
		$("#editSMsgLoc").delay(4000).fadeOut(200);


		//place all student names in drop down select in edit student option 
		$.post("studentNames.php", function(data){

			students = jQuery.parseJSON(data);

			var menuDefault = "<option value='CT' selected>Choose Student</option>";
			$("#edit_s_name_sel").append(menuDefault);


		    for(var i in teachers){
		    	var opt = "<option value=" + teachers[i].t_id + ">" + teachers[i].t_lastName + ", " + teachers[i].t_firstName + "</option>";
		    	$("#edit_s_name_sel").append(opt);
		    }
		});

		if($entered == 1){
			$("#edit_s_name_sel").attr('disabled', 'true');
			$("#editSName").attr('disabled', 'true');
			$("#editSUser").attr('disabled', 'true');
			$("#edit_s_change_t_sel").attr('disabled', 'true');
			$("#editSSubmit").attr('disabled', 'true');
		}
		
	});









	//add a user to teacher or student databases based on choice selected
	//in form.  Returned comment is placed on the form
	$("#admin_panel").on('click', '#display_submit', function(){

		$("#image_section").slideUp(200).delay(200);
		$("#image_section").html("");
		$("#image_section").slideDown(200);


		//get grade value, and possibly teacher value
		var gradeVal = $("#img_grade_val").val();

		//var teacher = $("#img_grade_val").val();

		//get image data and file locations from database
		$.post("getImages.php", {'grade':gradeVal}, function(data){
			
			var images = jQuery.parseJSON(data);

			var sect = "";
			//create tags and insert images into html with returned image data
		    for(var i in images){
		    	if(sect != images[i].grade){

		    		switch (images[i].grade) {
					    case "5":
					        secHead = "Fifth Grade";
					        break;
					    case "4":
					        secHead = "Fourth Grade";
					        break;
					    case "3":
					        secHead = "Third Grade";
					        break;
					    case "2":
					        secHead = "Second Grade";
					        break;
					    case "1":
					        secHead = "First Grade";
					        break;
					    case "0":
					        secHead = "Kindergarten";
					        break;
					    case "P":
					        secHead = "Pre-School";
					        break;
					}

		    		var secHead = "<hr><div class='row'><h4 class='col-md-3'>" + secHead + "</span></h4>";
		    		$("#image_section").append(secHead);
		    		sect = images[i].grade;
		    	}

		    	if(images[i].active != 1){
		    		var ck = "checked='checked'";
		    	} else {
		    		var ck = "";

		    	}

		    	var temp = images[i].content;

		    	var addImg = '<li><img id="1" src=' + images[i].media_ref + ' alt="img">' 
		    		+ '<br><div class="row"><span class="col-md-6"><input type="checkbox" name="delete"/>Delete Img</span>' 
		    		+ '<span class="col-md-6"><input type="checkbox" name="hide"' + ck + '/>Hide Img</span></div>' 
		    		+ '<div class="row"><span class="col-md-12"><input type="text" name="delete" size="35" value="'  + temp + '"/></span></div></li>';


		    	$("#image_section").append(addImg);
		    }
		});
	});

	
	$("#admin_panel").on('click', '#adminLoginSubmit', function(){
		
		var admin_user = $("#adminUser").val();
		var admin_pass = $("#adminPass").val();
		var admin_flag = 1;
		
		$.post("login.php", {username:admin_user, password:admin_pass, admin:admin_flag}, function(data){
			

			person = data;

			
			$("#sign_in_msg").css("opacity", "0");
			$("#sign_in_msg").html(person.msg);
			$("#sign_in_msg").delay().animate({opacity: '1.0'});
			$("#sign_in_msg").delay(3000).animate({opacity: '0.0'});

			if(person.name != ""){
				$("#adminLogin").delay(1000).fadeOut(200).slideUp();
				$("#menuItems").delay(1500).fadeIn(300);
				$("#adminLogoutSubmit").delay(1500).animate({opacity: '1.0'});
			}
		}, "json");
	}); 

	$("#admin_panel").on('click', '#adminLogoutSubmit', function(){
		
			$("#adminUser").val("");
			$("#adminPass").val("");
			
			$("#sign_in_msg").css("opacity", "0");
			$("#sign_in_msg").html("You are now logged out");
			$("#sign_in_msg").delay(400).animate({opacity: '1.0'});
			$("#sign_in_msg").delay(1700).animate({opacity: '0.0'});
			

			$("#menuItems").delay(500).fadeOut(300);
			$("#adminLogoutSubmit").delay(500).animate({opacity: '0.0'});
			$("#adminLogin").delay(900).slideDown().fadeIn(200);

	});

	
	$("#admin_panel").on('click', '#teachLoginSubmit', function(){
		

		var teach_user = $("#teachUser").val();
		var teach_pass = $("#teachPass").val();
		var teach_flag = 0;

		$.post("login.php", {username:teach_user, password:teach_pass, admin:teach_flag}, function(data){
			

			loginTeach = data;
			var person = data


			$("#sign_in_msg").css("opacity", "0");
			$("#sign_in_msg").html(person.msg);
			$("#sign_in_msg").delay().animate({opacity: '1.0'});
			$("#sign_in_msg").delay(3000).animate({opacity: '0.0'});


			if(person.name != ""){
				$("#teachLogin").delay(1000).fadeOut(200).slideUp();
				$("#menuItems").delay(1500).fadeIn(300);
				$("#teachLogoutSubmit").delay(1500).animate({opacity: '1.0'});
			}

			$.post("getPosts.php", {grade:loginTeach.class}, function(data){

				$("#postsList").html("");

				var myPosts = jQuery.parseJSON(data); 


				if(myPosts.length > 0){


					$("#postsList").append("<table id='postsTable' class='table table-striped'><table id='postsTable' class='table table-striped'><thead><tr><th>Name</th><th>Content</th><th>Username</th><th>Date Posted</th></tr>"
							+ "</thead><tbody></tbody><tfoot><tr><th><strong>TOTAL</strong></th><th></th><th></th><th></th></tr></tfoot></table>");

					for(var i = 0; i < myPosts.length; i++){
						$("#postsTable tbody").append("<tr><td>" + myPosts[i].s_name + "</td>"
												   + "<td tabindex='1'>" + myPosts[i].content + "</td>"
												   + "<td>" + myPosts[i].s_username + "</td>"
												   + "<td>" + myPosts[i].date_posted + "</td>"
												   + "</tr>");
					}
				}
				else {
					$("#postsList").append("<p>No posts have been added yet.</p>");
				}
			});

		}, "json");
	}); 


	$("#admin_panel").on('click', '#teachLogoutSubmit', function(){
		
		$("#teachUser").val("");
		$("#teachPass").val("");
		
		$("#sign_in_msg").css("opacity", "0");
		$("#sign_in_msg").html("You are now logged out");
		$("#sign_in_msg").delay(400).animate({opacity: '1.0'});
		$("#sign_in_msg").delay(1700).animate({opacity: '0.0'});
		

		$("#menuItems").delay(500).fadeOut(300);
		$("#teachLogoutSubmit").delay(500).animate({opacity: '0.0'});
		$("#teachLogin").delay(900).slideDown().fadeIn(200);

	});

});