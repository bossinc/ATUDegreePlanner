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
$sql = "SELECT COURSE_ID FROM cs";
$result = $conn->query($sql);
$CS = array();

if ($result->num_rows > 0) {
		// fill array with results 
		while($row = $result->fetch_assoc()) {
			array_push($CS, $row);
		}
} else {
	echo "0 Results";
}
// encodes php array so it can be used in javascript
$json_array = json_encode($CS);

$conn->close();

// fills Computer_Science.js with the contents of the json_array and adds new lines in between
$json_array_lines = implode($json_array, "/n");
$fp = fopen('..\js\DegreePlans\Computer_Science.js', 'w');
fwrite($fp, print_r($json_array_lines, TRUE));
fclose($fp);
?>


</body>
</html>