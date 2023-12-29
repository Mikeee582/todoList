const input = document.getElementById('input');
const todosUl =  document.getElementById('todos');
const form = document.getElementById('form');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => addTodo(todo)) 

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    addTodo(input);
})

    const storageTodos = JSON.parse(localStorage.getItem('todos'));



let newTodo;

function addTodo(todo) {
    
    let todoText = todo.value;
    console.log(todoText);

    newTodo = document.createElement('li');

    newTodo.textContent = todoText;

    localStorage.setItem('data', todoText);

    

    // const storageTodo = JSON.parse(newTodo);
    // console.log(storageTodo);


    todosUl.appendChild(newTodo);

    newTodo.addEventListener('click',(e)=>{
        e.target.classList.add('completed');
        updateStorage();
    })

    newTodo.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        e.target.remove();
        updateStorage();
    })

    

}

updateStorage();

function updateStorage() {
    newTodo = document.querySelectorAll('li');

    const todos = [];

    newTodo.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classlist.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}