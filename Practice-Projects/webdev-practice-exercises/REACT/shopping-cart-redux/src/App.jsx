// App.js
import ProductItem from "./components/ProductItem";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

const App = () => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        <h2>Productos</h2>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default App;
