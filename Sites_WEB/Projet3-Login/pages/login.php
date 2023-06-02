<?php
require('connectBdd.php');
include('connectBdd.php');

$SQL = "SELECT * FROM accounts";
$stmt = $connexion->prepare($SQL);
$stmt->execute(array()); // on passe dans le tableaux les paramètres si il y en a à fournir (ici l'identifiant du jeu)
$account = $stmt->fetch(PDO::FETCH_ASSOC); // on met le resultat de la requete dans un tableau
//var_dump($instrumentsenseignant);// on affiche le contenu de la variable $jeu (ici un tableau php array())
$stmt->closeCursor(); // on ferme le curseur des résultats*/



$login = $_REQUEST['login'];
$password = $_REQUEST['password'];

if (($account['id']==$login) && ($account['mdp']==$password)) {
    $URL = "/Projet3-Login/php/index.php";
    header("Location: " . $URL);
    die();
}
else {
    $URL = "/Projet3-Login/login.html";
    header("Location: " . $URL);
    die();
}
?>
