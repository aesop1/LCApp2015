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
        echo "We are very sorry, but you are required to answer the first three questions. ";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
}


 // validation expected data exists
if(!isset($_POST['speakers']) || !isset($_POST['length']) || !isset($_POST['appropriate'])) {
        died('');       
} else {     
    
    $email_to = "matt.helmick@gmail.com";
    $email_from = "navismarketing@gmail.com";
    $email_subject = "Leaders Conference Survey";  
     
    $thissession = $_POST['session']; //hidden data

    $speakers = $_POST['speakers']; // required
    $speaker_comments = $_POST['speaker-comments']; //unrequired comment

    $length = $_POST['length']; // required
    $length_comments = $_POST['length-comments']; //unrequired comment

    $appropriate = $_POST['appropriate']; // required
    $appropriate_comments = $_POST['appropriate-comments']; //unrequired comment

    // constructive criticism

    $likemost = $_POST['like-most-comments'];    //unrequired comment
    $likeleast = $_POST['like-least-comments'];    //unrequired comment
    $more = $_POST['more'];    //unrequired comment
    $feedback_comments = $_POST['feedback-comments'];    //unrequired comment

    
    $email_message = "Survey details are below.\n\n";
     
    $email_message .= "The session was: ".$thissession."\r\n";
    $email_message .= "1. Overall, how satisfied were you with the speakers/presenters? ".$speakers."\r\n";
    $email_message .= "- Comments: ".$speaker_comments."\r\n";

    $email_message .= "2. How do you feel about the length of the sessions? ".$length."\r\n";
    $email_message .= "- Comments: ".$length_comments."\r\n";

    $email_message .= "3. The content of the conference sessions was appropriate and informative: ".$appropriate."\r\n";
    $email_message .= "- Comments: ".$appropriate_comments."\r\n";

    $email_message .= "Constructive Criticism:\n\n";

    $email_message .= "1. What did you like most about this session? ".$likemost."\r\n";
    $email_message .= "2. What did you like least about this session? In what ways could this session be improved?: ".$likeleast."\r\n";  
    $email_message .= "3. Would you like to attend more sessions like this one? ".$more."\r\n";
    $email_message .= "4. Any other feedback you have? ".$feedback_comments."\r\n";    
     
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