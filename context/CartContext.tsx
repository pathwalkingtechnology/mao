"use client";  // Esto marca el componente como un Client Component
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../app/types';

// Define el tipo del carrito
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

// Crea el contexto con un valor inicial undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Componente proveedor del carrito que envuelve la aplicación
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
}
