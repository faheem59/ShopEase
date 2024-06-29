export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
}

export interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    isInCart: (productId: number) => boolean;
    clearCart: () => void;
}

export interface ProductCardProps {
    product: Product;
    isInCart: boolean;
    onAddToCart: (product: Product) => void;
    onRemoveFromCart: (productId: number) => void;
}


