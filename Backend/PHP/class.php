<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <?php
    class Person {
      public $name;

      function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
      }

      function get_name() {
        return $this->name;
      }
    }

    $orang1 = new Person("John", "42");
    $orang2 = new Person("Chadwick", "35");

    echo "<h1 style='text-align: center; padding: 0;'>Person 1: {$orang1->name}, {$orang1->age} years old<br>";
    echo "Person 2: {$orang2->name}, {$orang2->age} years old</h1>";
  ?>
</body>
</html>