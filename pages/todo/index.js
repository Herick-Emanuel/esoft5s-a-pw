function saveTodo() {
    const todoInput = document.getElementById('todoInput')
    const todoList = document.getElementById('todoList')
  
    if (todoInput.value.trim() !== '') {
      const li = document.createElement('li')
      li.textContent = todoInput.value
  
      todoList.appendChild(li)
  
      const key = `todo_${Date.now()}`
      localStorage.setItem(key, todoInput.value)
  
      todoInput.value = ''
    }
  }
  
  function loadTodos() {
    const todoList = document.getElementById('todoList')
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const li = document.createElement('li')
      li.textContent = localStorage.getItem(key)
  
      todoList.appendChild(li)
    }
  }
  
  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    saveTodo()
  })
  
  loadTodos()