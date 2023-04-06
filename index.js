const mongoose = require('mongoose');

const main =async()=>{
  //connect to the database
  await mongoose.connect('mongodb://127.0.0.1:27017/newdb');

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
  
  });

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

main().catch(err => console.log(err));

