let users = JSON.parse(localStorage.getItem('users')) || [];

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value;

    // Reset errors
    document.querySelectorAll('.error').forEach(e => e.style.display = 'none');

    // Name validation
    if (!name) {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    // Email validation & duplicate check
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        showError('emailError', 'Valid email is required');
        isValid = false;
    } else if (users.some(user => user.email === email)) {
        showError('emailError', 'Email already registered');
        isValid = false;
    }

    // Mobile validation
    if (!mobile || !/^\d{10}$/.test(mobile)) {
        showError('mobileError', 'Mobile must be 10 digits');
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        showError('passwordError', 'Password must be minimum 6 characters');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        const user = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            mobile: document.getElementById('mobile').value.trim(),
            date: new Date().toLocaleDateString()
        };
        
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        this.reset();
        displayUsers();
        alert('User registered successfully!');
    }
});

function displayUsers() {
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    
    users.forEach((user, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.date}</td>
            <td><button onclick="deleteUser(${index})" class="danger">Delete</button></td>
        `;
    });
    
    document.getElementById('userCount').textContent = users.length;
}

function deleteUser(index) {
    if (confirm('Are you sure you want to delete this user?')) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}

function clearAllUsers() {
    if (confirm('Are you sure you want to delete ALL users? This cannot be undone.')) {
        users = [];
        localStorage.removeItem('users');
        displayUsers();
    }
}

// Initial load
document.addEventListener('DOMContentLoaded', displayUsers);

// Form validation on input change
['name', 'email', 'mobile', 'password'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        document.getElementById(id + 'Error')?.style.setProperty('display', 'none');
    });
});
