<?php
    // Conexão com o banco de dados
    $dbUser = "root";
    $dbPassword = "";
    $dbName = "museum";
    $dbHost = "127.0.0.1";
    $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
    if( $connection ) {
        // Realizar a leitura do banco
        $query = "select * from artworks";
        $results = mysqli_query($connection, $query);
        // Entregar os dados para quem pediu
        $artworks = [];
        $index = 0;
        while($record = mysqli_fetch_row($results)){
            $artwork = new stdClass();
            $artwork->id_artwork = $record[0];
            $artwork->artworkName = $record[1];
            $artwork->artistName = $record[2];
            $artwork->date_artwork = $record[3];
            $artwork->artworkDescription = $record[4];
            $artwork->urlArtwork = $record[5];
            $artworks[$index] = $artwork;
            $index = $index + 1;
        } 
        echo json_encode($artworks);
    } else {
        echo "<br />Conexão não efetuada";
        echo "<br />". mysqli_connect_error();
    }
?>