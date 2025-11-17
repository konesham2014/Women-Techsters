// components/button/button.js - simple helper for buttons
document.addEventListener('click', function(e){
  if(e.target.matches('.btn')){
    e.target.blur();
  }
});
