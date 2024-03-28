
const addTask = document.querySelector('#addTask');
const tasks = document.querySelectorAll('.tasks')[0];

addTask.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(addTask);
    const newTask = formData.get('newTask');
    addTask.reset();
    const li = document.createElement('li');
    li.classList.add('task');
    const div1 = document.createElement('div');
    div1.classList.add('task-name');
    div1.innerText = newTask;
    const div2 = document.createElement('div');
    div2.classList.add('task-actions');
    const button2 = document.createElement('button');
    button2.classList.add('delete');
    button2.innerText = 'Delete';
    div2.appendChild(button2);
    li.appendChild(div1);
    li.appendChild(div2);
    tasks.appendChild(li);

    const deleteTask = document.querySelectorAll('.delete');
    const deleteTaskArr = Array.from(deleteTask);
    deleteTaskArr.forEach(task => {
        task.addEventListener('click', e => {
            e.target.parentElement.parentElement.remove();
            
            
        });
    });
});
