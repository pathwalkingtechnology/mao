import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price} ARS</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <button>Proceder al pago</button>
    </div>
  );
}
