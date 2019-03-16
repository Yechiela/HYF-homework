/*STUDENT MANAGER*/
const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here
    if(studentName.trim()===""){
        console.log("Please provide student name");
        return;
    }
    if(class07Students.indexOf(studentName)>=0){
        console.log("Student " + studentName + " is already in class 07");
        return;
    }
    if(getNumberOfStudents()>=6 && studentName!=="The Queen"){
        console.log("Cannot add more students to class 07");
        return;
    }
    class07Students.push(studentName);
    let students=JSON.stringify(class07Students);
    console.log(students);
}
function getNumberOfStudents() {
    // You write code here
    return class07Students.length;
}