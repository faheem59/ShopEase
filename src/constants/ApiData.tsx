import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../utils/types"; 

const Apidata = () => {
    const [products, setProducts] = useState<Product[]>([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 

    const fetchProductData = async () => {
        try {
            const apiurl = "https://fakestoreapi.com/products";
            const response = await axios.get<Product[]>(apiurl);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product data:", error);
            setError("Failed to fetch product data. Please try again later."); 
            setLoading(false); 
        }
    };
    useEffect(() => {
        fetchProductData(); 
    }, []);

    return {
        products,
        loading,
        error
    };
};

export default Apidata;
