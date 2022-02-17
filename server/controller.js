let globalId = 1

let goals = []

module.exports = {
    getGoals: (req, res) => res.status(200).send(goals),
    deleteGoal: (req, res) => {
        goals = []
        res.status(200).send(goals)
    },
    createGoal: (req, res) => {
        const {goal} = req.body
        let newGoal = {
            id: globalId,
            goal,
            complete: false
        }
        goals.push(newGoal)
        const goals2 = [...goals]
        let goalToSend = goals2.pop()
        res.status(200).send(goalToSend)
        globalId++
    },
    updateGoal: (req, res) => {
        let {id} = req.params
        const editIndex = +id - 1
        goals[editIndex].complete = true
        res.status(200).send(goals[editIndex])
        // let {type} = req.body
        // let index = goals.findIndex(elem => elem.id === +id)
}
}