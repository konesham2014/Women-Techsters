(function () {
    const loggedIn = localStorage.getItem("tm_loggedIn");

    if (!loggedIn) {
        window.location.href = "../login/index.html";
    }
})();
