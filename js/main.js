const form = document.querySelector('#newTaskForm');
const taskList=document.querySelector('#taskList');

let tasks=[];


if (localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function(item){
        const taskHTML=`
    <li class="list-group-item d-flex justify-content-between">
    <span class="task-title">${item}</span>
    <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
    </li>
`;

   taskList.insertAdjacentHTML('afterbegin',taskHTML);  
    });
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const taskInput=document.querySelector('#addNewTask')
    const taskText=taskInput.value;

    tasks.push(taskText)

    localStorage.setItem('tasks',JSON.stringify(tasks));
    // console.log(taskText);
    
    const taskHTML=`
    <li class="list-group-item d-flex justify-content-between">
    <span class="task-title">${taskText}</span>
    <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
    </li>
`;
   console.log(taskHTML);
   taskList.insertAdjacentHTML('afterbegin',taskHTML);
    
   taskInput.value = "";
  })
  
  //delete task
  // listening for a click inside the task list
taskList.addEventListener('click',function(event){

    if(event.target.getAttribute("data-action")=="delete-task"){

        const textText = event.target.closest('li').querySelector('.task-title').textContent;

        const taskIndex = tasks.indexOf(textText)
        //console.log(taskIndex);
   
        tasks.splice(taskIndex,1);

        event.target.parentElement.remove()
        
    }
    
})



