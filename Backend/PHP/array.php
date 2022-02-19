<?php
  $binatang = ["Sapi", "Ayam", "Mobil", "Motor", "Gajah", "Beruang"];

  unset($binatang[2]);
  unset($binatang[3]);
  foreach($binatang as $item) {
    echo "<h1 style=\"display: inline;\">" . $item . "</h1><br>";
  }

  $matrix = [
    [1, 5, 2],
    [2, 5, 0],
    [4, 9, 8]
  ];

  echo "<h1 style=\"display: inline\">" . $matrix[1][2] . "</h1>";
?>