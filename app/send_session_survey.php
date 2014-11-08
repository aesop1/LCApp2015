<?php
header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html>
  <head>
    <title>NAVIS Leaders Conference</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--link href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" rel="stylesheet" /-->
    <!--link href="app.css" rel="stylesheet" /-->
    <!--script src="http://code.jquery.com/jquery-1.8.2.min.js"></script-->
    <script type="text/javascript">
      /*$(document).bind( "mobileinit", function(){
        $.mobile.touchOverflowEnabled = true;  
        $.support.cors = true;               
        $.mobile.allowCrossDomainPages = true;         
      });*/
    </script>
      
      
    <!--script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script-->
  </head>
  <body id="internal">
   <script>
            var sessionval;   
            window.localStorage.setItem(sessionval, "<?php echo($_POST['session']); ?>");
    </script>
    <div data-role="dialog">
    <div data-role="header">
    <h1>Thank You</h1>
    </div>
    <div data-role="content">

<?php

function died($error) {
        // your error code can go here
        echo "We are very sorry, but you are required to answer every question. ";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
}

 // validation expected data exists
if(!isset($_POST['informative']) ||
        !isset($_POST['knowledge']) ||
        !isset($_POST['engaging']) ||
        !isset($_POST['length']) ||
        !isset($_POST['rate'])) {
        died('');       
} else {     
    
    $email_to = "matt.helmick@gmail.com";
    $email_from = "navismarketing@gmail.com";
    $email_subject = "Leaders Conference Survey";  
     
    $thissession = $_POST['session'];
    $informative = $_POST['informative']; // required
    $knowledge = $_POST['knowledge']; // required
    $engaging = $_POST['engaging']; // required
    $length = $_POST['length']; // required
    $rate = $_POST['rate']; // required     
    
    $email_message = "Survey details are below.\n\n";
     
    $email_message .= "The session was: ".$thissession."\r\n";
    $email_message .= "1. The content of this session was informative: ".$informative."\r\n";
    $email_message .= "2. The speaker clearly demonstrated knowledge of the topic: ".$knowledge."\r\n";
    $email_message .= "3. The speaker was engaging: ".$engaging."\r\n";
    $email_message .= "4. The length of the session was: ".$length."\r\n";
    $email_message .= "5. Overall, how would you rate this session from 1 (low) to 5 (high)?: ".$rate."\r\n";     
     
// create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
<?php echo('<div style="text-align:center">Thank you for submitting the survey for this session!<br />Please remember to submit surveys for the other sessions attended.</div>'); ?>
 
<?php
//close the if/else
}
?>
<script>
 function backtoApp() {
     history.go(-2);
     return false;
 }
</script>

<a data-role="button" data-inverse="true" href="javascript: backtoApp()">Close</a>
</div>
</div>
</body>
</html>