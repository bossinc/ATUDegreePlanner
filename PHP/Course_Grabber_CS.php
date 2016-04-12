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

// make sure at least result is returned
if ($result->num_rows > 0) {
		// fill array with results 
		while($row = $result->fetch_assoc()) {
			array_push($CS, $row);
		}
} else {
	echo "0 Results";
}
$conn->close();

//encode the array so it can be used in javascript and use regular expressions to format it.
array_push($CS, "false");
$json_string = json_encode($CS);

$re = "/.,/";
$subst = "},\r\n";
$json_string = preg_replace($re, $subst, $json_string);

//additional formatting
$first_string = "var initialCourseArray = new Array()";
$second_string = "initialCourseArray = ";

// send $json_string contents to listed folder
$fp = fopen('..\js\DegreePlans\Computer_Science.js', 'w');
fprintf($fp, "%s \n %s %s;",$first_string,$second_string,$json_string);
fclose($fp);
?>


</body>
</html>