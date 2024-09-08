// components/ProductItem.js
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductItem;
