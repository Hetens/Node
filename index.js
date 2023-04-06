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

}
main().catch(err => console.log(err));

