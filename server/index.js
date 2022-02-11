const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.",
					 "Accept something that you cannot change, and you will feel better",
					 "Allow compassion to guide your decisions", "Good news will be brought to you by mail", "Now is the time to try something new",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});


//const goals = require('./db.json')
let globalId = 1

module.exports = {
    getGoals: (req, res) => res.status(200).send(goals),
    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },
    createGoal: (req, res) => {
        let newGoal = {
            id: globalId,
            goal
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++
    },
    updateGoal: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = goals.findIndex(elem => elem.id === +id)
}
}

//Endpoints
const {
  getGoals,
  deleteGoal,
  createGoal,
  updateGoal,
} = require("./controller");

app.get("/api/goals", getGoals);
app.delete("/api/goals/:id", deleteGoal);
app.post("/api/goals", createGoal);
app.put("/api/goals/:id", updateGoal);

app.listen(4000, () => console.log("Server running on 4000"));
