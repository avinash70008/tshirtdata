
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://avinash:avinash1@cluster0.awu13.mongodb.net/tshirt?retryWrites=true&w=majority");
    
}
 
 module.exports=connectdb;
 