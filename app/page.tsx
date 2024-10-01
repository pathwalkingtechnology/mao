"use client";  // Esto marca el componente como un Client Component
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from './types';
import { useCart } from '../context/CartContext';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={200}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>

            {/* Botón para añadir al carrito */}
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(product)}>
      Añadir al carrito
    </button>
  );
}
