import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react";
import {
    CartContextType,
    Product
} from "./types";
import localforage from "localforage";

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    // To Store the cart Items in Localforge

    useEffect(() => {
        localforage.setItem("cart", cart);
    }, [cart]);

    // To Get Cart Item from Localforge when page reload
    useEffect(() => {
        localforage.getItem<Product[]>("cart").then((storedCart) => {
            if (storedCart) {
                setCart(storedCart);
            }
        });
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    // To check if the product with same id is already present
    const isInCart = (productId: number) => {
        return cart.some((item) => item.id === productId);
        // for (const item of cart) {
        //     if (item.id === productId) {
        //         return true;
        //     }
        // }
        // return false;
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
