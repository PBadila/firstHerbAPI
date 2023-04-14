
const express = require('express');
const router = express.Router();
//fs allows me to be able to use the read and write file methods
const fs = require('fs')

//establishes a connection to the users json database
const USERS_FILE = `./data/users.json`

/* GET users listing. ALL USERS */
router.get('/', (req, res, next)=> {

    fs.readFile(USERS_FILE, 'utf8', (err,data) => {
      if(err){
        console.error(err)
        res.status(500).send('There was a problem reading this file.')
        return 
      }
      res.json(JSON.parse(data));
    })
});

//GET a single user
router.get('/:id', (req,res,next) =>{
  const {id} = req.params
  let userSel
  console.log(`Getting user id: ${id}`)
  fs.readFile(USERS_FILE, 'utf8', (err,data) => {
    if(err){
      console.error(err)
      res.status(500).send('There was a problem reading this file.')
      return 
    }
    //change data into an array so that we can perform array methods on it, in this case find()
    const users = JSON.parse(data)

    //now find the one user that matches the id that was entered
    userSel = users.find(user => user.id == id)
  
  
  res.json(userSel)
})
})



//POST a new user
router.post('/', (req,res,next)=>{
  console.log('posting')
  //read contents of JSON users file
  fs.readFile(USERS_FILE, 'utf8',(err,data)=>{
    if(err){
      console.error(err)
      res.status(500).send('error')
      return
    }
    //put the data in array form so we can push to it (JSON form is slightly diff)
    const users = JSON.parse(data)

    //new information is put into a variable
    const newUser = {
      id: (users.length + 1).toString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      postalZip: req.body.postalZip
    }

    console.log(newUser)
    //adding new info to user array
    users.push(newUser)
    console.log(users)

    fs.writeFile(USERS_FILE, JSON.stringify(users),err =>{
      if(err){
        console.error(err)
        res.status(500).send('There is a problem writing to the file.')
        return
      }
      //shouldn't this be user and not newUser??? this is just returning the JSON of the new resource to confirm that it was received.
      res.json(newUser)
    })
  })
})

module.exports = router;
