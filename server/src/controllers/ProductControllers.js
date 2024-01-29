/**
 *  Product Controllers
 */

// Extensions
import bcryptjs from "bcryptjs";
import { } from "mongodb";
const URL = "";

// Import Model
import Products from "../model/Schema.Product.js";

// Get
const GetProduct = async (req, res, next) => {
  try {
    // Get Id User
    const { id } = req.body;

    //Validation
    if ( id === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 

    // Found User Emailb
    
    const IdProduct = await Products.findOne({ id });
    
    if(IdProduct){

      return res.status(202).json({
        message: ["IdProduct Encontrado"],
        IdProduct
      });

    } else {
      res.status(404).json({ message: "Id Producto NO ENCONTRADO" });
    } 

  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// POST 
const PostProduct = async (req, res, next) =>{
  try {

    const { title, description, codigo } = req.body;
    //Validation
    if (title === undefined || description === undefined || codigo === undefined ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 
    else {
      return res.status(201).json({ message: "Data Found" }); 
    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

// Export 
export const methods = { GetProduct, PostProduct };