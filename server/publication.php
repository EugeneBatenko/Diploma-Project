<?php

// Initialize variable for database credentials
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'westlion';

//Create database connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection was successful
  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }

//Fetch 3 rows from actor table
  $result = $dblink->query("SELECT * FROM publications");

//Initialize array variable
  $dbdata = array();

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

//Print array in JSON format
header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");
 echo json_encode($dbdata);
 
?>