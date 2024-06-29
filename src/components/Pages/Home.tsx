// Home.tsx

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Apidata from "../../constants/ApiData";
import { useCart } from "../../utils/CartContext";
import ProductCard from "../commonCardDisplay/ProductCard";
import Loader from "../commonLoader/Loader";

const Home: React.FC = () => {
    const { products } = Apidata();
    const { addToCart, removeFromCart, isInCart } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            <Typography variant="h2" sx={{ textAlign: 'center', margin: '20px 0' }}>
                Product List
            </Typography>
            {loading ? (
                <Loader />
            ) : (
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12}>
                            <ProductCard
                                product={product}
                                isInCart={isInCart(product.id)}
                                onAddToCart={addToCart}
                                onRemoveFromCart={removeFromCart}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Home;
