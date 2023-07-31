<?php
// Datos de acceso a la base de datos
$servername = "localhost"; // Dirección del servidor de la base de datos (puede variar)
$username = "root"; // Nombre de usuario de la base de datos
$password = ""; // Contraseña del usuario de la base de datos
$dbname = "mini"; // Nombre de la base de datos que deseas conectar

$conecta = mysqli_connect($servername,$username,$password,$dbname);
 if($conecta-> connect_error){
    die("error".$conecta->connect_error);

 }
?>
