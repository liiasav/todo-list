const input = document.querySelector ('.list-text');
const button = document.querySelector ('.todo-btn');
const list = document.querySelector ('.todo-list');

button.addEventListener('click', () => {
    const li = document.createElement ('li');
    li.className = 'todo-list-items';
    li.innerText = input.value;
    const deleteBtn = document.createElement ('button');
    deleteBtn.innerText = 'Delete';
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', () => {
         list.removeChild(li);
    })

});