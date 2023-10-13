//import json-server
const jsonServer= require('json-server')

//crete json server using json server library
const mediaPlyerserver =jsonServer.create()

// set up path//route for db.json file
const router=jsonServer.router("db.json")

//returns middlewares used by json sever
const middlewares=jsonServer.defaults()

//set up port for server app
const port= 4000 || process.env.PORT

//use middilewares and router in server
mediaPlyerserver.use(middlewares)
mediaPlyerserver.use(router)

//server listen for request  from frontend
mediaPlyerserver.listen(port,()=>{
    console.log(`media Player server  started at port:  ${port}, and writing for request!!!`);
})