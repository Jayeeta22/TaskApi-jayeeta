const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/test-api",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
})

const userSchema={
    title:{
        type:String,
        require:true
    },
    is_completed:{
        type:Boolean
        
    }
}

const task= new mongoose.model("task",userSchema);
module.exports=task;