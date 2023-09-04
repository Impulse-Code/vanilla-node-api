const Villain =  require('../models/villainModel.js');
const {getPostData} = require('../utils');

// get all villains
// route GET /api/villains
async function getVillains(req,res){
    try{
        const villains = await  Villain.findAll();
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(JSON.stringify(villains));
        res.end();
    }catch(error){
        console.log(error);
    }
}

// get single villain
// route GET /api/villains/:id
async function getVillain(req,res,id){
    try{
        const villain = await  Villain.findById(id);
        if(!villain){
            res.writeHead(404,{'Content-Type' : 'application/json'});
            res.write(JSON.stringify({message:'Villain not found'}));
            res.end();

        }else{
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.write(JSON.stringify(villain));
            res.end();
        }
        
    }catch(error){
        console.log(error);
    }
}


// create villain
// route POST /api/villains/
async function createVillain(req,res){
    try{
        const body = await getPostData(req);
        const  { name,nickname,super_powers,isAlive,rating,age} =JSON.parse(body)

        const villain = {  
            name,
            nickname,
            super_powers,
            isAlive,
            rating,
            age
        
        };

        const newVillain= await Villain.create(villain);
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(JSON.stringify(newVillain));
        res.end();
        
    }catch(error){
        console.log(error);
    }
}

// update villain
// route PUT /api/villains/:id
async function updateVillain(req,res,id){
    try{
        let villain = await Villain.findById(id);

        if(!villain){
            res.writeHead(404,{'Content-Type' : 'application/json'});
            res.write(JSON.stringify({message:'Villain not found'}));
            res.end();

        }else{

        const body = await getPostData(req);
        const  { name,nickname,super_powers,isAlive,rating,age} =JSON.parse(body)

        villainData = {  
            name: name || villain.name,
            nickname: nickname || villain.nickname,
            super_powers: super_powers|| villain.super_powers,
            isAlive: isAlive || villain.isAlive,
            rating: rating || villain.rating,
            age: age || villain.age,
        

        };

    }

        const updVillain= await Villain.update(id,villainData);
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(JSON.stringify(updVillain));
        res.end();
        
    }catch(error){
        console.log(error);
    }
}

// DELETE A VILLAIN FROM DB
async function removeVillain(req,res,id){
    try{
        const villain = await  Villain.findById(id);

        if(!villain){
            res.writeHead(404,{'Content-Type' : 'application/json'});
            res.write(JSON.stringify({message:'Villain not found'}));
            res.end();

        }else{
            await Villain.remove(id);
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.write(JSON.stringify({message:`Villain ${id} has been removed`}));
            res.end();
        }
        
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getVillains,
    getVillain,
    createVillain,
    updateVillain,
    removeVillain
}