let tasks = []

// const tasksJSON = localStorage.getItem('tasks')
// if (tasksJSON !== null) {
//     tasks = JSON.parse(tasksJSON)
// }

var renderedTemplate = (value, taskLength) => {

    // Creating elements
    var elementDiv = document.createElement('DIV');
    var label = document.createElement('label');
    var checkBox = document.createElement('input');
    var taskText = document.createElement('span')

    // Adding attributes
    elementDiv.classList.add("uk-margin", "uk-grid-small", "uk-child-width-auto", "uk-grid");
    elementDiv.setAttribute("id", "task-div");
    label.setAttribute("id", "task-label");
    checkBox.setAttribute("id", "task-check")
    checkBox.setAttribute("name", "task")
    checkBox.setAttribute("value", "1")
    checkBox.classList.add("uk-checkbox", "uk-margin-right")
    checkBox.setAttribute("type", "checkbox")

    // Implementing checkbox event
    // checkBox.checked = value.completed
    console.log(checkBox.checked);
    label.appendChild(checkBox)

    checkBox.addEventListener('change', function () {
        var id = 0;
        id += 1;
        if (checkBox.checked) {
            console.log(checkBox.checked)
            var checked = []
            var newCheck = {
                id: id,
                value: checkBox.checked
            }

            checked.forEach(x => {
                if (x.id === newCheck.id ){
                    checked.push(newCheck)
                }
            })
           
            console.log(checked)
            UIkit.util.ready(function () {
                if (taskLength !== null) {
                    var bar = document.getElementById('progressbar');

                    // console.log(barLength)
                    bar.max = 100
                    var barLength = Math.round((1 / 6) * bar.max);
                    bar.value += barLength;
                    console.log(bar.max);
                    console.log(bar.value);
                } else {
                    alert('List is empty!')
                }

            });
        } else {
            console.log(checkBox.checked)
            var unchecked = []
            unchecked.push(checkBox.checked)
            console.log(unchecked)
            UIkit.util.ready(function () {
                if (taskLength !== null) {
                    var bar = document.getElementById('progressbar');

                    // console.log(barLength)
                    bar.max = 100
                    var barLength = Math.round((1 / 6) * bar.max);
                    bar.value -= barLength;
                    // console.log(bar.max);
                    console.log(bar.value);
                } else {
                    alert('List is empty!')
                }

            });
        }
    });

    // Setup the task text
    taskText.textContent = value.task
    label.appendChild(taskText)


    document.getElementById("task-list").appendChild(elementDiv);
    elementDiv.appendChild(label);
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let x = {
        task: event.target.elements.task.value,
        completed: false
    }
    if (tasks.length <= 6) {
        tasks.push(x);
        console.log(tasks);
    } else {
        alert('Max number of entries reached!');
    }

    // Rendering task
    if (x.task === "") {
        alert('Please enter your task!')
    } else {
        var arrLength = tasks.length
        console.log(arrLength);
        renderedTemplate(x, arrLength);
        e.target.task.value = ""
    }

})

// var checkBox = document.getElementById('task-check')
// console.log(checkBox)
// var test = document.getElementById('task-check').value
// console.log(test)

// document.getElementById('task-check').addEventListener('change', function (e) {
//     console.log(e.target.checked)
//     // if( e.target.checked){
//     //     // x.completed = true
//     //     // label.innerHTML = `<ul><input id="task-check" class="uk-checkbox" type="checkbox" >&nbsp; <strike>${x.task}</strike></ul>`
//     // }else {
//     //     x.completed = false
//     // }
//     // renderTodos(todos, filters)
// })


// console.log(tasks)

// Storing tasks in local storage
// localStorage.setItem('tasks', JSON.stringify(tasks))



// var checkBox = document.getElementById('task-check')
// // console.log(checkBox)
// checkBox.addEventListener('change', (e) => {
//     console.log(checkBox.value)
// })
// if (checkBox.checked == true) {
//     // text.style.display = "block";
// } else {
//     text.style.display = "none";
// }


// Another solution
// document.getElementById("task-list").innerHTML='';
// tasks.forEach((x) => {
// var elementDiv = document.createElement('DIV');
// elementDiv.classList.add("uk-margin", "uk-grid-small", "uk-child-width-auto", "uk-grid");
// elementDiv.setAttribute("id", "task-div");
// var label = document.createElement('label')
// label.setAttribute("id", "task-label")
// label.innerHTML = `<ul><input class="uk-checkbox" type="checkbox" >&nbsp; ${x.task}</ul>`
// document.getElementById("task-list").appendChild(elementDiv);
// document.getElementById("task-div").appendChild(label);

// })