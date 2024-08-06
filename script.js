
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        const homeLinks = document.querySelectorAll('.home');
        homeLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                // Add your navigation logic here
            });
        });
    });

});
function showFilePath() {
    var fileInput = document.getElementById('picture');
    var filePath = fileInput.value;
    var filePathDisplay = document.getElementById('file-path');
    filePathDisplay.textContent = filePath ? `Selected file: ${filePath}` : '';
}

// document.getElementById('prev').addEventListener('click', function() {
//     // Logic for previous button click
//     alert('Previous button clicked');
// });

document.getElementById('next').addEventListener('click', function () {
    // Logic for next button click
    alert('Next button clicked');
});

// document.getElementById('blog').addEventListener('click', function() {
//     // Logic for blog card click
//     alert('Blog card clicked');
// });

// document.getElementById('report').addEventListener('click', function() {
//     // Logic for report card click
//     alert('Report card clicked');
// });
document.querySelectorAll('i.fa-eye').forEach(function (element) {
    element.addEventListener('click', function () {
        alert('View action clicked');
    });
});

document.querySelectorAll('i.fa-print').forEach(function (element) {
    element.addEventListener('click', function () {
        alert('Print action clicked');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch values from the form
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const compose = document.getElementById('compose').value;

        // Example: Log the values to console (you can replace this with actual submission logic)
        console.log('Title:', title);
        console.log('Author:', author);
        console.log('Compose:', compose);

        // Reset form fields if needed
        form.reset();
    });
});

// for admin dash
let users = [];
let editingUserId = null;

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (userId) {
        // Edit user
        users = users.map(user => user.id === userId ? { id: userId, firstName, lastName, email, password, role } : user);
    } else {
        // Add new user
        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            password,
            role
        };
        users.push(newUser);
    }

    resetForm();
    renderUsers();
});

function renderUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td class="actions">
                <button class="edit" onclick="editUser('${user.id}')">Edit</button>
                <button onclick="deleteUser('${user.id}')">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function editUser(userId) {
    const user = users.find(u => u.id === userId);
    document.getElementById('userId').value = user.id;
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('email').value = user.email;
    document.getElementById('password').value = user.password;
    document.getElementById('role').value = user.role;
}

function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
    renderUsers();
}

function resetForm() {
    document.getElementById('userId').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('role').value = '';
}


alert(hello);