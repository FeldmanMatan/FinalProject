<?php
$_POST= json_decode(file_get_contents('php://input'))
if(isset($_POST) && !empty($_POST)) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email=='admin@com' && $password =='admin') {
        ?>
    {
        "success": true,
        "secret": "this is admin"
    }
    <?php
} else {
    ?>
{
    "success": false,
    "message": "Invalid "
}
<?php
 }
}else{
    ?>
{
     "success": false,
     "message": "only post access accepted"
}
<?php
}
?>