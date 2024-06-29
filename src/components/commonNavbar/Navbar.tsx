import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

const Navbar = () => {
    const { cart } = useCart();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={RouterLink} to="/" color="inherit" style={{ flexGrow: 1, textDecoration: 'none' }}>
                        Home
                    </Typography>
                    <IconButton component={RouterLink} to="/cart" color="inherit" aria-label="cart">
                        <Badge badgeContent={cart.length} color="secondary">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
