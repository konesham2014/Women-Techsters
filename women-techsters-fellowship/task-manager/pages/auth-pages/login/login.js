const card = document.getElementById('card');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const formLogin = document.getElementById('form-login');
const nextBtn = document.getElementById('next-btn');

function setLoginActive(){
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  card.classList.add('login-active');
  card.classList.remove('signup-active');
}

function goToSignup(){
  window.location.href = '../signup/index.html';
}

tabLogin.addEventListener('click', setLoginActive);
tabSignup.addEventListener('click', goToSignup);

formLogin.addEventListener('submit', function(e){
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const pw = document.getElementById('login-password').value;

  if(!email || !pw){
    alert('Please enter your email and password.');
    return;
  }

  nextBtn.disabled = true;
  const prev = nextBtn.textContent;
  nextBtn.textContent = 'Loading...';

  setTimeout(function(){
    // "login success"
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", name);
    
    window.location.href = '../dashboard/index.html';

    nextBtn.disabled = false;
    nextBtn.textContent = prev;

  }, 900);
});
