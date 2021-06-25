<?php

error_reporting(E_ALL);ini_set('display_errors', 1);
require_once("config.php");
db_connect();
record_save();


function db_connect() {
    global $db_server, $db_user, $db_pass, $db_database,$db;
    $db = mysqli_connect($db_server, $db_user, $db_pass, $db_database);
    mysqli_query($db, "SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
      echo("Connect failed: ".mysqli_connect_error());
    } else {
      //echo("Connect to the database");
    return 1;
  }
}



function record_save() {

    global $db;


    $a =k(@$_POST["regione"]);
    $b =k(@$_POST["Allergico"]);
    $c =k(@$_POST["Intollerante"]);
    $d =k(@$_POST["Celiaco"]);
    $i =k(@$_POST["No"]);
    $e =k(@$_POST["Prick"]);
    $f =k(@$_POST["Breath"]);
    $g =k(@$_POST["autoanticorpi"]);
    $h =k(@$_POST["altro"]);

    $sqltb = "INSERT INTO persone (regione, Allergico, Intollerante, Celiaco, No, Prick, Breath, autoanticorpi, altro, ip) VALUES ( '$a', '$b', '$c','$d', '$i', '$e','$f', '$g', '$h', '".$_SERVER['REMOTE_ADDR']."')";
    $rs = mysqli_query($db, $sqltb) or exit(mysqli_error(header));

    header("Location: grazie.html");
    exit;
    //echo("insert into the database");
}


function k($data) {
    global $db;
    if(is_array($data)) {
        $data = implode(",",$data);
    }
    $data = (!get_magic_quotes_gpc()) ? addslashes($data) : $data;

    return $data;
}

?>
