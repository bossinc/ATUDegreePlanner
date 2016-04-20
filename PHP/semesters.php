<div class="col-sm-6" id ="semesterPrinter" >	
	   <!-- This is the semester section where you drag the classes to.  Includes the menu to change your starting year -->
	<div class="row" >
<h4>Course Schedule</h4>
	    <div class="col-sm-12 well" id="semesterContainer" >	
<div id = previousCase>
	      <div id = "previousHeader" class="text-center">
		<b>Transfer Credits</b>
	      </div>
	    <div class='semester dropHere' id = sem0>
	<button type='button' class='btn btn-xs pull-right  btn-default' id='sem0hide' >Hide</button>
</div>
	    <div class=text-center id=semHours0>
	    </div>
	</div>
<div class="row">
<div class="col-sm-12">
<h4 class="hidden-print"> 
<a data-toggle="collapse" href="#changeDateBody">Change Start Date</a>
<div style="float:right;">
<button id="addSem" class="btn btn-block btn-default" type="button" style="width:150px">Add Semester <span class='glyphicon glyphicon-plus'></span></button>     
<button id="removeSem" class="btn btn-block btn-default" type="button" style="width:150px">Remove Semester <span class='glyphicon glyphicon-minus'></span></button>     
</div>
</h4>
<div class="panel-collapse collapse" id="changeDateBody">
<div class="panel-body">
  <button type="button" class="close" id="closeDateBox" >&times;</button>
	    <form role="form" class="form-inline">
		<select id = "changeSeason" class="form-control">
		<option value="Spring">Spring</option>
		<option value="Summer">Summer</option>
		<option value="Fall" selected>Fall</option>
	      </select>
	      <select id = "changeYear" class="form-control">
		<option value="2010">2010</option>
		<option value="2011">2011</option>
		<option value="2012" selected>2012</option>
		<option value="2013">2013</option>
		<option value="2014">2014</option>
		<option value="2015">2015</option>
		<option value="2016">2016</option>
		<option value="2017">2017</option>
	      </select>	      
	      <span class="help-block">
		<i>Set to the semester of the first class taken</i>
	      </span>
	    </form>
</div>
</div>
</div>
</div>
	</div>
	</div>
	</div>
      </div>
	  <!-- This is where the hidden semesters are located at as well as the options to add and remove a semester -->
	<div class="row"  >
<div class="col-sm-6">
</div>
	    <div class="col-sm-4 hidden-print" >	
	    <h4>Hidden Semesters</h4>
	    <div class="panel panel-default" id="sembox"></div>
</div>
	    <div class="col-sm-2 hidden-print" >	
</div>
</div>
      <div id = 'courseHolder' style="display:none"></div>
<script>
for (var i = 0; i < 11; i++){
	addSemester();
}
updateSemesterDates();
</script>
</div>