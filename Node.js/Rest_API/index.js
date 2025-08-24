const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const { stat } = require('fs/promises');
const app = express();
PORT = 3000;

app.use(express.urlencoded({extended: true})); // convert form data into object and put in body

// app.use((req, res , next)=>{
//     console.log("Hello from middleware 1");
//     next(); // it will forwad to next function, if dont use it res will get stuck in loop
// })

app.use((req, res, next)=>{
    fs.appendFile('log.txt', `${Date.now()}: ${req.method} ${req.path} `, (err)=>{
        if(err){
        console.log("error writing file");
        }
    })
    next();
})

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
.post((req, res)=>{
    const body = req.body;
    users.push({id: users.length +1, ...body})
    fs.writeFile('MOCK_DATA.json',JSON.stringify(users), (err)=>{
        if (err) {
      return res.status(500).json({ status: "error", message: "Failed to save data" });
    }
        res.json({status: "succes", id: users.length});
    });
      

})
.patch((req, res)=>{
    const id = (Number)(req.params.id);
    const body = req.body;
    const UpdateUser = users.find(u=> u.id === id);

    if(UpdateUser){
      Object.assign(UpdateUser , body); // it will copy or update the content of updateuser from body;
        fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to update user" });
        }

        res.json({ status: "success", message: "User updated successfully", user });
    });
         
    }

})
.delete((req, res)=>{
    const id = (Number)(req.params.id);
    const DeleteUser = users.find(u=> u.id === id);

    if(DeleteUser){
       const newList= users.filter(u => u.id !== DeleteUser.id);  
        fs.writeFile('MOCK_DATA.json', JSON.stringify(newList), ()=>{
            users.splice(0, users.length, ...newList);  //  it will remove all the elemnts and push new elemnts list
            res.json({status: "User Deleted Successfully"});
        });

    }

})



app.get("/api/users" , (req, res)=> {
   return res.json(user);
})


app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))
