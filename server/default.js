
import { products } from "./constants/data.js";
import Product from "./model/products-schema.js";

const DefaultData = async() => {
    try{
        //await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Data immported successfully');
    }catch(error){
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;