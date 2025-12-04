(function () {
  try {
    const logout = document.getElementById('logout-btn');
    const toggle = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const items = document.querySelectorAll('.menu li');

    // Load user
    const user = JSON.parse(localStorage.getItem('tm_user') || 'null');
    if (user) {
      const nameEl = document.getElementById('sidebar-username');
      if (nameEl) nameEl.textContent = user.name || user.email || "User";
    }

    // Logout
    logout.onclick = () => {
      localStorage.removeItem('tm_loggedIn');
      top.location.href = '../../pages/auth-pages/login/index.html';
    };

    // Sidebar Toggle
    if (toggle) {
      toggle.onclick = () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem(
          'tm_sidebar_collapsed',
          sidebar.classList.contains('collapsed') ? '1' : '0'
        );
      };
    }

    // Restore toggle state
    if (localStorage.getItem('tm_sidebar_collapsed') === '1') {
      sidebar.classList.add('collapsed');
    }

    // FIXED PAGE ROUTING HERE ↓↓↓↓↓
    items.forEach(li => {
      li.addEventListener('click', () => {
        const page = li.dataset.page;
        if (page) {
          // CORRECT PATH
          top.location.href = `../../pages/auth-pages/${page}/index.html`;
;
        }
      });
    });

  } catch (e) {
    console.error(e);
  }
})();
