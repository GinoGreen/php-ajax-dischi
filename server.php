<?php

   $albumFiltered = [];
   
   $gerneSelected = strtoupper($_GET['genre']);

   foreach ($fullAlbums as $album) {
      if (strtoupper($album['gerne']) === $gerneSelected) {
         $albumFiltered[] = $album;
      }
   }

   header('Content-Type: application/json');

   echo json_encode($albumFiltered);
