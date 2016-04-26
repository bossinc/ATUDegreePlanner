

function CourseManager() {
    this.detailedClassesArray = initialCourseArray;
    this.htmlClassesArray = [];
    this.htmlClassesArray.push(new Course(initialCourseArray[0]));
    this.htmlClassesArray.push(new Course(this.detailedClassesArray[1]));
    this.htmlClassesArray.push(new Course(this.detailedClassesArray[2]));
}

CourseManager.prototype.ChangeDegreePlan = function() {

};

CourseManager.prototype.generateHTMLCourses = function() {

};

CourseManager.prototype.buildHMTCourse = function(detailedClass){
    
};

CourseManager.prototype.RemoveCourse = function(para, nodes) {

};