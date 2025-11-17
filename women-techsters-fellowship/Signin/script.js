// BEGINNER JavaScript - no libraries
// Handles tab switching, form submit behaviors, and moving indicator

// Get elements
const card = document.getElementById('card');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const formLogin = document.getElementById('form-login');
const formSignup = document.getElementById('form-signup');
const tabIndicator = document.getElementById('tab-indicator');

const createBtn = document.getElementById('create-btn');
const nextBtn = document.getElementById('next-btn');

// Start with Sign Up active (as in screenshot)
function setSignupActive(){
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  formSignup.classList.remove('hidden');
  formLogin.classList.add('hidden');
  // set card size to signup-mode (exact sizes)
  card.classList.remove('login-mode');
  card.classList.add('signup-mode');
  card.classList.remove('login-active');
  // indicator centered under Sign Up -> we set left to center by CSS default
  tabIndicator.style.left = 'calc(50% - 99px)'; // centers 198px pill in 404px tabs
}

// Set Login active
function setLoginActive(){
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  formLogin.classList.remove('hidden');
  formSignup.classList.add('hidden');
  // set card size to login-mode
  card.classList.remove('signup-mode');
  card.classList.add('login-mode');
  card.classList.add('login-active');
  // indicator moves to left for Login (6px inside tabs)
  tabIndicator.style.left = '6px';
}

// Attach click handlers
tabSignup.addEventListener('click', function(){
  setSignupActive();
});
tabLogin.addEventListener('click', function(){
  setLoginActive();
});

// Default init
setSignupActive();


// FORM BEHAVIORS (Beginner-friendly validation + simple loading simulation)

// Helper to show temporary loading on a button
function simulateLoading(button, textDuring, textAfter){
  button.disabled = true;
  const original = button.textContent;
  button.textContent = textDuring;
  setTimeout(function(){
    alert(textAfter);
    button.textContent = original;
    button.disabled = false;
  }, 1400);
}

// Sign up submit
formSignup.addEventListener('submit', function(e){
  e.preventDefault();
  // simple validation
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pw = document.getElementById('signup-password').value;
  if(name === '' || email === '' || pw.length < 6){
    alert('Please fill in all fields. Password must be at least 6 characters.');
    return;
  }
  // simulate creating
  simulateLoading(createBtn, 'Creating...', 'Account Created Successfully!');
});

// Login submit
formLogin.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pw = document.getElementById('login-password').value;
  if(email === '' || pw === ''){
    alert('Please enter your email and password.');
    return;
  }
  simulateLoading(nextBtn, 'Loading...', 'Logged In Successfully!');
});

// Extra: when window resizes, if small, reset indicator placement for better look
window.addEventListener('resize', function(){
  const tabsWidth = 404; // original width
  if(window.innerWidth <= 520){
    // place indicator under the currently active tab visually on small screens
    if(tabLogin.classList.contains('active')){
      tabIndicator.style.left = '6px';
    } else {
      tabIndicator.style.left = '6px'; // keep left for small screens (center pill would wrap)
    }
  } else {
    // restore desktop behavior
    if(tabSignup.classList.contains('active')){
      tabIndicator.style.left = 'calc(50% - 99px)';
    } else {
      tabIndicator.style.left = '6px';
    }
  }
});
