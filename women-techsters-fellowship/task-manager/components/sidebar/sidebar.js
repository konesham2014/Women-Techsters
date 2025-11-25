
// Username display in profile and sidebar
const sidebarName = document.getElementById("profile-name"); // Using profile-name as in HTML
const logoutBtn = document.getElementById("logout-btn");

// Update username from localStorage
const username = localStorage.getItem("username") || "User";
if (sidebarName) sidebarName.textContent = username;

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.href = "../login/index.html"; // Adjust path as needed
    });
}
