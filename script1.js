let users = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Peter',
        email: 'john@gmail.com',
        password: '1234',
        role: 'Citizen'
    }
];

document.getElementById('userForm').addEventListener('submit', function(event) {
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
                <button onclick="editUser('${user.id}')"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUser('${user.id}')"><i class="fas fa-trash-alt"></i></button>
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

// Initial render of users
renderUsers();
