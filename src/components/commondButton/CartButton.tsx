import { Button } from '@mui/material'
import { useCart } from '../../utils/CartContext';


const CartButton = () => {
    const { clearCart } = useCart();
    const handleClearCart = () => {
        clearCart();
    };
  return (
    <>
          <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, width: '100%' }}
          >
              Checkout Now
          </Button>
          <Button
              variant="contained"
              color="primary"
              onClick={handleClearCart}
              sx={{ marginTop: 2, width: '100%' }}
          >
              Clear Cart
          </Button>
    </>
  )
}

export default CartButton