const users = [
    { id: 1, name: "João", type: "admin" },
    { id: 2, name: "Maria", type: "user" },
    { id: 3, name: "Carlos", type: "guest" },
    { id: 4, name: "Ana", type: "user" },
    { id: 5, name: "Roberto", type: "admin" },
    { id: 6, name: "Beatriz", type: "guest" }
];


localStorage.setItem("users", JSON.stringify(users));


function displayUsers(filteredUsers) {
    const userList = document.getElementById("userList");
    userList.innerHTML = ''; 

    filteredUsers.forEach(user => {
        const li = document.createElement("li");
        li.classList.add(user.type); 

        
        const userInfo = document.createElement("div");
        userInfo.classList.add("user-info");

        const name = document.createElement("span");
        name.textContent = user.name;
        
        const id = document.createElement("span");
        id.classList.add("id");
        id.textContent = `ID: ${user.id}`;
        
        const type = document.createElement("span");
        type.classList.add("type");
        type.textContent = `Tipo: ${user.type}`;

        userInfo.appendChild(name);
        userInfo.appendChild(id);
        userInfo.appendChild(type);

        li.appendChild(userInfo);
        userList.appendChild(li);
    });
}


function filterUsers() {
    const filter = document.getElementById("userTypeFilter").value;
    const users = JSON.parse(localStorage.getItem("users"));
    const filteredUsers = filter ? users.filter(user => user.type === filter) : users;
    displayUsers(filteredUsers);
}


function searchUsers() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const users = JSON.parse(localStorage.getItem("users"));
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery));
    displayUsers(filteredUsers);
}


document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("users"));
    displayUsers(users);
});
