<?php

   require_once __DIR__ . '/database.php';

   $albums = [];
   
   $gerneSelected = $_GET['genre'];

   if ($gerneSelected === 'all') {
      $albums = $discs;
   } else {
      foreach ($discs as $disc) {
         if ($disc['genre'] === $gerneSelected) {
            $albums[] = $disc;
         }
      }
   }

   header('Content-Type: application/json');

   echo json_encode($albums);
