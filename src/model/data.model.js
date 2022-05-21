
 const mongoose=require('mongoose');

 const dataSchema= new mongoose.Schema({
     id:{type:Number ,require:true },
     
     size:{type:String,require:true},
     price:{type:Number , require:true},
      colour:{type:String ,require:true },
     imgUrl:{type:String , require:true}
   

 },{
     versionKey:false,
     timestamps:true
 });

 
 const products=mongoose.model("product",dataSchema);
 module.exports=products;
