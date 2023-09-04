const { create } = require('domain');
const http = require('http');
const {getVillains,getVillain,createVillain,updateVillain,removeVillain} = require ('./controllers/villainController');
const server = http.createServer((req, res)=>{

    // Get all Villains
    if(req.url === '/api/villains' && req.method === 'GET'){
        getVillains(req, res);
        // get single villain
    }else if(req.url.match(/\/api\/villains\/([0-9]+)/) && req.method === 'GET')
    {
        const id = req.url.split('/')[3];
        getVillain(req, res, id);

    }else if(req.url.match(/\/api\/villains\/([0-9]+)/) && req.method === 'PUT'){
        const id = req.url.split('/')[3];
        updateVillain(req, res, id);

    }else if(req.url.match(/\/api\/villains\/([0-9]+)/) && req.method === 'DELETE'){
        const id = req.url.split('/')[3];
        removeVillain(req, res, id);

    }
    else if(req.url==='/api/villains' && req.method === 'POST'){
        createVillain(req,res);

    }else {
        res.writeHead(404,{'Content-Type' : 'application/json'});
        res.write(JSON.stringify({message:'Route not found'}));
        res.end();
    }


   

});

const port = process.env.PORT || 5000;

server.listen(port,() => {
    console.log(`Server started, running on port http://127.0.0.1:${port}`);
});