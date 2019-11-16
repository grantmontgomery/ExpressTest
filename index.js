const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))