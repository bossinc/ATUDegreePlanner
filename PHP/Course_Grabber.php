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

$major = "";
if(isset($_POST['submit'])){
	$major = $_POST['Degree_to_grab'];
}

// sql statement for tables and naming array to hold it in
$sql = "SELECT COURSE_ID FROM ".$major;
$result = $conn->query($sql);
$major_array = array();


// make sure at least result is returned
if ($result->num_rows > 0) {
		// fill array with results 
		while($row = $result->fetch_assoc()) {
			array_push($major_array, $row);
		}
} else {
	echo "0 Results";
}
$conn->close();

$row1 = "\"NAMES\"";
$colon = ":";
$row2 = "\"".$major.".js\"";
$major_name = $row1.$colon.$row2;

array_unshift($major_array, $major_name);
array_push($major_array, "false");

//encode the array so it can be used in javascript
$json_string = json_encode($major_array);

//Regular Expression formatting the JSON string
$re = "/.,/";
$subst = "},\r\n";
$json_string = preg_replace($re, $subst, $json_string);

$re2 = "/\,(?=[^.]*$)/";
$subst2 = ",[";
$json_string = preg_replace($re2, $subst2, $json_string, 1);

$re3 = "/\"?\\\\\"/";
$subst3 = "\"";
$json_string = preg_replace($re3, $subst3, $json_string);

$re4 = "/\\[?\\[/";
$subst4 = "[{";
$json_string = preg_replace($re4, $subst4, $json_string, 1);

//additional formatting
$first_string = "var initialCourseArray = new Array()";
$second_string = "initialCourseArray.push(";
$end_bracket = "]";
$end_parentheses =")";
$file_to_create = '..\\js\\DegreePlans\\'.$major.'.js';

// send $json_string contents to listed folder
$fp = fopen($file_to_create, 'w');
fprintf($fp, "%s \n %s%s%s%s;",$first_string,$second_string,$json_string,$end_bracket,$end_parentheses);
fclose($fp);
?>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
<input type="text" name="Degree_to_grab">
<input type="submit" name="submit">
<input type="reset" value="Reset" onClick="window.location.reload()">
</form>