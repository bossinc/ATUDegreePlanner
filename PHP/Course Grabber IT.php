<html>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

// sql statement for tables and naming array to hold it in
$sql = "SELECT COURSE_ID FROM degreeplanner.it";
$result = $conn->query($sql);
$IT = array();

if ($result->num_rows > 0) {
		// fill array with results 
		while($row = $result->fetch_assoc()) {
			array_push($IT, "Name"=>$row);
		}
} else {
	echo "0 Results";
}
// encodes php array so it can be used in javascript
$json_array = json_encode($IT);

$conn->close();
?>

<script type="text/javascript">var ITObjects =<?php echo $json_array; ?>;</script>
<script type="text/javascript" src="Information Technology.js">
//allows file in src area to use variables declared in php file
</script>

</body>
</html>