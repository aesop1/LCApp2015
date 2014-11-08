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
           // var sessionval;   
           // window.localStorage.setItem(sessionval, "<?php echo($_POST['session']); ?>");
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
if(!isset($_POST['length']) ||
        !isset($_POST['speakers']) ||
        !isset($_POST['expectations']) ||
        !isset($_POST['content']) ||
        !isset($_POST['conference']) ||
        !isset($_POST['recommend']) ||
        !isset($_POST['contact'])) {
        died('');       
} else {     
    
    $email_to = "matt.helmick@gmail.com";
    $email_from = "navismarketing@gmail.com";
    $email_subject = "Leaders Conference Feedback Form";  
     
    $speakers = $_POST['speakers']; //required
    $length = $_POST['length']; // required
    $expectations = $_POST['expectations']; // required
    $content = $_POST['content']; // required
    $conference = $_POST['conference']; // required
    $recommend = $_POST['recommend']; // required  
    $contact = $_POST['contact']; // required 
    $comments = $_POST['comments'];    
    
    $email_message = "Feedback details are below.\n\n";
     
    $email_message .= "1. Overall, how satisfied were you with the speakers/presenters? ".$speakers."\r\n";
    $email_message .= "2. How do you feel about the length of the sessions? ".$length."\r\n";
    $email_message .= "3. How well did the conference meet your expectations? ".$expectations."\r\n";
    $email_message .= "4. The content of the conference sessions was appropriate and informative. ".$content."\r\n";
    $email_message .= "5. The conference was well organized. ".$conference."\r\n";
    $email_message .= "6. Would you recommend the Conference to others? ".$recommend."\r\n";   
    $email_message .= "7. Would you like us to contact you?  ".$contact."\r\n";
    $email_message .= "8. Comments (optional):  ".$comments."\r\n";        
     
// create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
<?php echo('<div style="text-align:center">Thank you for submitting the Feedback Form!</div>'); ?>
 
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