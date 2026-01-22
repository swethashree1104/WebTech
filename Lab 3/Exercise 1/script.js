// USER DATA (Input Simulation)
const userData = {
    name: "Alice",
    email: "alice@admin.com",
    password: "Admin@12345",
    confirmPassword: "Admin@12345",
    age: 25,
    role: "admin",   // student | teacher | admin
    skills: "Management"
};

// EMAIL VALIDATION 
function validateEmailDomain(email, role) {
    const roleDomains = {
        student: "@student.edu",
        teacher: "@school.edu",
        admin: "@admin.com"
    };

    return email.endsWith(roleDomains[role]);
}

// PASSWORD VALIDATION
function validatePasswordStrength(password, role) {

    if (role === "student") {
        return password.length >= 6;
    }

    if (role === "teacher") {
        return password.length >= 8 && /\d/.test(password);
    }

    if (role === "admin") {
        return (
            password.length >= 10 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[@$!%*?&]/.test(password)
        );
    }

    return false;
}

// CONFIRM PASSWORD 
function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// SKILLS VALIDATION 
function validateSkills(skills, role) {
    if (role === "teacher" || role === "admin") {
        return skills && skills.length > 0;
    }
    return true;
}

// MASTER VALIDATION
function validateRegistration(user) {
    const errors = [];

    if (!validateEmailDomain(user.email, user.role)) {
        errors.push("Invalid email domain for selected role");
    }

    if (!validatePasswordStrength(user.password, user.role)) {
        errors.push("Password does not satisfy role-based rules");
    }

    if (!validateConfirmPassword(user.password, user.confirmPassword)) {
        errors.push("Passwords do not match");
    }

    if (!validateSkills(user.skills, user.role)) {
        errors.push("Skills are required for Teacher and Admin");
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// EXECUTION 
const result = validateRegistration(userData);

if (result.isValid) {
    console.log("✅ Registration Successful");
} else {
    console.log("❌ Registration Failed");
    console.log(result.errors);
}
