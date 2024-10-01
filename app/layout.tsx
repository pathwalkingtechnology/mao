import { CartProvider } from '../context/CartContext';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
            <div>
              {/* Logo */}
              <Image
                src="/logo.png" // Reemplaza con la ruta de tu logo
                alt="Mao Gráfica"
                width={100}
                height={50}
              />
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </nav>
          </header>

          <main className="container mx-auto p-4">
            {children}
          </main>

          <footer className="p-4 bg-gray-800 text-white text-center">
            <p>&copy; 2024 Mao Gráfica. Todos los derechos reservados.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
