///////////////////////////////////////
//  Welcome to the file were most    //
//  of the heavy lifting happens at. //
///////////////////////////////////////

var _semesterCounter = 0;
var theSeason = "Fall";
var theYear = 2012;
var HiddenSemestersArray = new Array;
var ULElist = new Array;
var cInitialCourseArray;
var popup = 0;
window.onload = InitStart;

function setPlanStatus(status)
{
  if (status){
    $("#planStatusContainer").removeClass("alert-error").addClass("alert-success");
    $("#planStatusContainer2").removeClass("alert-error").addClass("alert-success");
    $("#planStatus").text("Complete!");
    $("#planStatus2").text("Complete!");
  } else {
    $("#planStatusContainer").removeClass("alert-success").addClass("alert-error");
    $("#planStatusContainer2").removeClass("alert-success").addClass("alert-error");
    $("#planStatus").text("Incomplete");
    $("#planStatus2").text("Incomplete");
  }
  return false;
}
function checkStatus(){
  var myStatus = new Array;
  myStatus[0] = 'Complete';

  $(".Course").each(function(index) {
    if ($(this).prop('sem') == 255) {
      myStatus[0] = 'Not Complete';
      myStatus.push('Not_All_Courses_Placed');
      return false;
    }
  });
  if ($(".badSeason").length > 0){
    myStatus.push('Class_In_Wrong_Season');
    myStatus[0] = 'Not Complete';
  }
  if ($(".badSequence").length > 0){
    myStatus.push('Class_Out_Of_Sequence');
    myStatus[0] = 'Not Complete';
  }
  if ($(".badULE").length > 0){
    myStatus.push('ULE_Not_Met_Waiver_Required');
  }
  if ($(".badHours").length > 0){
    myStatus.push('Excess_Hours_Waiver_Required');
  }
  if (myStatus[1] == undefined) {
    myStatus[1] = 'No_Errors';
  }
  if (myStatus[0] == "Complete") {setPlanStatus(true);}
  else if (myStatus[0] == "Not Complete") {setPlanStatus(false);}
  return myStatus;
}

// This changes the color of the prereqs to red or green if there completed
function activatePreqReqButtons(thisCourse){

  $("button[name='preReqButton']").mouseenter(function() {
    var childCourse = $("#"+($(this).prop('value')));
    childCourse.effect('highlight');
  });
  $("button[name='preReqButton']").click(function() {
    var childCourse = $("#"+($(this).prop('value')));
    childCourse.effect('highlight');
  });

  $("button[name='preReqButton']").each(function() {
    if (thisCourse.hasClass("badSequence")){
      var parentSem =thisCourse.prop('sem');
      var childCourse = $("#"+($(this).prop('value')));
      var childSem = childCourse.prop('sem');
      if (childSem >= parentSem){
        $(this).removeClass("btn-default");
        $(this).addClass("btn-danger");
      } else {
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
      }
    } else {
      $(this).removeClass("btn-danger");
      $(this).addClass("btn-default");
    }
  });
}
function RunLoad() {
  $("#closeDateBox").click(function() {
    $("#changeDateBody").collapse('hide');
  });
  $("#closeMessageBox").click(function() {
    $("#messageBox").hide();
  });

  $("#info_btn").click(function()
  {
    var thisCourse = $("#"+$(this).prop('value'));
    $("#infobox").html(thisCourse.prop('displayInfo'));
    activatePreqReqButtons(thisCourse);
  });

  // This is the transfer credit area
  $("#prevHours").attr("title", "Credit hours");
  $("#sem0hide").on("click", function(event) {
    $("#previousCase").hide(0);
    HiddenSemestersArray.push("#sem0hide");
    $('#sembox').append("<button id=prevButt class='btn btn-xs btn-info' >Transfer Credits </button>");
    $("#prevButt").on("click", function(event) {
      $("#previousCase").show(0);
      $(this).remove();
      var where = (jQuery.inArray("#sem0hide", HiddenSemestersArray));
      HiddenSemestersArray.splice(where, 1)
    });
  });
  //end transfer credits area
  addCourses();
//this is where you move classes from the courses area into there semester on the schedule
  $(function() {
    var semValue;
    var $drop = $( ".dropHere" );
    $( ".Courses" ).draggable({
      drag: function(){
        $(this).addClass('shadow');
      },
      stop: function(){
        var courseValue = $(this).prop('id');
        $(this).removeClass('shadow');
      },
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      revertDuration: '200',
      scroll: 'true',
      delay: '100',
      containment: "#dragContainer",
      cursor: "move",
      stack: ".Courses"
    });
    // dropZones accept li elements
    $drop.droppable({
      accept: ".Courses",
      drop: function( event, ui ) {
        courseMove($(this), ui.draggable);
        semValue = $(this).prop('id');
        updateAllCourses();
      }
    });
    $drop.not("#sem255").not(".courseCategory").droppable({
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active"
    });
  });

  //end degree section
  //used for the reset function
  $("#menu-newPlan").on("click", function(event) {
    resetButton();
  });
  $("#menu-savePlan").on("click", function(event) {
    generateSavingString();
  });
  //end dropdown menu
  //add/remove semesters and change date buttons
  $("#addSem").on("click", function(event) {
    addSemester();
    updateSemesterDates(false);
  });

  $("#removeSem").on("click", function(event) {
    removeSemester();
  });
// this is where you change starting semester
  $("#changeSeason").on("change", function(event) {
    resetButton();
    theSeason = $("#changeSeason").val();
    $("#semYear1").attr("mySeason", theSeason);
    updateSemesterDates(1);
  });
  //this is where you change starting year
  $("#changeYear").val(theYear);
  //added
  $("#changeYear").on("change", function(event) {
    theYear = parseInt($("#changeYear").val());
    $("#semYear1").attr("myYear", theYear);
    updateSemesterDates(false);
  });
  //end semester buttons
  //default hides
// this is where the summers become hidden by default
  $("#sem0hide").trigger('click');
  $(".semYear").each(function() {
    if ($(this).attr("mySeason") == "Summer") {
      var name = ($(this).attr("id"));
      var semNum = name.split("");
      for (var i = 0; i < 7; i++) {
        semNum.shift();
      }
      semNum = semNum.join("");
      semNum = parseInt(String(semNum));
      var theHide = $("#sem" + semNum + "hide");
      theHide.trigger('click');
    }
  });

  $("."+justYear+"only").show(0);
  if (justYear == '13' || justYear == '14'){
    $(".core").show(0);
  }
  //end final
}//end run load runload RunLoad runLoad
//This is the process to actually add a semester
function addSemester() {
  _semesterCounter++;
  var newSem = "";
  newSem = "<div id = 'semCase" + _semesterCounter + "' class='semesterCase'><div><div id = 'semYear" + _semesterCounter + "' class='semYear text-center'></div></div>";
  newSem = newSem + "<div class='semester dropHere' id=sem" + _semesterCounter + "><button type='button' class='btn btn-xs pull-left  btn-default' id='sem"+_semesterCounter+"hide' >hide</button></div>";
  newSem = newSem + "<div><div class='text-center' id='semHours" + _semesterCounter + "'>0</div></div>" + "</div>";
  $('#semesterContainer').append(newSem);
  $('#semCase'+_semesterCounter).hide();
  $('#semCase'+_semesterCounter).show('drop');
  var theSem = "#sem" + _semesterCounter;
  $(function() {
    $(theSem).droppable({
      accept: "li",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
        courseMove($(theSem), ui.draggable );
        updateAllCourses();
      }
    });
  });
// using the counter for the semester hours
  var theSemHours = "#semHours" + _semesterCounter;
  if (_semesterCounter == 1) {
    var semYear1HTML= '<a data-toggle="collapse" href="#changeDateBody">';
    semYear1HTML += (theSeason + " " + theYear + "</a>");
    $("#semYear1").html(semYear1HTML);
    $("#semYear1").attr("mySeason", theSeason);
    $("#semYear1").attr("myYear", theYear);
  }
  var theHide = "#sem" + _semesterCounter + "hide";
  var theCase = "#semCase" + _semesterCounter;
  var theButt = "semButt" + _semesterCounter;
  var thisYear = "#semYear" + _semesterCounter;
  var theSum = "#Summer" + _semesterCounter;
  var theLabel;
// this is where semesters are hidden can also be readded
  $(theHide).on("click", function(event) {
    theLabel = ($(thisYear).attr("mySeason") + $(thisYear).attr("myYear"));
    $(theCase).hide(0);
    if (jQuery.inArray(theHide, HiddenSemestersArray) == -1) {
      HiddenSemestersArray.push(theHide);
      $('#sembox').append("<button id=" + theButt + " class='btn btn-xs btn-info' >" + theLabel + " </button>");
      $("#" + theButt).on("click", function(event) {
        $(theCase).show(0);
        $(this).remove();
        var where = (jQuery.inArray(theHide, HiddenSemestersArray));
        HiddenSemestersArray.splice(where, 1)
      });
    }
  });
  $(theSem).prop("kids", 0);
  $(theSemHours).attr("title", "Credit hours");
  $("#semButtonsCase").appendTo("#semesterContainer");
  if (_semesterCounter == 1) {
    $("#removeSem").addClass("disabled");
  }	else  {
    $("#removeSem").removeClass("disabled");
  }
}//end addsemester
function removeSemester() {
  if (_semesterCounter > 1) {
    while ($("#semesterContainer > .semesterCase > .semester").last().children('.Courses').length > 0) {
      $("#sem255").append($("#semesterContainer > .semesterCase > .semester >.Courses").last());
    }
    $("#sem255 >  .Courses").prop("sem", 255);
    $("#sembox > .btn").each(function() {
      if (($(this).attr("id")) == ("semButt" + _semesterCounter))
        $(this).hide('drop', function() {$(this).remove(); });
    });

    $("#semesterContainer > .semesterCase").last().hide('drop', function() {$(this).remove(); });
    _semesterCounter--;
    updateAllCourses();

  }
  if (_semesterCounter == 1) {
    $("#removeSem").addClass("disabled");
  }	else  {
    $("#removeSem").removeClass("disabled");
  }
}//end removesemester

function div3(value) {
  if (value % 3 == 0)
    return true;
  else
    return false;
}

function updateSemesterDates(seasonChange) {
  var semYear1HTML= '';
  semYear1HTML += (theSeason + " " + theYear);
  $("#semYear1").html(semYear1HTML);

  $(".semYear").each(function() {
    if ( $(this).is(':hidden') ) {
      var name = ($(this).attr("id"));
      var semNum = name.split("");
      for (var i = 0; i < 7; i++) {
        semNum.shift();
      }
      semNum = semNum.join("");
      semNum = parseInt(String(semNum));

      if (semNum > 0){
        var theButt = $("#semButt" + semNum);
        if (seasonChange == true)
        {
          theButt.trigger('click');
        }
        var thisSeason = $(this).attr("mySeason");
        var thisYear = $(this).attr("myYear");
        var needsHidden = [thisSeason,thisYear];
      }
    }
  });

  for (var i = 1; i <= _semesterCounter; i++) {
    var theButt = "#semButt" + i;
    var theSemYear = "#semYear" + i;
    var newYear = 0;
    if (i > 1) {
      if (theSeason == "Fall") {
        if (div3(i)) {
          $(theSemYear).attr("mySeason", "Summer");
          newYear = theYear + ((i) / 3 );
        } else if (div3(i + 1)) {
          $(theSemYear).attr("mySeason", "Spring");
          newYear = theYear + ((i + 1) / 3 );
        } else if (div3(i + 2)) {
          $(theSemYear).attr("mySeason", "Fall");
          newYear = theYear + ((i - 1) / 3 );
        }
      } else if (theSeason == "Spring") {
        if (div3(i)) {
          $(theSemYear).attr("mySeason", "Fall");
          newYear = theYear + ((i / 3) - 1 );
        } else if (div3(i + 1)) {
          $(theSemYear).attr("mySeason", "Summer");
          newYear = theYear + (((i + 1) / 3) - 1 );
        } else if (div3(i + 2)) {
          $(theSemYear).attr("mySeason", "Spring");
          newYear = theYear + (((i + 2) / 3) - 1 );
        }
      } else if (theSeason == "Summer") {
        if (div3(i)) {
          $(theSemYear).attr("mySeason", "Spring");
          newYear = theYear + ((i / 3) );
        } else if (div3(i + 1)) {
          $(theSemYear).attr("mySeason", "Fall");
          newYear = theYear + (((i + 1) / 3) - 1 );
        } else if (div3(i + 2)) {
          $(theSemYear).attr("mySeason", "Summer");
          newYear = theYear + (((i - 1) / 3) );
        }
      }
      $(theSemYear).attr("myYear", newYear);
      $(theSemYear).html($(theSemYear).attr("mySeason") + " " + $(theSemYear).attr("myYear"));
    }
    var theLabel = ($(theSemYear).attr("mySeason") + "" + $(theSemYear).attr("myYear") + " <span class=''></span>" );
    $(theButt).html(theLabel);
  }
  $(".semYear").each(function() {
    var name = ($(this).attr("id"));
    var semNum = name.split("");
    for (var i = 0; i < 7; i++) {
      semNum.shift();
    }
    semNum = semNum.join("");
    semNum = parseInt(String(semNum));
    var theHide = $("#sem" + semNum + "hide");
    var theSem =  $("#sem" + semNum);
    if (seasonChange == true){
      if ($(this).attr("mySeason") == "Summer" && theSem.children(".Courses").length == 0 && semNum != 1){
        theHide.trigger('click');
      }
    }
  });
  updateAllCourses();
}//end updateSemesterDates

function courseMove(sem, course) {

  sem = sem.prop("id");
  course = course.prop("id");
  var node = $("#" + sem);
  var thisCourse = $("#" + course);
  thisCourse.css("left","");
  thisCourse.css("top","");
  node.append(thisCourse);
  var semNum = parseSem(sem);
  thisCourse.prop("sem",semNum);

  if(sem != undefined && sem != "sem255")
    insertParam(course, sem);
}
//takes the semid and returns just the course number
function parseSem(sem){
  if (sem != null){
    var thing = sem.split("");
    thing.shift();
    thing.shift();
    thing.shift();
    thing = thing.join("");
    thing = parseInt(String(thing));
    return thing;
  } else {
    return 255;
  }
}
//this is the actual function used for the reset button
function resetButton() {
  $(".semester").each(function() {
    $(this).prop("kids",0);
  });

  $(".Courses").each(function() {
    $("#catAll").append(this);
  });

  $(".Courses").prop("sem", 255);

  while (_semesterCounter < 11) {
    addSemester();
  }
  while (_semesterCounter > 11) {
    removeSemester();
  }
  $(".Course").each(function(index) {
    var thisCourse = $(this);
    if (thisCourse.prop('altClass') != null) {
      var otherCourse = $("#"+thisCourse.prop("altClass"));
      if (thisCourse.prop("id") != "courseHolder") {
        courseMove($('#courseHolder'), otherCourse);
      }
    }
  });
  updateAllCourses();
}

function updateAllCourses() {

  $("#sem255 >  .Courses").each(function() {
    $("#catAll").append(this);
  });

  $(".courseCategory >  .Courses").each(function() {
    $(this).prop("sem",255);
    $(this).removeClass("badULE");
    $(this).removeClass("badSeason");
    $(this).removeClass("badSequence");
    $("#"+$(this).prop('id')+"redErrorGrid").removeClass("printRed");

    if ($(this).prop("cat") == "#catEXTRA"){
      $("#catEXTRA").append(this);
    } else {
      $("#catAll").append(this);
    }
  });

  for (var i = 0; i <= _semesterCounter; i++) {
    var theSem = "#sem" + (i);
    var totalHours = 0;
    $(theSem + " > .Courses").each(function() {
      totalHours += $(this).prop("hours");
    });
    var theSemHours = ("#semHours" + (i));
    var myDate  = $("#semYear" + i);
    var theCase = $("#semCase" + i);
    theCase.attr("mySeason", myDate.attr("mySeason"));
    theCase.attr("myYear", myDate.attr("myYear"));
    if (totalHours == 0) {$(theSemHours).text("0");}
    else{
      $(theSemHours).text(totalHours);
    }

    if (totalHours > 9 && $(myDate).attr("mySeason") == "Summer") {
      theCase.addClass("badHours");
    } else if (totalHours > 18) {
      theCase.addClass("badHours");
    } else {
      theCase.removeClass("badHours");
    }
    // semester length
    // this next section alters the height of the semesters based on how many courses they contain
    var theSem = "#sem" + i;
    var theKids = $(theSem + " .Courses").length;
    $(theSem).prop("kids", theKids);
    // if there's more than 5 courses in a semester, increase the height accordingly
  }
  //end height adjustment
  //makes size adjustments for the semester columns depending on the number of classes added
  $(".semester").not("#sem0").each(function(index) {
    var theKids = ($("#"+$(this).prop('id')+ " .Courses").length);
    if (theKids > 5) {
      $(this).css("width","182px");
    } else {
      $(this).css("width","96px");
    }
  });
  //hide stuff
  $(".semester").each(function(index) {
    var name = ($(this).prop('id'));
    var semNum = name.split("");
    for (var i = 0; i < 3; i++) {
      semNum.shift();
    }
    semNum = semNum.join("");
    semNum = parseInt(String(semNum));
    var theHide = $("#sem" + semNum + "hide");
    if($(this).prop("kids") > 0) {
      theHide.hide(0);
    } else {
      theHide.show(0);
    }
  });
  //detect sequence and season errors
  $(".Course").each(function(index) {
    thisCourse = $(this);
    thisCourse.prop('title',"");
    if (thisCourse.prop("sem")!= 255){
      checkSequence(thisCourse);
      if ( thisCourse.prop("ULE") == 1 ) {
        checkULE(thisCourse);
      }
      checkSeason(thisCourse);
    }
  });
  colorErrors();
  sortCategories();
  //display any errors
  broadCastAll()
  applyPrintClass();
  checkStatus();
}//end UpdateAllCourses
//This is the message box that shows up on hover when there is an error
function broadCastAll(){
  total_errors=0;
  broadCastOutOfSequence();
  if (total_errors==0){
    $("#errorTitle").hide();
    $("#displayErrorsBadge").text("");
  }else{
    $("#errorTitle").show();
    $("#displayErrorsBadge").html(total_errors);
  }
}
function applyPrintClass(){
  $(".Course").not(".badSequence, .badSeason").each(function(){
    $("#"+$(this).prop('id')+"redErrorGrid").removeClass("printRed");
  });
  $(".badSequence, .badSeason").each(function(){
    $("#"+$(this).prop('id')+"redErrorGrid").addClass("printRed");
  });
}
function colorErrors(){
  var errorRed="#E8000D";
  var errorYellow="#FFC82D";
  var courseNormal = "#00533E";
  var courseULE = "#6DC6E7";
  var hover = "#FFCE00";
  $(".Course").css("background-color", courseNormal);
  $(".Course:hover").css("background-color", hover);
  $(".Course.ULE").css("background-color", courseULE);
  $(".badSequence").css("background-color", errorRed);
  $(".badSeason").css("background-color", errorRed);
  $(".badULE").css("background-color", errorYellow);
  $(".badSeason.badULE").css("background-color", errorRed);
  $(".badSeason.badSequence").css("background-color", errorRed);
  $(".badSequence.badULE").css("background-color", errorRed);
  $(".badSeason.badSequence.badULE").css("background-color", errorRed);
  $(".semesterCase").css("background-color","transparent");
  $(".badHours").css("background-color", errorYellow);
}
// check to make sure the class is offered during the chosen semester
function checkSeason(thisCourse){
  var theSem = ("#semYear" + thisCourse.prop("sem"));
  if (theSem != "#semYear255" && theSem != "#semYear0") {
    if ($(theSem).attr("mySeason") == "Summer" && (thisCourse.prop("summer") == false)) {
      thisCourse.addClass("badSeason");
    } else if ( thisCourse.prop("seasonRestrict") == "f" && thisCourse.is(':visible') && $(theSem).attr("mySeason") == "Spring") {
      thisCourse.addClass("badSeason");
    } else if ( thisCourse.prop("seasonRestrict") == "s" && thisCourse.is(':visible') && ($(theSem).attr("mySeason") == "Fall")) {
      thisCourse.addClass("badSeason");
    } else {
      thisCourse.removeClass("badSeason");
    }
  }
}
// used when you are taking classes out of order
function broadCastOutOfSequence() {
  var msg = "<b>Pre-requisite errors:</b><br>"
  $("#errorSequence").html("");
  if 	($(".badSequence").length > 0){
    $(".badSequence").each(function() {
      total_errors++;
      msg += ( $(this).prop('id')+" ");
      $(this).prop("title",displayPrereqList($(this)));
    });
    $("#errorSequence").html(msg);
  }
}
function checkULE(thisCourse) {
  var ULEdone = true;
  if (thisCourse.prop("id") == "COMS_TEST" ) {
    for (var i = 0; i < ULElist.length; i++) {
      if ( ($("#" + ULElist[i]).prop("sem") > thisCourse.prop("sem")) && thisCourse.prop("id") == "courseHolder" ) {
        ULEdone = false;
      }
    }
  } else {
    for (var i = 0; i < ULElist.length; i++) {
      if ( ($("#" + ULElist[i]).prop("sem") >= thisCourse.prop("sem")) && thisCourse.prop("id") == "courseHolder" ) {
        ULEdone = false;
      }
    }
  }

  if (ULEdone == false && (thisCourse.prop("sem") != 0 && thisCourse.prop("sem") != 255 )) {
    thisCourse.addClass("badULE");
    //if (thisCourse.prop("title") == "") {
    //  thisCourse.prop("title", "Upper Level Eligibility not met.\nWaiver required.");
    //}
  } else {
    thisCourse.removeClass("badULE");
    thisCourse.prop("title", "");
  }
}//end check ULE
//function to make sure you are taking the classes in the right order
function checkSequence(thisCourse) {
  var j = 0;
  var outOfOrder = false;
  var co = 0;
  while (thisCourse.prop("Prereqs")[j] != 'end') {
    co = 0;
    if (thisCourse.prop("Prereqs")[j] == 'COMS2104') {
      if(popup == 0) {
        $('#prereqModal').modal('show');
        popup++;
      }
    }
    else if (thisCourse.prop("Prereqs")[j] == 'co') {
      co = 1;
      j++;
    }
    if (thisCourse.prop("Prereqs")[j] == 'or') {
      var tempOutOfOrder = true;
      j++;
      while (thisCourse.prop("Prereqs")[j] != 'endor') {
        co = 0;
        if (thisCourse.prop("Prereqs")[j] == 'co') {
          co = 1;
          j++;
        }
        var tempComparedCourse = $("#" + thisCourse.prop("Prereqs")[j]);
        if (thisCourse.prop("sem") > (tempComparedCourse.prop("sem") - co)) {
          tempOutOfOrder = false;
        }
        if (tempOutOfOrder == true){
          if ((thisCourse.prop("sem") != 255 && thisCourse.prop("sem") != 0 && thisCourse.is(":visible"))) {
            thisCourse.addClass("badSequence");
          }
        } else {
          thisCourse.removeClass("badSequence");
        }
        j++;
      }
    }
    var comparedCourse = $("#" + thisCourse.prop("Prereqs")[j]);
    if (comparedCourse.length > 0) {
      if (thisCourse.prop("sem") <= (comparedCourse.prop("sem") - co)) {
        outOfOrder = true;
      }
      if (outOfOrder == true){
        if ((thisCourse.prop("sem") != 255 && thisCourse.prop("sem") != 0 && thisCourse.is(":visible"))) {
          thisCourse.addClass("badSequence");
        }
      } else {
        thisCourse.removeClass("badSequence");
      }
    }
    j++;
  }
  if (thisCourse.prop("sem") == 255 || thisCourse.prop("sem")==0 || thisCourse.is(":hidden")) {
    thisCourse.removeClass("badSequence");
  }
}//end checkSequence
// this decides what is in the message box showing the missing prereqs
function displayPrereqList(course){
  var preReqList = "";
  if (course.prop("Prereqs")[0] == 'end') {
    preReqList = "<br> None"
  } else {
    var i = 0;
    preReqList = "Missing prereqs: ";
    while (course.prop("Prereqs")[i] != 'end') {
      if (course.prop("Prereqs")[i] == 'co') {
        preReqList = (preReqList + " \n" + $("#"+course.prop("Prereqs")[++i]).prop('label') + " (coreq) ");
        i++;
      } else {
        if ( $("#"+course.prop("Prereqs")[i]).length > 0  ){
          if ( (course.prop("sem")) <=  ($("#"+course.prop("Prereqs")[i]).prop("sem"))  ){
            preReqList = (preReqList + " \n" + $("#"+course.prop("Prereqs")[i]).prop('label') );
          }
        }
        i++;
      }
    }
  }
  return preReqList;
}//end displayPrereqList
function NewInfoDisplayPrereq(course){
  var preReqList= ("<br><b>Prereqs:</b> <br>");
  if (course.prop("Prereqs")[0] == 'end') {
    preReqList += "None"

  } else {
    var myLength = course.prop("Prereqs").length;
    for (var i = 0; i < myLength-1; i++) {
      if ( $("#"+course.prop("Prereqs")[i]).length > 0  ){
        var tempLabel=$("#"+course.prop("Prereqs")[i]).prop('label');
        var tempID=$("#"+course.prop("Prereqs")[i]).prop('id');

        if (course.prop("Prereqs")[i] == 'co') {
          i++;
          tempLabel=$("#"+course.prop("Prereqs")[i]).prop('label');
          tempID=$("#"+course.prop("Prereqs")[i]).prop('id');

          preReqList = (preReqList + "<button name='preReqButton' value='"+tempID+"'type='button' class='btn btn-default btn-xs'> " + tempLabel  + "(co)</button>");
        } else {
          preReqList = (preReqList + "<button name='preReqButton' value='"+tempID+"'type='button' class='btn btn-default btn-xs'> " + tempLabel  + "</button>");
        }
      }
    }
//    preReqList +='<input type= "checkbox" name="waiver" value="waivers"> Waiver received<br>'
  }
  return preReqList;
};

function getCourseLocation(thisCourse){
  var kvp = document.location.search.substr(1).split('&');
  var courseID = thisCourse.prop('id');
  var semID = 255;
  var i = kvp.length; var x; while(i--){
    x = kvp[i].split('=sem');

    if (x[0]==courseID)
    {
      semID = x[1];
      break;
    }
  }
  //insertParam(semID,semID);

  courseMove($('#sem' + semID), thisCourse);
}
// This is where classes are added from the array to the class area
function addCourses() {
  $("#addExtraCourse").click(function() {
    $("#catEXTRA").append(msg);
    var thisCourse = $("#extraCourse"+_extraCourseCounter);
    drawCourse(thisCourse);
    updateAllCourses();

    $( ".extraCourse" ).draggable({
      drag: function(){
        $(this).addClass('shadow');
      },
      stop: function(){
        $(this).removeClass('shadow');
      },
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      revertDuration: '200',
      scroll: 'true',
      delay: '100',
      containment: "#dragContainer",
      cursor: "move",
      stack: ".Courses"
    });
  });
  for (var i = 0; cInitialCourseArray[i] != ""; i++){
    var theInfo = cInitialCourseArray[i];
    var msg = " <li class='Course Courses' id="+theInfo['name']+"></li>";
    $("#catAll").append(msg);
    //working here to add 'ors' to course prereqs, test phsx 313, then apply to others
    var thisCourse = $("#"+cInitialCourseArray[i]['name']);
    thisCourse.prop("label",(theInfo['label']));
    thisCourse.prop("hours",parseInt(theInfo['hours']));
    thisCourse.prop("summer",(theInfo['summer']));
    thisCourse.prop("Prereqs",(theInfo['Prereqs']).split('|') );
    thisCourse.prop("ULE",(theInfo['ULE']) );
    thisCourse.prop("seasonRestrict",(theInfo['seasonRestrict']) );
    thisCourse.prop("link",(theInfo['link']) );
    thisCourse.prop("description",(theInfo['description']) );
    var asd = "";
    asd +=  '<div class="btn-group btn-group-xs pull-right">';
    if (thisCourse.prop('seasonRestrict') == 'f') {
      asd +=  '<button type="button" class="btn btn-danger">Spring</button>';
    } else {
      asd +=  '<button type="button" class="btn btn-success">Spring</button>';
    }
    if (thisCourse.prop('summer') == 1) {
      asd +=  '<button type="button" class="btn btn-success">Summer</button>';
    } else {
      asd +=  '<button type="button" class="btn btn-danger">Summer</button>';
    }
    if (thisCourse.prop('seasonRestrict') == 's') {
      asd +=  '<button type="button" class="btn btn-danger">Fall</button>';
    } else {
      asd +=  '<button type="button" class="btn btn-success">Fall</button>';
    }
    asd += '</div>';
    thisCourse.prop("awesomeSemesterDisplay",asd);
    getCourseLocation(thisCourse);
  }
  for (var i = 0; cInitialCourseArray[i] != ""; i++){
    var theInfo = cInitialCourseArray[i];
    var thisCourse = $("#"+cInitialCourseArray[i]['name']);
    //create 'display info' functionality
    {
      updateDisplayInfo(thisCourse);
      thisCourse.click(function() {
        var tempThisCourse = $(this);
        $("#infobox").html($(this).prop('displayInfo'));
        activatePreqReqButtons(tempThisCourse);
        $("button[name='course-btn']").prop("value",$(this).prop('id'));
        $("#hours_btn").attr("disabled","disabled");
        $("#hours_btn").hide();
      });
    }
    drawCourse(thisCourse);
  }
  updateAllCourses();
  sortCategories();
} // end addCourses

function updateDisplayInfo(thisCourse){
  var msg= "";
  msg += "<div class='row'>";
  msg += "<div class='col-sm-6'>";
  msg += "<strong>";
  if (thisCourse.prop('link') == null){
    msg += thisCourse.prop('label');
  } else {
    msg += '<a href='+thisCourse.prop('link')+' title="Course Info" target="_blank">'+thisCourse.prop('label')+'</a>';
  }
  msg += "<div>";
  if (thisCourse.prop('hours') == 1) {
    msg += thisCourse.prop('hours') + " credit hour";
  } else {
    msg += thisCourse.prop('hours') + " credit hours";
  }
  msg += "</strong>";
  msg += "</div>";
  msg += "</div>";
  msg += "<div class='col-sm-6'>";
  msg+= thisCourse.prop("awesomeSemesterDisplay");
  msg += "<div>";
  msg += '<span class="label label-default pull-right">';
  msg += "</span>";
  msg += "</div>";
  msg += "</div>";
  msg += "</div>";
  msg += "</div>";
  msg += "<div>";
  if (thisCourse.prop('description') == null) {
    msg += "There is no description for this course."
  } else {
    msg += thisCourse.prop('description');
  }
  msg+= (NewInfoDisplayPrereq(thisCourse));
  msg += "</div>";
  msg += "</div>";
  msg += "</div>";
  thisCourse.prop("displayInfo",msg );
  updateAllCourses();
}
function updateExtraDisplayInfo(thisCourse){
  var msg= "";
  msg += "<div class='row'>";
  msg += "<div class='col-sm-6'>";
  msg += "<strong>";
  if (thisCourse.prop('link') == null){
    msg += thisCourse.prop('label');
  } else {
    msg += '<a href='+thisCourse.prop('link')+' title="Course Info" target="_blank">'+thisCourse.prop('label')+'</a>';
  }
  msg += "</strong>";
  msg += "<div>";
  if (thisCourse.prop('description') !== null){
    msg += thisCourse.prop('description');
  }
  msg += "<div>";
  if (thisCourse.prop('hours') == 1) {
    msg += thisCourse.prop('hours') + " credit hour";
  } else {
    msg += thisCourse.prop('hours') + " credit hours";
  }
  msg += "</div>";
  msg += "</div>";
  msg += "</div>";
  msg += "</div>";
  thisCourse.prop("displayInfo",msg );
  updateAllCourses();
}

function drawCourse(thisCourse){
  thisCourse.html("");
  var thisHTML = "";
  thisHTML = "<span class ='courseFiller2' id = '"+thisCourse.attr('id')+"redErrorGrid' style='position:absolute;left:0px;top:0px;'><span class='courseFiller'></span><span class='courseFiller'></span><span class='courseFiller'></span><span class='courseFiller'></span></span>";
  thisHTML += ('<p style="line-height:115%">');
  thisHTML += ("<b>"+thisCourse.prop('label')+ "</b>");
  thisHTML += ("<span style='float:right'>"+thisCourse.prop('hours') + "</span> ");
  thisHTML += ("<br>");
  if (thisCourse.prop('seasonRestrict') == 'f') {
    if (thisCourse.prop("summer") == 1){
      thisHTML += ("<i>Fall/Sum</i>");
    } else {
      thisHTML += ("<i>Fall Only</i>");
    }
  }
  else if (thisCourse.prop('seasonRestrict') == 's') {
    if (thisCourse.prop("summer") == 1){
      thisHTML += ("<i>Spr/Sum</i>");
    } else {
      thisHTML += ("<i>Spring Only</i>");
    }
  } else if (thisCourse.prop('seasonRestrict') == 'n') {
    if (thisCourse.prop("summer") == 1){
      thisHTML += ("<i>Spr/Sum/Fall</i>");
    } else {
      thisHTML += ("<i>Spr/Fall</i>");
    }
  }
  if (thisCourse.prop("ULE") == 0 ){
    ULElist.push (thisCourse.prop("id"));
    thisCourse.addClass("ULE");
  }
  thisHTML += ('</p>');
  thisCourse.html(thisHTML);
}
function sortCategories(){
  sortCat('#catAll');
  function sortCat(catName)    {
    $(catName + " >  .Course").not('.altSorted').sortElements(function(a, b){
      if ($(a).prop("ULE") == 0  ) {
        $(a).addClass('uleSorted');
      }
      if ($(b).prop("ULE") == 0  ) {
        $(b).addClass('uleSorted');
      }
      return $(a).prop("ULE") > $(b).prop("ULE") ? 1 : -1;
    });
    $(catName + " >  .Course").not(".uleSorted").not(".altSorted").sortElements(function(a, b){
      return $(a).prop("id") > $(b).prop("id") ? 1 : -1;
    });
    $(catName + " >  .Course.uleSorted").sortElements(function(a, b){
      $(a).removeClass('uleSorted');
      $(b).removeClass('uleSorted');
      return $(a).prop("id") > $(b).prop("id") ? 1 : -1;
    });
  }// end sortCat
}

//Change degree plans
function changeDegreePlan()
{
  var degreeList = document.getElementById("degreeList");
  var dp = degreeList.options[degreeList.selectedIndex].text + ".js";
  var imported = document.createElement('script');
  imported.src = "../JS/DegreePlans/" + dp;
  document.head.appendChild(imported);
  for(var i =0; i < CourseElements.length; i++){
    CourseElements[i].html("");
    //CourseElements[i].prop();
  }
  CourseElements = new Array;
}

var paramBuilder = "";
function insertParam(key, value)
{
  key = encodeURI(key);
  value = encodeURI(value);

  var kvp = paramBuilder.split('&');

  var i=kvp.length;
  var x;
  while(i--)
  {
    x = kvp[i].split('=');

    if (x[0]==key)
    {
      x[1] = value;
      kvp[i] = x.join('=');
      break;
    }
  }

  if(i<0) {kvp[kvp.length] = [key,value].join('=');}

  paramBuilder = kvp.join('&');
  //this will reload the page, it's likely better to store this until finished
  //document.location.search = kvp.join('&');
  //generateSavingString();
}

function generateSavingString()
{
  var urlString = window.location.href.split("?")[0];
  document.writeln(urlString + "?" + paramBuilder);
  //document.location.search = paramBuilder;
}

function hashCode (s) {
  var hash = 0,
      strlen = s.length,
      i,
      c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    //hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function unhashCode(s){
  var hash = 0,
      strlen = s.length,
      i,
      c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash >> 5) + hash) - c;
    //hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function InitStart()
{
    var src = "../JS/DegreePlans/Test%20Degree.js";
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src=src ;
    oHead.appendChild( oScript);
    cInitialCourseArray = TestDegree;
    RunLoad();
}