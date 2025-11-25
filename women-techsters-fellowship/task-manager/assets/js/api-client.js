
const API = (function(){
  const useMock = true; 
  function saveToken(t){ localStorage.setItem('tm_token', t); }
  function getToken(){ return localStorage.getItem('tm_token'); }

  function mockLogin(email, password){
    localStorage.setItem('tm_logged_in', '1');
    localStorage.setItem('tm_email', email);
    localStorage.setItem('tm_name', email.split('@')[0] || 'Student');
    saveToken('demo-token');
    return Promise.resolve({ ok:true, token:'demo-token' });
  }
  function mockSignup(name, email, password){
    localStorage.setItem('tm_name', name);
    localStorage.setItem('tm_email', email);
    localStorage.setItem('tm_logged_in','1');
    saveToken('demo-token');
    return Promise.resolve({ ok:true, token:'demo-token' });
  }
  function mockGetMetrics(){
    return Promise.resolve({
      activeTasks: localStorage.getItem('tm_tasks') || '0',
      totalExpenses: localStorage.getItem('tm_expenses') || '$0.00',
      totalNotes: localStorage.getItem('tm_notes') || '0',
      completion: localStorage.getItem('tm_completion') || '0%'
    });
  }

  return {
    login: function(email,password){ if(useMock) return mockLogin(email,password); return Promise.reject('not implemented'); },
    signup: function(name,email,password){ if(useMock) return mockSignup(name,email,password); return Promise.reject('not implemented'); },
    getMetrics: function(){ if(useMock) return mockGetMetrics(); return Promise.reject('not implemented'); },
    createTask: function(){ if(useMock){ const prev=parseInt(localStorage.getItem('tm_tasks')||'0',10); localStorage.setItem('tm_tasks', String(prev+1)); return Promise.resolve({ok:true}); } return Promise.reject('not implemented'); },
    trackExpense: function(amount){ if(useMock){ const prev = localStorage.getItem('tm_expenses')||'$0.00'; const num = parseFloat(prev.replace('$','')||0)+parseFloat(amount||0); localStorage.setItem('tm_expenses','$'+num.toFixed(2)); return Promise.resolve({ok:true}); } return Promise.reject('not implemented'); },
    writeNote: function(){ if(useMock){ const prev=parseInt(localStorage.getItem('tm_notes')||'0',10); localStorage.setItem('tm_notes', String(prev+1)); return Promise.resolve({ok:true}); } return Promise.reject('not implemented'); },
    logout: function(){ localStorage.removeItem('tm_token'); localStorage.removeItem('tm_logged_in'); return Promise.resolve(); }
  };
})();
