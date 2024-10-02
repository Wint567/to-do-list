const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}

const tasks = [];

//Tracking a click on a button to add a task
dom.add.onclick = () => {
    const newTaskText = dom.new.value;
    if(newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks)
        dom.new.value = '';
    }
    
}

//Adding a task
function addTask(text, list) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text,
        isComplete: false
    }
    list.push(task)
}

//Checking for duplicate tasks
function isNotHaveTask(text, list) {
    let isNotHave = true;

    list.forEach((task) => {
        if(task.text === text) {
            alert('this task is already exist')
            isNotHave = false;
            dom.new.value = '';
        }
    })

    return isNotHave;
}