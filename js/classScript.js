$(document).ready(function(){

	//var posts;
	var person = "";
	var user;
	var teacher;
	var pass;

	var gradeVal = $("body").attr('id');
	gradeVal = gradeVal + "";
	
	$( window ).load(function() {



	  $(".well").hide();
	  $("#logoutDiv").hide();
	  // if (gradeVal != "4")
	  // 	$("#graphDisplay").hide();



	  $.post("getPosts.php", {'grade':gradeVal}, function(data){

	  		var posts = jQuery.parseJSON(data);

	  		for (var i = 0; i < posts.length; i++) {
	  			if(posts[i].active == 1){
		  			$("#comments").after("<!-- Comment -->" + 
			            "<div class='media'>" +
			                "<a class='pull-left' href='#''>" +
			                    "<img class='media-object' src='http://placehold.it/64x64' alt=''>" +
			                "</a><div class='media-body'>" +
			                    "<h4 class='media-heading'>User: " + posts[i].s_username +
			                        "<small>&nbsp;&nbsp;Posted on " + posts[i].date_posted + "</small>" +
			                    "</h4>" + posts[i].content + 
			                "</div>" +
			            "</div>");
	  			}
	  		};  

	  });

	});

	$("#loginSubmit").click(function(){

		user = $("#user").val();
		pass = $("#pass").val();

		$.post("login.php", {username:user, password:pass, grade:gradeVal}, function(data){

			//alert(data.msg + "  " + data.name + "  " + data.usertype + "   " + data.class);
			
			person = data;

			$("#sign_in_msg").html(person.msg);
			$("#sign_in_msg").fadeIn(10);
			$("#sign_in_msg").delay(4000).fadeOut(200);
			


			if(person.name != ""){

				$("#userComment").val("");
				$("#loggedOutCmt").hide();
				$(".well").delay(1200).slideDown(200);
				$("#sign_in_msg").delay(1200).slideUp(200);

				$("#welcomeMsg").html("Welcome, " + person.name + "! &nbsp;Remember to log out when you are done!")
				$("#logoutDiv").delay(1200).slideDown(200);
				$("#commentLogin").delay(1200).slideUp(200);
				if (gradeVal != "4")
					$("#dataInputDiv").hide();
			}
			
		}, "json");
	}); 

	$("#logoutSubmit").click(function(){

		$("#loggedOutCmt").html("You have been signed out!").delay(100).slideDown(200);

		$("#sign_in_msg").delay(1500).slideUp(200);
		$("#user").val("");
		$("#pass").val("");
		$("#logoutDiv").delay(1500).slideUp(200);

		$("#commentLogin").delay(1500).slideDown(200);
		$(".well").delay(2000).slideUp(200);
		

		person = "";
	});

	$("#commentSubmit").click(function(){

		var comment = $("#userComment").val();

		$.post("addPost.php", {'comment':comment, 'user':user, 'name':person.name, 'grade':person.class}, function(data){

			// alert(data);
			// $("#commentSubmit").before("<span style='color: red;'>" + data + "</span>");
			$("#cmtMsg").html(data);
			$("#cmtMsg").delay(200).fadeIn(200);
			$("#cmtMsg").delay(2000).fadeOut(200);

		});

		$.post("getPosts.php", {'grade':gradeVal}, function(data){

	  		var posts = jQuery.parseJSON(data);
	  		var i = posts.length - 1;

  			$("#comments").after("<!-- Comment -->" + 
            "<div class='media'>" +
                "<a class='pull-left' href='#''>" +
                    "<img class='media-object' src='http://placehold.it/64x64' alt=''>" +
                "</a><div class='media-body'>" +
                    "<h4 class='media-heading'>User: " + posts[i].s_username +
                        "<small>&nbsp;&nbsp;Posted on " + posts[i].date_posted + "</small>" +
                    "</h4>" + posts[i].content + 
                "</div>" +
            "</div>");
	    });
	});
	
	$("#dataSubmit").click(function(){
		
		//teacher name is grabbed from student's password.
		var teachUname = $("#pass").val();
		//alert(teachUname);
		//each data field user can input is passed
		var ph = $("#userDataPh").val();
		//alert(ph);
		var pho = $("#userDataPho").val();
		//alert(pho);
		var dox = $("#userDataDo").val();
		//alert(dox);
		var ni = $("#userDataNi").val();
		//alert(ni);
		var te = $("#userDataTe").val();
		//alert(te);
		
		//t_username, s_username, ph, pho, do, ni, and te fata are all sent. 
		$.post("dataEntry.php", {'teacher':teachUname, 'user':user, 'ph':ph, 'pho':pho, 'ni':ni, 'do':dox, 'te':te}, function(data){

			alert(data);

		});
	});

	$(function() {
        $('#slides').slidesjs({
          width: 800,//940,
          height: 450,//528,
          navigation: false
        });
    });

});