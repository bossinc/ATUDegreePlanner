
<?php
	$submittedValue = "";
	$directory = "../JS/";
	$a = scandir($directory);
	$a=drawArray(new DirectoryIterator("../JS/DegreePlans/")); 

	function drawArray(DirectoryIterator $directory)
	{
		$result=array();
		foreach($directory as $object)
		{
			if($object->isFile())
			{
				$result[]=$object->getBasename('.js');
				echo "
				    <script src=\"../JS/DegreePlans/" . $object . "\"></script>
				";
			}
    }
    return $result;
}

	if (isset($_POST["FruitList"])) {
		$submittedValue = $_POST["FruitList"];
	}
	$arrlength = count($a);
?>
<img src="ATU.png" alt="ATU" style="width:470px;height:97px;">
<h2>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDegree Planner</h2><style>
<!-- This is where the links to the top degree menus are located at-->
</style>
<form name="DropDown">
<div id="menu">
<select id="degreeList" onChange="changeDegreePlan()">
  	<?php for($x = 0; $x < $arrlength; $x++){
		echo "<option value=\"" . $a[$x] . "\">";
		echo $a[$x];
		echo "</option>";
		}

		?>
</select>


  <li>
  <a id ="Instructions" href="#instructionsModal" data-toggle="modal">Help</a></li> 
  <a id ="Labels" href="#labelsModel" data-toggle="modal">Label</a>
  <a href="#wipePlanModal" data-toggle="modal">Reset</a>
  <a href="#savePlanModal" data-toggle="modal">Save</a>
</div>
</form>