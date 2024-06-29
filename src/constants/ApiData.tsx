import { useEffect, useState} from "react";
import axios from "axios"
import { Product } from "../utils/types";


const Apidata = ()=>{
  const [products, setProducts] = useState<Product[]>([]);   
 
    const fetchProductData = async()=>{
        try{
            const apiurl = "https://fakestoreapi.com/products";
            const response = await axios.get(apiurl);
            setProducts(response.data);
        }catch(e){
           console.log(e);
        }
    }

    useEffect(()=>{
    fetchProductData();
    },[])
    return{
        products
    }
}
export default Apidata;