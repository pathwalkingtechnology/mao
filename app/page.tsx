import db from '../db';
import Image from 'next/image';
import { Product } from './types';  // Asegúrate de importar la interfaz Product

export default async function Home() {
  // Obtener los productos desde la base de datos SQLite
  const products: Product[] = db.prepare('SELECT * FROM products').all();

  return (
    <div>
      <h1>Productos Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>
          </div>
        ))}
      </div>
    </div>
  );
}
