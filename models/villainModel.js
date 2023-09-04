let  villains = require('../data/villains.json');
const {v4:uuidv4} = require('uuid');
const {writeDataToFile} = require('../utils.js');

// Mock function to get all villains
function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(villains);
    });
}

// Mock function to get single villain
function findById(id){
    return new Promise((resolve,reject)=>{
        const villain = villains.find((villain)=>villain.id===id);
        resolve(villain);
    });
}

// Mock function to create  ew villain
function create(villain){
    return new Promise((resolve,reject)=>{
        const newVillain ={id:uuidv4(), ...villain};
        villains.push(newVillain);
        writeDataToFile('./data/villains.json',villains);
        resolve(newVillain);


    });
}

// Mock function to update a villain
function update(id,villain){
    return new Promise((resolve,reject)=>{
        const index =villains.findIndex((v)=>v.id === id);
        villains[index] = {id:uuidv4(), ...villain};

        writeDataToFile('./data/villains.json',villains);
        resolve(villains[index]);


    });
}


// Mock function to remove a villain
function remove(id){
    return new Promise((resolve,reject)=>{
       villains=villains.filter((v)=> v.id !== id);
        writeDataToFile('./data/villains.json',villains);
        resolve();


    });
}

module.exports={
    findAll,
    findById,
    create,
    update,
    remove
};