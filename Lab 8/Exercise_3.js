// Define Course class
class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    // Method to display course details
    displayCourse() {
        console.log(`Course: ${this.courseName}, Instructor: ${this.instructor}`);
    }
}

// Create object of Course class
let course1 = new Course("Web Technologies", "Dr. Kumar");

// Display course details
course1.displayCourse();

// Promise to check seat availability
let enrollCourse = new Promise((resolve, reject) => {
    let seatsAvailable = true;

    if (seatsAvailable) {
        resolve("Enrollment Successful");
    } else {
        reject("Course Full");
    }
});

// Handle promise result
enrollCourse
    .then(msg => console.log(msg))
    .catch(err => console.log(err));