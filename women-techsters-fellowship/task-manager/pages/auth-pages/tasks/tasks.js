const KEY = 'tm_tasks';


const btnMyTasks = document.getElementById('btnMyTasks');
const btnAi = document.getElementById('btnAi');
const panelTasks = document.getElementById('panelTasks');
const panelAi = document.getElementById('panelAi');

const openAdd = document.getElementById('openAdd');
const modal = document.getElementById('modal');
const cancelTask = document.getElementById('cancelTask');
const saveTask = document.getElementById('saveTask');

const taskTitle = document.getElementById('taskTitle');
const taskDesc = document.getElementById('taskDesc');
const taskDate = document.getElementById('taskDate');

const emptyBox = document.getElementById('emptyBox');
const activeList = document.getElementById('activeList');
const completedList = document.getElementById('completedList');

const activeCountEl = document.getElementById('active-count');
const completedCountEl = document.getElementById('completed-count');

const aiGenerate = document.getElementById('aiGenerate');
const aiBox = document.getElementById('aiBox');
const aiLatest = document.getElementById('aiLatest');
const aiHistory = document.getElementById('aiHistory');


btnMyTasks.addEventListener('click', () => {
  btnMyTasks.classList.add('active'); btnAi.classList.remove('active');
  panelTasks.classList.remove('hidden'); panelAi.classList.add('hidden');
});
btnAi.addEventListener('click', () => {
  btnAi.classList.add('active'); btnMyTasks.classList.remove('active');
  panelAi.classList.remove('hidden'); panelTasks.classList.add('hidden');
});


openAdd.addEventListener('click', () => modal.classList.remove('hidden'));
cancelTask.addEventListener('click', () => {
  modal.classList.add('hidden');
  clearModal();
});


function loadTasks() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch(e){ return []; }
}
function saveTasks(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}


function renderAll() {
  const tasks = loadTasks();
  const active = tasks.filter(t => !t.done);
  const completed = tasks.filter(t => t.done);

  
  activeCountEl.textContent = active.length;
  completedCountEl.textContent = completed.length;

  if (tasks.length === 0) {
    emptyBox.classList.remove('hidden');
    activeList.parentElement.parentElement.classList.add('hidden');
  } else {
    emptyBox.classList.add('hidden');
    activeList.parentElement.parentElement.classList.remove('hidden');
  }

  
  activeList.innerHTML = '';
  active.forEach(t => {
    const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `
      <div class="task-left">
        <div class="task-title">${escapeHtml(t.title)}</div>
        <div class="task-meta">
          ${escapeHtml(t.desc || '')}
          ${t.date ? ' • ' + t.date : ''}
        </div>
      </div>
      <div>
        <button class="btn-primary btn-complete" data-id="${t.id}">Complete</button>
        <button class="btn-muted btn-delete" data-id="${t.id}">Delete</button>
      </div>
    `;
    activeList.appendChild(div);
  });

  
  completedList.innerHTML = '';
  completed.forEach(t => {
    const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `
      <div class="task-left">
        <div class="task-title">${escapeHtml(t.title)}</div>
        <div class="task-meta">
          ${escapeHtml(t.desc || '')}
          ${t.date ? ' • ' + t.date : ''}
        </div>
      </div>
      <div>
        <button class="btn-muted btn-delete" data-id="${t.id}">Delete</button>
      </div>
    `;
    completedList.appendChild(div);
  });
}


function escapeHtml(str){
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


saveTask.addEventListener('click', () => {
  const title = taskTitle.value.trim();
  const desc = taskDesc.value.trim();
  const date = taskDate.value;

  if (!title) {
    taskTitle.focus(); 
    return;
  }

  const tasks = loadTasks();
  const item = {
    id: 't-' + Date.now(),
    title,
    desc,
    date,
    done: false
  };

  tasks.push(item);
  saveTasks(tasks);
  modal.classList.add('hidden');
  clearModal();
  renderAll();
});


document.body.addEventListener('click', e => {
  const tasks = loadTasks();

  if (e.target.classList.contains('btn-complete')) {
    const id = e.target.dataset.id;
    const idx = tasks.findIndex(t => t.id === id);
    if (idx >= 0) {
      tasks[idx].done = true;
      saveTasks(tasks);
      renderAll();
    }
  } else if (e.target.classList.contains('btn-delete')) {
    if (!confirm('Delete this task?')) return;
    const id = e.target.dataset.id;
    const newTasks = tasks.filter(t => t.id !== id);
    saveTasks(newTasks);
    renderAll();
  }
});


function clearModal(){
  taskTitle.value = '';
  taskDesc.value = '';
  taskDate.value = '';
}


aiGenerate.addEventListener('click', () => {
  const tasks = loadTasks();
  let text = 'No tasks to summarize.';
  if (tasks.length) {
    const active = tasks.filter(t => !t.done).length;
    const completed = tasks.filter(t => t.done).length;
    text = `You have ${active} active task(s) and ${completed} completed task(s). Focus on your highest priority items first.`;
  }
  aiBox.innerHTML = `<div style="text-align:left">${escapeHtml(text)}</div>`;
  const history = JSON.parse(localStorage.getItem('tm_ai_history') || '[]');
  history.unshift({ time: new Date().toLocaleString(), summary: text });
  localStorage.setItem('tm_ai_history', JSON.stringify(history));
  updateAiCount();
});

function updateAiCount(){
  const history = JSON.parse(localStorage.getItem('tm_ai_history') || '[]');
  aiHistory.textContent = `History (${history.length})`;
}


renderAll();
updateAiCount();