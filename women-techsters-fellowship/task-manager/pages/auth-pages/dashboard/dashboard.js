
//redirect to login if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "../login/index.html";
}

const user = localStorage.getItem("username") || "User";
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
    greetingEl.textContent = "Good morning, " + user + "!";
}

//fill username
const profileNameEl = document.getElementById("profile-name");
if (profileNameEl) {
    profileNameEl.textContent = user;
}

//logout
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.href = "../login/index.html";
    });
}
