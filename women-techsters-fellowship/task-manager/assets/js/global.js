

function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return document.querySelectorAll(sel); }


function authGuard() {
  if (localStorage.getItem('tm_loggedIn') !== 'true') {
    window.location.href = '../auth-pages/login/index.html';
  }
}

function redirectIfLoggedIn() {
  if (localStorage.getItem('tm_loggedIn') === 'true') {
    window.location.href = '../dashboard/index.html';
  }
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('tm_user')) || null;
  } catch(e) { return null; }
}

function saveUser(userObj) {
  localStorage.setItem('tm_user', JSON.stringify(userObj));
}

function uid() {
  return 'id-' + Date.now() + '-' + Math.floor(Math.random()*10000);
}
