<meta http-equiv="refresh" content="100; url=index.php" />
<?php

//importe conectbdd et l'execute
require('connectBDD.php');

//test de la confirmation du mot de passe et de l'identifiant


$add_id = $_REQUEST['identifiant'];
$password = $_REQUEST['password'];
$confirm_password = $_REQUEST['confirm_password'];

//pour l'identifiant, on va analyser s'il existe et rajouter 1 si c'est le cas, ensuite, 
//si le compteur vaudra 1 alors cela signifiera qu'il sera utiliser

$SQL = "SELECT nom_id FROM accounts";
$stmt = $connexion->prepare($SQL);
$stmt->execute(array()); // on passe dans le tableaux les paramètres si il y en a à fournir (ici l'identifiant du jeu)
$identifiants = $stmt->fetchALL(PDO::FETCH_ASSOC); // on met le resultat de la requete dans un tableau
var_dump($identifiants); // on affiche le contenu de la variable $jeu (ici un tableau php array())
$stmt->closeCursor(); // on ferme le curseur des résultats*/

foreach ($identifiants as $identifiant) {
    $compteur_id = 0;

    if ($identifiant==$add_id ) {
        $compteur_id = 1;
    }
} 

//CONDITION

if (($password==$confirm_password) && ($compteur_id==0)) {

    $sql = "INSERT INTO Comptes VALUES ('$add_id', '$password')";

    mysqli_query($conn, $sql);

    $URL = "index.php";
    header("Location: " . $URL);
    die();
}
else {
    $URL = "";
    header("Location: " . $URL);
    die();    
}


?>