import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useCart } from "../../utils/CartContext";
import ProductCard from "../commonCardDisplay/ProductCard";
import Loader from "../commonLoader/Loader";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        // Calculate total price of all items in cart
        const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(totalPrice);
    }, [cart]);

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Box sx={{ maxHeight: '80vh', overflowY: 'auto', paddingRight: '10px' }}>
                    <Grid container spacing={3} marginTop={3}>
                        {cart.length === 0 ? (
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <Typography variant="h5">No items in the Cart</Typography>
                            </Grid>
                        ) : (
                            <>
                                {cart.map((product) => (
                                    <Grid item key={product.id} xs={12}>
                                        <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                            <ProductCard
                                                product={product}
                                                isInCart={true}
                                                onAddToCart={() => { }}
                                                onRemoveFromCart={removeFromCart}
                                            />
                                            <Typography variant="body1" align="right" sx={{ marginTop: 1 }}>
                                                ${product.price.toFixed(2)} {/* Display price of each product */}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item xs={12} sx={{ marginTop: 3 }}>
                                    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant="h6">Total:</Typography>
                                            <Typography variant="h6">${totalPrice.toFixed(2)}</Typography> {/* Display total price */}
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleClearCart}
                                            sx={{ marginTop: 2 }}
                                        >
                                            Clear Cart
                                        </Button>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Cart;
