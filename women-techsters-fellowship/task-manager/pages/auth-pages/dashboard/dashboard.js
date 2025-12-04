
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "../login/index.html";
}

const profileNameEl = document.getElementById("profile-name");
if (profileNameEl) {
    profileNameEl.textContent = user;
}


const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.href = "../login/index.html";
    });
}


const greetingEl = document.getElementById('greeting');
const username = localStorage.getItem('username') || "";

const hour = new Date().getHours();
let greeting = "";

if(hour < 12){
  greeting = "Good Morning";
} else if(hour < 18){
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

greetingEl.textContent = `${greeting}, ${username}!`;
