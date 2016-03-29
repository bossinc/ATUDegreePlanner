
<?php
	$submittedValue = "";
	$value0 = "";
	$path = /JS/DegreePlans/;
	$a = array_values (array_filter(scandir($path), function ($file){
	return !is_dir($file);}));
	foreach($a as $file){ echo $file;}
	
	if (isset($_POST["FruitList"])) {
		$submittedValue = $_POST["FruitList"];
	}
	$arrlength = count($a);
?>
<img src="ATU.png" alt="ATU" style="width:470px;height:97px;">
<h2>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDegree Planner</h2><style>
<!-- This is where the links to the top degree menus is located at-->
</style>
<form name="DropDown">
<div id="menu">
<select onChange="location=this.options[this.selectedIndex].value;">
	<option> </option>
  	<?php for($x = 0; $x < $arrlength; $x++){
		echo "<option value = \"DegreePlans/";
		echo $a[$x];
		echo "\">";
		echo $a[$x];
		echo "</option>";
		} ?>
</select>


  <li><a id ="Instructions" href="#instructionsModal" data-toggle="modal">Help</a></li> 
  <a href="#wipePlanModal" data-toggle="modal">Reset plan to default</a>
</div>
</form>