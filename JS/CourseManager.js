

function CourseManager() {
    this.detailedClassesArray = initialCourseArray;
    this.htmlClassesArry = [];
    this.htmlClassesArry.push(new Course(initialCourseArray[0]));
    this.htmlClassesArry.push(new Course(this.detailedClassesArray[1]));
    this.htmlClassesArry.push(new Course(this.detailedClassesArray[2]));
}

CourseManager.prototype.ChangeDegreePlan = function() {

};

CourseManager.prototype.generateHTMLCourses = function() {

};

CourseManager.prototype.buildHMTCourse = function(detailedClass){
    
};

CourseManager.prototype.RemoveCourse = function(para, nodes) {

};