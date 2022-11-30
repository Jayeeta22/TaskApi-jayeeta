const express=require("express")
const task = require("./src/userSchema")
require("./src/userSchema")
const app=express()
app.use(express.json())

app.post("/v1/tasks",async(req,res)=>{
    try{
        const newtask=new task(req.body)
        const createtaks=await newtask.save()
        res.status(201).send({id:createtaks._id})
    }catch(err){
        res.status(400).send(err)
    }
})

app.get("/v1/tasks",async(req,res)=>{
    try{
       
        const showtask=await task.find()
    res.status(201).send({task:showtask})
}catch(err){
    res.send(err)
}

})

app.get("/v1/tasks/:id",async(req,res)=>{
    try{
       
    const _id=req.params.id
    const findtaskbyid=await task.findById(_id)
    if(!findtaskbyid){
        return res.status(404).send( {error: "There is no task at that id"})
    }
    res.status(200).send(findtaskbyid)

}catch(err){
    res.send(err)
}

})

app.delete("/v1/tasks/:id",async(req,res)=>{
    try{
       
    const _id=req.params.id
    console.log(_id)
    const findtaskbyid=await task.findByIdAndDelete(_id)

    if(!findtaskbyid){
        return res.status(404).send( {error: "There is no task at that id"})
    }

    // const result=findtaskbyid.deleteOne()
    res.status(204).send("none")

}catch(err){
    res.send(err)
}

})


app.delete("/v1/tasks/",async(req,res)=>{
    try{
       
     const values=req.params
    // console.log(_id)
    const findall=await task.find()
console.log(findall)

    const result= await values.delete()
    res.status(204).send("none")

}catch(err){
    res.send(err)
}

})


app.put("/v1/tasks/:id",async(req,res)=>{
    try{
       
    const _id=req.params.id
    console.log(_id)
    const UpdatebyId=await task.findByIdAndUpdate(_id,req.body)

    if(!UpdatebyId){
        return res.status(404).send( {error: "There is no task at that id"})
    }

    // const result=findtaskbyid.deleteOne()
    res.status(204).send(UpdatebyId)

}catch(err){
    res.send(err)
}

})


app.listen(3000,()=>{
    console.log("server is up in port 3000")
})