function Course(info){
    this.id = info.name;
    this.seasonRestrict = info.seasonRestrict;
    this.hours = info.hours;
    this.prereqs = info.Prereqs;
    this.label = info.label;
    this.description = info.description;
    this.course = this.CreateCourse();
};

Course.prototype.CreateCourse = function()
{
    var listElement = document.createElement('li');
    var node = document.createTextNode('');
    listElement.className += " Course";
    listElement.setAttribute("id", this.id);
    listElement.appendChild(node);
    //listE

    $("#CourseCollection").append(listElement);
    ($("#"+this.id)).prop("label",(this.label));
};



Course.prototype.DragCourse = $(function() {
    var $drop = $( ".dropHere" );
    $( ".Courses" ).draggable({
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
    // dropZones accept li elements
    $drop.droppable({
        accept: ".Courses",
        drop: function( event, ui ) {
            updateAllCourses();
        }
    });
});