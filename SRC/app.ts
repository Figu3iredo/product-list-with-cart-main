import { Product } from "./entities/product";
import data from "../data.json"
import { Cart } from "./entities/cart";


const product1 = new Product("banana",  "fruta", 10, "http://example.com");
product1.incrementQuantity();
product1.incrementQuantity();

const product2 = new Product("maça",  "fruta", 5, "http://example.com");
product2.incrementQuantity();
product2.incrementQuantity(); 


console.log(Cart);


