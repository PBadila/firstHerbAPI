const express = require('express');
const router = express.Router();
//fs allows me to be able to use the read and write file methods
const fs = require('fs')

//establishes a connection to the users json database
const HERBS_FILE = `./data/herbs.json`

/* GET herbs listing. ALL HERBS */
router.get('/', (req, res, next)=> {

    fs.readFile(HERBS_FILE, 'utf8', (err,data) => {
      if(err){
        console.error(err)
        res.status(500).send('There was a problem reading this file.')
        return 
      }
      res.json(JSON.parse(data));
    })
});

//GET a single herb by id
router.get('/id/:id', (req,res,next) =>{
  const {id} = req.params
  
  
 
  fs.readFile(HERBS_FILE, 'utf8', (err,data) => {
    if(err){
      console.error(err)
      res.status(500).send('There was a problem reading this file.')
      return 
    }
    //change data into an array so that we can perform array methods on it, in this case find()
    const herbs = JSON.parse(data)

    //now find the one user that matches the id that was entered
    const herb = herbs.find(herb => herb.id == id)
  
  
  res.json(herb)
})
})

//GET a single herb by name

router.get('/commonName/:name', (req,res,next) =>{
  const {name} = req.params
  let common = req.params['name']
  let common2 = req.params.name
  console.log(common)
  console.log(common2)
 
  fs.readFile(HERBS_FILE, 'utf8', (err,data) => {
    if(err){
      console.error(err)
      res.status(500).send('There was a problem reading this file.')
      return 
    }
    //change data into an array so that we can perform array methods on it, in this case find()
    const herbs = JSON.parse(data)
    console.log(herbs)

    //now find the one user that matches the id that was entered
    const herb = herbs.find(herb => herb.name == name)
  
  
  res.json(herb)
})
})

//GET herbs by herbal action

router.get('/herbalAction/:action', (req,res,next) =>{
  const {action} = req.params

 
  fs.readFile(HERBS_FILE, 'utf8', (err,data) => {
    if(err){
      console.error(err)
      res.status(500).send('There was a problem reading this file.')
      return 
    }
    //change data into an array so that we can perform array methods on it, in this case find()
    const herbs = JSON.parse(data)
    
    let actionList = []
    //now find the one user that matches the id that was entered
    herbs.forEach(herb => {
      if(herb.herbal_actions.includes(action)){
        actionList.push(herb)
      }
    });
  
  
  res.json(actionList)
})
})



//POST a new herb
router.post('/', (req,res,next)=>{
  console.log('posting')
  //read contents of JSON users file
  fs.readFile(HERBS_FILE, 'utf8',(err,data)=>{
    if(err){
      console.error(err)
      res.status(500).send('error')
      return
    }
    //put the data in array form so we can push to it (JSON form is slightly diff)
    const herbs = JSON.parse(data)

    //new information is put into a variable
    const newHerb = {
      id: (herbs.length + 1).toString(),
      name: req.body.name,
      botanical_name: req.body.botanical_name,
      description: req.body.description,
      consumption_method: req.body.consumption_method,
      herbal_actions: req.body.herbal_actions
     
    }

    console.log(newHerb)
    //adding new info to user array
    herbs.push(newHerb)
    console.log(herbs)

    fs.writeFile(HERBS_FILE, JSON.stringify(herbs),err =>{
      if(err){
        console.error(err)
        res.status(500).send('There is a problem writing to the file.')
        return
      }
      //shouldn't this be user and not newUser??? this is just returning the JSON of the new resource to confirm that it was received.
      res.json(newHerb)
    })
  })
})

module.exports = router;
