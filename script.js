let users = JSON.parse(localStorage.getItem("users")) || [];

function addUser() {
  // GET INPUT FIELD
  let input = document.getElementById("userInput");
  let Username = input.value.trim();

  if (Username) {
    let user = {
      name: Username,
      tasks: [],
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    input.value = "";
    // displayUsers(); // Update UI
  } else {
    alert("Please enter a username");
  }
  saveUsers();
  displayUsers();
  console.log(users);
}

function displayUsers() {
  let userList = document.getElementById("user-list");
  userList.innerHTML = ``;

  if (!users.length) {
    let p = document.createElement("p");
    p.innerHTML = "No users found";
    userList.appendChild(p);
    return;
  }

  users.map((user) => {
    let li = document.createElement("li");
    li.innerHTML = li.innerHTML = `
        <span>${user.name}</span>
        <div>
            <button onclick = "editUser(${users.indexOf(user)})">✏️</button>
            <button onclick = "deleteUser(${users.indexOf(user)})">❌</button>
        </div>
    `;
    userList.appendChild(li);
  });
}
function deleteUser(index) {    
    users.splice(index, 1);
    saveUsers();
    displayUsers();
}

function editUser(index) {
    let newName = prompt("Edit user name:", users[index].name);
    if (newName !== null && newName.trim() !== "") {
        users[index].name = newName.trim();
        saveUsers();
        displayUsers();
    }
    // console.log(newName);
    // console.log(users[index]);
    
    
}
displayUsers();


function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}
