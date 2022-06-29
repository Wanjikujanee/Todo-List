// const form = document.getElementById('form')
// const input = document.getElementById('input')
// const todosUL = document.getElementById('todos')

// const todos = JSON.parse(localStorage.getItem('todos'))

// if(todos) {
//     todos.forEach(todo => addTodo(todo))
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addTodo()
// })

// function addTodo(todo) {
//     let todoText = input.value

//     if(todo) {
//         todoText = todo.text
//     }

//     if(todoText) {
//         const todoEl = document.createElement('li')
//         if(todo && todo.completed) {
//             todoEl.classList.add('completed')
//         }

//         todoEl.innerText = todoText

//         todoEl.addEventListener('click', () => {
//             todoEl.classList.toggle('completed')
//             updateLS()
//         }) 

//         todoEl.addEventListener('contextmenu', (e) => {
//             e.preventDefault()

//             todoEl.remove()
//             updateLS()
//         }) 

//         todosUL.appendChild(todoEl)

//         input.value = ''

//         updateLS()
//     }
// }

// function updateLS() {
//     todosEl = document.querySelectorAll('li')

//     const todos = []

//     todosEl.forEach(todoEl => {
//         todos.push({
//             text: todoEl.innerText,
//             completed: todoEl.classList.contains('completed')
//         })
//     })

//     localStorage.setItem('todos', JSON.stringify(todos))
// } 

// let numbers = [1, 2, 3, 4, 5];
// var sum = 0;
// f
// num=[45,70,90,200,300];
// // sum=0
// for(let num=0;num>num.max;num++);
// num+=num
// console.log(num);
// var array = [45,70,3,19,200,3];
// var largest=0

// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);
