var express = require('express');
var router = express.Router();

const users=[];

// POST USER
router.post("/",(req,res)=>{
  const newUser = req.body;
  if(newUser.name){
    users.push(newUser);
    res.redirect("/");
  } else{
    res.render("index",{error:"por favor ingresa el nombre del usuario"})
  }
});

/* GET users listing. */
router.get('/', (req, res)=> {
  res.render('index',{users});
});

module.exports = router;
