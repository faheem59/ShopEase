import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useCart } from "../../utils/CartContext";
import ProductCard from "../commonCardDisplay/ProductCard";
import Loader from "../commonLoader/Loader";
import Apidata from "../../constants/ApiData";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CartButton from "../commondButton/CartButton";

const Cart = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart } = useCart();
    const { loading, error } = Apidata();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(totalPrice);
    }, [cart]);

    if (error) {
        if (error) {
            toast.error(`Error: ${error}`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }

    const handleCart = () => {
        navigate("/")
    }

    return (
        <>
            <ToastContainer />
            {loading ? (
                <Loader />
            ) : (
                <Grid container spacing={3} marginTop={3}>
                    <Grid item xs={cart.length > 0 ? 8 : 12}>
                        <Box sx={{ maxHeight: '80vh', overflowY: 'auto', paddingRight: '10px' }}>
                            {cart.length === 0 ? (
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <Typography variant="h5">No items in the Cart</Typography>
                                    <Button variant="contained" color="secondary" onClick={handleCart}>View Product</Button>
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
                                                    ${product.price.toFixed(2)}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </>
                            )}
                        </Box>
                    </Grid>
                    {cart.length > 0 && (
                        <Grid item xs={4}>
                            <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', height: '100%' }}>
                                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                    Summary
                                </Typography>
                                {cart.map((product) => (
                                    <li key={product.id}>
                                        {product.title}: ${product.price.toFixed(2)}
                                    </li>
                                ))}
                                <Typography variant="h6" sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Total:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </Typography>
                                <CartButton />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            )}
        </>
    );
};

export default Cart;
