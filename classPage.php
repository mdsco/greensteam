<?php

    $classNum = $_GET['class'];
    $className = "";
    $call = true;

    // get class name as a string for the nav bar
    include 'classString.php';
    //get the image locations for images for the grade indicated by $classNum
    include 'getImages.php';
    include 'chart.php'; 

?>

<!DOCTYPE html>
<html lang="en">

<head>
  
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo $className ?></title>

    <!-- Bootstrap Core CSS -->
    <!--cdn version-->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <!--file version-->
    <!--link href="css/bootstrap.min.css" rel="stylesheet"-->

    <!-- Custom CSS -->
    <link href="css/blog-post.css" rel="stylesheet">

      <!-- CSS for slidesjs.com example -->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    
    <!-- SlidesJS Optional: If you'd like to use this design -->
    <link rel="stylesheet" href="css/slides.css">
    <!-- End CSS for slidesjs.com example -->


    <link rel="stylesheet" href="css/classStyle.css">

    <!-- <script src="canvasjs.min.js"></script> -->
    <script src="http://code.jquery.com/jquery-1.11.2.js"></script>
    <script type="text/javascript" src="js/canvasjs.min.js"></script>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body <?php echo "id=" . $classNum ?>>


    <!-- Header Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
       <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="Green Steam"/></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <!-- <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> -->
            <div class="collapse navbar-collapse" id="myNavBar">
              <ul class="nav navbar-nav navbar-right">
                <li id="nav5" class="nav_item"><a href="classPage.php?class=5">5th Grade</a></li>
                <li id="nav4" class="nav_item"><a href="classPage.php?class=4">4th Grade</a></li>
                <li id="nav3" class="nav_item"><a href="classPage.php?class=3">3rd Grade</a></li>
                <li id="nav2" class="nav_item"><a href="classPage.php?class=2">2nd Grade</a></li>
                <li id="nav1" class="nav_item"><a href="classPage.php?class=1">1st Grade</a></li>
                <li id="navK" class="nav_item"><a href="classPage.php?class=0">Kindergarten</a></li>
                <li id="navP" class="nav_item"><a href="classPage.php?class=P">Pre-School</a></li>
              </ul>
            </div>

            <!-- /.navbar-collapse -->
        </div>
    </nav>



    <!-- Page Content -->
    <div class="container">

        <!-- Image slider area -->
        <div class="row">

            <div class="row"></div>
    
            <hr>
                <!--Grade Header-->
                <?php echo "<h2 class='text-center' style='color: black;'>" . $className . "</h2>"?>
            <hr>

            <!-- Preview Image -->
            <div class="container">
                <div id="slides">

                  <!-- dynamically populate div with images based on grade -->
                  <?php 

                    for ($i=0; $i < 6; $i++) { 
                      echo "<img src='" . $images_arr[$i][media_ref] . "' alt=''>";
                    }

                  ?>
                  <a href="#" class="slidesjs-previous slidesjs-navigation"><i class="glyphicon glyphicon-circle-arrow-left"></i></a>
                  <a href="#" class="slidesjs-next slidesjs-navigation"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
                </div>
             </div>


             <div class="row">
                <!-- <h5 class="col-lg-6 col-lg-offset-5">Comment Describing the Image....</h5> -->
             </div>

			 <hr>

        </div>
				
        <?php 

            if($classNum == "4"){
              makeChartDiv("chart"); 
              makeChart("mike1", "chart");
              echo "<hr>";
            }
        ?> 
        <!-- End Graph Display and chart2.php inclusion -->
			

         <!--Comments login/ Comments input area-->
        <div class="col-lg-8 col-lg-offset-2">

            <!-- login elements -->
            <div id="commentLogin">
                <span><h4 class="col-md-offset-1">Login to post a comment:</h4></span>
                <div class="form-inline col-md-offset-1">
                    <div class="form-group">
                      <input type="text" class="form-control" id="user" placeholder="type your username here">
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" id="pass" placeholder="type your password here">
                    </div>
                    <button id="loginSubmit" class="btn btn-warning">Click to Login</button>               
                </div>
                <br>
                <p id="sign_in_msg" class="text-center"></p>
            </div>

            <!-- logout elements -->
            <div id="logoutDiv" class="text-center">
                  <span><h4 id="welcomeMsg"></h4></span>
                  <br>
                  <button id="logoutSubmit" class="btn btn-warning">Click to Logout</button>
                  <span><h4 id="loggedOutCmt"></h4></span>
            </div>
            
            <hr>

            <div class="well">

                <!-- textarea to leave comment -->
                <h4>Leave a Comment:</h4>
                <div role="form">
                    <div class="form-group">
                        <textarea id="userComment" class="form-control" rows="5"></textarea>
                    </div>
                    <span id="cmtMsg"></span>
                    <button id="commentSubmit" class="btn btn-primary col-md-offset-9">Post Comment</button>
                </div>


                <!-- area to input water quality data -->
                <div id="dataInputDiv">
                    <h4>Input Your Data:</h4>

                    <div role="form">
                        <div class="form-group">
                            pH<input type="text" id="userDataPh" class="form-control" rows="5" placeholder="pH"/><br>
                            Nitrates<input type="text" id="userDataNi" class="form-control" rows="5" placeholder="Nitrates"/><br>
                            Phosphorous<input type="text" id="userDataPho" class="form-control" rows="5" placeholder="Phosphorous"/><br>
                            Temperature<input type="text" id="userDataTe" class="form-control" rows="5" placeholder="Temperature"/><br>
                            Dissolved Oxygen<input type="text" id="userDataDo" class="form-control" rows="5" placeholder="Dissolved Oxygen"/><br>
                        </div>
                        <button id="dataSubmit" class="btn btn-primary col-md-offset-9">Submit Data</button>
                    </div>
                </div>
            </div>
            
            <h4>Comments:</h4>
            <hr id="comments">

            <!-- Posted Comments -->
        </div>
        <!-- </div> -->


        <!-- /.row -->
        <!-- <hr> -->

        
        <!-- Footer -->
        <footer>

            <div class="row">
                <div class="col-lg-3 pull-right">
                    <p>Copyright &copy; Green STEAM</p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->




    <!-- jQuery -->
    <!--script src="js/jquery.js"></script-->
    <!-- <script src="http://code.jquery.com/jquery-1.  9.1.min.js"></script> -->
    <!-- End SlidesJS Required -->

    <!-- Bootstrap Core JavaScript -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"/></script>
    <!--script src="js/bootstrap.min.js"></script-->    

    <!-- SlidesJS Required: Link to jquery.slides.js -->
    <script src="js/jquery.slides.min.js"></script>
    <!-- End SlidesJS Required -->

    <script src="js/classScript.js"></script>
 
</body>

</html>
