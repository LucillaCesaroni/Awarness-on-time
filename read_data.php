<?php

error_reporting(E_ALL);ini_set('display_errors', 1);
require_once("config.php");
db_connect();
read();


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



function read() {

    global $db;



    $sql = "SELECT * FROM persone";
    $rs = mysqli_query($db, $sql) or exit(mysqli_error());
    $r = mysqli_num_rows($rs);

    header("Content-type: text/csv");
    header("Content-Disposition: attachment; filename=file.csv");
    header("Pragma: no-cache");
    header("Expires: 0");
    echo "id,regione,Allergico,Intollerante,Celiaco,No,Prick,Breath,autoanticorpi,altro,ip\n";

    while ($row = mysqli_fetch_assoc($rs)) {

      $id = $row["id"];
      $regione = $row["regione"];
      $Allergico = $row["Allergico"];
      $Intollerante = $row["Intollerante"];
      $Celiaco = $row["Celiaco"];
      $No = $row["No"];
      $Prick = $row["Prick"];
      $Breath = $row["Breath"];
      $autoanticorpi = $row["autoanticorpi"];
      $altro = str_replace(",","",$row["altro"]);
      $ip = $row["ip"];

      echo "$id,$regione,$Allergico,$Intollerante,$Celiaco,$No,$Prick,$Breath,$autoanticorpi,\"$altro\",$ip\n";
    }




die;
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
