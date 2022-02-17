const addForm = document.getElementById('add-form')
const addInput = document.getElementById('title')
const goalHolder = document.getElementById('goals-container')
const deleteBtn = document.getElementById('deleteButton')


function updateGoal() {
    const newGoal = document.getElementById(`${this.id}`)
    axios.put(`http://localhost:4000/api/goals/${this.id}`)
    .then(res => {
        console.log(newGoal)
        newGoal.setAttribute('class', res.data.complete)
        if (newGoal){
            newGoal.style.color = 'red'
        } else {
            newGoal.style.color = 'black' 
        }
    })
}


function addGoal(e) {
    e.preventDefault()
    let goal = addInput.value
    axios.post('http://localhost:4000/api/goals', {goal})
    .then(res => {
        //console.log(res.data)
        const newGoal = document.createElement('h2')
        newGoal.addEventListener('click', updateGoal)
        newGoal.setAttribute('id', res.data.id)
        newGoal.innerText = res.data.goal
        goalHolder.appendChild(newGoal)
    })
    addInput.value = ''
}

addForm.addEventListener('submit', addGoal)

function deleteGoal() {
    axios.delete('http://localhost:4000/api/goals')
    .then(res => {
        while (goalHolder.firstChild) {
            goalHolder.removeChild(goalHolder.firstChild);
        }
    })
}
deleteBtn.addEventListener('click', deleteGoal)






//create function in backend controller, set up end point in backend, create function in front end to make the backend function work, then finish setting up function on backend