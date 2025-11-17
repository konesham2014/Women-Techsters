// signup.js - beginner JS to handle tabs and signup submit

const card = document.getElementById('card');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const formSignup = document.getElementById('form-signup');
const tabIndicator = document.getElementById('tab-indicator');
const createBtn = document.getElementById('create-btn');

function setSignupActive(){
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  card.classList.add('signup-active');
  card.classList.remove('login-active');
  // CSS handles indicator via class
}

function goToLogin(){
  // user clicked Login tab => navigate to login page
  window.location.href = '../login/index.html';
}

tabSignup.addEventListener('click', setSignupActive);
tabLogin.addEventListener('click', goToLogin);

formSignup.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pw = document.getElementById('signup-password').value;
  if(!name || !email || pw.length < 6){
    alert('Please fill in all fields. Password must be at least 6 characters.');
    return;
  }
  createBtn.disabled = true;
  const prev = createBtn.textContent;
  createBtn.textContent = 'Creating...';
  setTimeout(function(){
    alert('Account Created Successfully!');
    createBtn.disabled = false;
    createBtn.textContent = prev;
  }, 1200);
});
