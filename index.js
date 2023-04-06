const mongoose = require('mongoose');
const express = require('express');
require('./config');
const product = require('./product');
const app = express();


app.use(express.json());
app.post('/create',async(req,res)=>{
  let data = new product(req.body)
  const result = await data.save();

  console.log(result);
  res.send(result);
})

app.get("/list",async(req,res)=>{
  let data = await product.find();
  res.send(data);
})

app.delete("/del/:_id",async(req,res)=>{
  console.log(req.params)
  let data = await product.deleteOne(req.params);

  res.send(data)
})

// app.put("/update/:_id",async(req,res)=>{
//   console.log(req.params)
//   let data = await product.updateOne({
//     {req.params},
//     {
//       $set:req.body
//     }
//   });

//   res.send(data)
// })
app.listen(5000);







const main =async()=>{
  //connect to the database
  await mongoose.connect('mongodb://127.0.0.1:27017/newdb');

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
  
  });

const Save =async()=>{
  const productsModel=mongoose.model('products',productSchema);
  //adding products manually
  const data = new productsModel({
    name:"galaxy a7",
    price:233,
    brand:"Samsung",
    category:"mpbile"
  });

  const result = await data.save();

  console.log(result);
}

const Update=async()=>{
  const Product = mongoose.model('products',productSchema);
  let data = await Product.updateOne(
    {
      name:"m7"
    },
    {
      $set:{price:700}
    }
  )
  console.log(data);
}

const Delete=async()=>{
  const productsModel=mongoose.model('products',productSchema);
  let data = await productsModel.deleteOne({name:""});
  console.log(data);
 }
}

