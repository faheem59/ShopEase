import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Apidata from "../../constants/ApiData";
import { useCart } from "../../utils/CartContext";
import ProductCard from "../commonCardDisplay/ProductCard";
import Loader from "../commonLoader/Loader";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const { products, loading, error } = Apidata();
    const { addToCart, removeFromCart, isInCart } = useCart();  
    if (error) {
        if (error) {
            toast.error(`Error: ${error}`, {
                position: "top-center",
                autoClose: 3000, 
            });
        } 
    }   

    return (
        <>
            <ToastContainer />
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
