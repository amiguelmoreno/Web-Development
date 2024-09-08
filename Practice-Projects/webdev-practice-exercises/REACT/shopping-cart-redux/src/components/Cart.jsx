// components/Cart.js
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Eliminar
                </button>
                <input
                  type='number'
                  min='1'
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        productId: item.id,
                        quantity: Number(e.target.value),
                      })
                    )
                  }
                />
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
