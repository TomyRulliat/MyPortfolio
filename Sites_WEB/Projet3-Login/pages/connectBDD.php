<?php

$conn = new mysqli("localhost", "root", "root", "manhattancity");

//Vérifie la connexion
if($conn->connect_error){
    die('erreur : ' .$conn->connect_error);
}

echo "Connexion réussie";

?>