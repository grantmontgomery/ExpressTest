const express = require("express")
const path = require("path")
const members = require("./Members")
const logger = require("./middleware/logger")


const app = express()




//Init middleware
app.use(logger)

//Attaches file to a section on local host

// app.get("/", (req, resp) => {
//     resp.sendFile(path.join(__dirname, "public", "index.html"))
// })



//Gets all members

app.get("/api/members", (req, res) => {
    res.json(members)
})

//Set static folder

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))