<!DOCTYPE html>
<html>
<head>
	<title>Go Pure</title>
	<link rel="shortcut icon" type="image/png" href="images/favicon.png"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- bootstrap -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link href="css/aos.css" rel="stylesheet">
  

  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->

	<!-- custom stylesheet -->
	<link rel="stylesheet" type="text/css" href="css/mystylesheet.css">
</head>
<body>

<div class="topbar" id="TopHeader"></div>

<header class="main-header">
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
		<img src="images/gopure_logo.png" class="img-fluid logo">
	</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about-us.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="taste.html">Taste</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="partners.html">Partners</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="our-team.html">Our Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="contact-us.php">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	</div>
</header>
<div class="clearfix"></div>
<section class="inner-slider">
		<div class="slider-heading aos-init aos-animate" data-aos="fade-in">
           Contact Us
        </div>
</section>

<section class="our-team">
	<div class="container aos-init aos-animate" data-aos="fade-up">
     <div class="row">

      <div class="col-sm-4 pt-80">
          <div class="heading">Customer Support</div>
            <div class="light-green-bg p-30">
            <p><i class="bi bi-envelope-fill font-18 pr-10"></i> <a href="mailto:support@gopure.co.in">support@gopure.co.in</a></p>		
          <p><i class="bi bi-telephone-fill font-18 pr-10"></i> 
          <a href="tel:0120- 425 6016">0120- 425 6016</a>, <a href="tel:9910125804">9910125804</a></p>
          <p><i class="bi bi-clock font-18 pr-10"></i> 10.00 am to 6.00 pm - (Monday to Friday)</p>
          </div>

       </div>
     <div class="contact-form mb-40 col-sm-6 offset-sm-1">
      <p class="mt-40 mb-40">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
       
      <form class="row g-3" action="#">
        <div class="col-12 mb-10">
          <label for="inputName" class="form-label">Name</label>
          <input type="text" name="fullname" class="form-control" id="inputName">
        </div>
        <div class="col-12 mb-10">
          <label for="inputMobileNumber" class="form-label">Mobile</label>
          <input type="text" name="phone" onkeypress="if(isNaN( String.fromCharCode(event.keyCode) )) return false;" class="form-control" id="inputMobileNumber">
        </div>

         <div class="col-12 mb-10">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" name="email" class="form-control" id="inputEmail">
        </div>

        <div class="col-12 mb-10">
          <label for="inputQuestion" class="form-label">Write your queries</label>
          <textarea class="form-control" name="queries" id="inputQuestion" style="height:140px; resize: none;"></textarea>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-md btn-success pl-40 pr-40">Send</button>
        </div>
      </form>
    </div>

    </div>
	</div>
</section>


<div class="clearfix"></div>

<section id="contactSection"></section>

<footer id="footerContent"></footer>


<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>



<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<script src="js/aos.js"></script>

<script type="text/javascript" src="js/myjavascript.js"></script>

<?php
if(isset($_POST["SubmitBtn"])){

$to = "bhasker.das@mcnsolutions.net, a.kumar@mcnsolutions.net";
$subject = "Go Pure Contact Form";
$name=$_POST["fullname"];
$phone=$_POST["phone"];
$queries=$_POST["queries"];
$useremail=$_POST["email"];
$headers = "From: $useremail";

mail($to,$subject,$name,$phone,$queries,$headers);
    header("Location:/contact.php");
}
?>

</body>
</html>