<?php
ini_set('display_errors', 1);
var_dump($_GET);
error_reporting(E_ALL);
echo 'Script para receber e armazenar os dados de alguma obra';
//Objetivo: Receber os dados do produto que foram digitados no formulário e armazenar em um banco de dados. 

// Recebendo os dados do formulário
$artworkName = $_GET['inputName'];
$artistName = $_GET['inputArtist'];
$date_artwork = $_GET['inputDate'];
$artworkDescription = $_GET['description'];
$urlArtwork = $_GET['inputUrl'];

//Conexão com o banco de dados. 
$hostname = '127.0.0.1';
$user = 'root';
$password = '';
$database = 'museum';
$conn = mysqli_connect($hostname, $user, $password, $database);
if($conn){
    echo 'Conexão com o banco efetuada com sucesso !!! <br />';
    //Gravar os dados no banco de dados
    $query = "insert into artworks (artworkName, artistName, date_artwork, artworkDescription, urlArtwork) values ('".$artworkName."','".$artistName."',".$date_artwork.",'".$artworkDescription."','".$urlArtwork."');";
    echo '<br />'.$query;
    $res = mysqli_query($conn, $query);
    if($res){
        echo '<h2>Obra incluída com sucesso!!!</h2>';
        
    } else {
        echo '<h2>Obra não incluída.!!!</h2>';
        var_dump(mysqli_error($conn));
    }
}else {
    echo 'Conexão com o banco de dados não efetuada !!! <br />';
    echo mysqli_connect_error();
}



?>