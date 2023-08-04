<?php
// conexion.php

$host = "localhost";
$usuario = "root";
$contrasena = "";
$bd = "usuarios";

$conexion = mysqli_connect($host, $usuario, $contrasena, $bd);

// Verificar conexión
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

?>
