const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
PORT = 3000;

app.get("/users", (req ,res)=>{

    const html = `
    <ul>
    ${users.map(u=>`<li> ${u.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
});

app.route("/api/users/:id")
.get((req, res)=>{
    const id = (Number)(req.params.id);
    const user = users.find(u => u.id === id);
    const data = JSON.stringify(user);
    res.send(`<h1>${data}</h1>`);
    // res.send(user.first_name);
})
.patch((req, res)=>{

})
.delete((req, res)=>{
    
})



app.get("/api/users" , (req, res)=> {
   return res.json(user);
})


app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))
