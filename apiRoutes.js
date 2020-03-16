const express = require('express');
const router = express.Router();
const path = require('path')
const db = require('./models')

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

router.get('/exercise', function(req,res){
    res.sendFile(path.join(__dirname, './public/exercise.html'))
})

router.get('/stats', function(req,res){
    res.sendFile(path.join(__dirname, './public/stats.html'))
})

router.post('/api/workouts', function(req,res){
    db.create(req.body).then(response=>{
        console.log(response)
        res.json(response)
    })
})

router.get('/api/workouts', function(req,res){
    db.find().then(response=>{
        console.log(response)
        res.json(response)
    })
})


module.exports = router
