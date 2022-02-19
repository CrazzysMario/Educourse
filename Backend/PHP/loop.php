<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>For loop:</h1>
<ul style="position: relative; left: 50px;">
<?php
  for($i = 15; $i <= 25; $i++) {
    echo "<li style=\"font-size: 30px;\">Pengulangan ke -$i</li>";
  }
?>
</ul>
<h1 style="position: absolute; top: 0px; left: 350px;">While loop:</h1>
<ul style="position: absolute; top: 60px; left: 400px;">
<?php
  $i = 15;
  while($i <= 25) {
    echo "<li style=\"font-size: 30px;\">Pengulangan ke -$i</li>";
    $i++;
  }
?>
</ul>
<h1 style="position: absolute; top: 0px; left: 700px;">ForEach loop:</h1>
<ul style="position: absolute; top: 60px; left: 750px;">
<?php
$colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

foreach ($colors as $value) {
  echo "<li style=\"font-size: 30px;\">$value</li>";
}
?>
</ul>
</body>
</html>

