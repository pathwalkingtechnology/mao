import db from '../db';

export default async function Home() {
  // Obtener los productos desde la base de datos SQLite
  const products = db.prepare('SELECT * FROM products').all();

  return (
    <div>
      <h1>Productos Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>
          </div>
        ))}
      </div>
    </div>
  );
}
