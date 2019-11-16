const express = require("express")
const uuid = require("uuid")
const router = express.Router()
const members = require("../../Members")


//Gets all members

router.get("/", (req, res) => {
    res.json(members)
})

//Get a single Member

router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg: `No member with the id of ${req.params.id} found.`})
    }
})

// Create a member 
router.post("/", (req, res) => {
    const newMember ={
        id: uuid.v4,
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }
    if(!newMember.name || !newMember.email){
        res.status(400).json({msg: "Please include a name and email."})
    }
    else{
        members.push(newMember)
        res.json(members)
    }

})


//Update Member
router.put("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found){
        const updMember= req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name
                member.email = req.body.email
            }
        })
    }
    else{
        res.status(400).json({msg: `No member with the id of ${req.params.id} found.`})
    }
})

module.exports = router