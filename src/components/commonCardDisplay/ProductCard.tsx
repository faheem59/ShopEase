import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ProductCardProps } from "../../utils/types";



const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart, onAddToCart, onRemoveFromCart }) => {
    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: 'row', height: '100%', width:"80%", marginLeft:"120px" }}>
                <CardMedia
                    component="img"
                    alt={product.title}
                    image={product.image}
                    title={product.title}
                    sx={{ width: 200, objectFit: 'cover' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.category}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.description}
                        </Typography>
                        <Typography variant="body1" component="p">
                            ${product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </Typography>
                    </CardContent>
                    <Box sx={{ padding: '16px' }}>
                        <Button
                            variant="contained"
                            color={isInCart ? "secondary" : "primary"}
                            fullWidth
                            onClick={() => isInCart ? onRemoveFromCart(product.id) : onAddToCart(product)}
                        >
                            {isInCart ? "Remove Item" : "Add to Cart"}
                        </Button>
                    </Box>
                </Box>
            </Card>
        </>
    );
};

export default ProductCard;
