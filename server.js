const express = require("express")


const app = express()

app.get("/", (req, res) => {
    res.send(`<p>99 Bottles of beer on the wall</p>
    <p><a href = '/${99-1}'>Take one down, pass it around</a></p>`)

})

//Route for displaying the bottle number
app.get("/:number_of_bottles", (req, res) => {
    const number_of_bottles = req.params.number_of_bottles
    if (number_of_bottles === "0") {
        res.send(`<p>No more bottles on the wall. 
        <a href ='/'>Start Over</a></p>`)
    } else {
        res.send(`<p>${number_of_bottles} Bottles of beer on the wall</p>
        <p><a href='/${number_of_bottles - 1}'>Take one down, pass it around</a></p>
        `)
    }
    
})


app.listen(3000, () => {console.log("server is listening on port 3000")})