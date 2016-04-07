<html>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "BMDd5qAqs539r6St";
$database = "degree_planner";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

// sql statement for tables and naming array to hold it in
$sql = "SELECT COURSE_ID FROM infos";
$result = $conn->query($sql);
$IS = array();

if ($result->num_rows > 0) {
		// fill array with results 
		while($row = $result->fetch_assoc()) {
			array_push($IS, $row);
		}
} else {
	echo "0 Results";
}
$conn->close();

//encode the array so it can be used in javascript and use regular expressions to format it.
$json_string = json_encode($IS);

$re = "/.,/";
$subst = "},\r\n";
$json_string = preg_replace($re, $subst, $json_string);

// send $json_string contents to listed folder
$fp = fopen('..\js\DegreePlans\Information_Systems.js', 'w');
fwrite($fp, print_r($json_string, TRUE));
fclose($fp);

</body>
</html>