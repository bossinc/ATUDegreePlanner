var Course = function(info){
    this.id = info.name;
    this.seasonRestrict = info.seasonRestrict;
    this.hours = info.hours;
    this.prereqs = info.Prereqs;
    this.label = info.label;
    this.course = CreateCourse();
};

CreateCourse = function()
{
    var course;

    return course;
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