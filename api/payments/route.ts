/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
// Comentar la importación de MercadoPago para avanzar
// import mercadopago from 'mercadopago';

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    // Código comentado para MercadoPago
    /*
    const { title, quantity, price } = request.body;

    if (!title || !quantity || !price) {
      return response.status(400).json({ error: 'Faltan datos' });
    }

    const preference = await mercadopago.preferences.create({
      items: [
        {
          title,
          unit_price: parseFloat(price),
          quantity: parseInt(quantity),
        },
      ],
      back_urls: {
        success: 'https://maografica.vercel.app/success',
        failure: 'https://maografica.vercel.app/failure',
      },
      auto_return: 'approved',
    });

    return response.json({ init_point: preference.body.init_point });
    */

    return response.json({ message: 'Integración de MercadoPago comentada.' });
  } catch (error) {
    console.error(error);

    // Verificar si el error es una instancia de Error y tiene un mensaje
    if (error instanceof Error) {
      return response.status(500).json({ error: error.message });
    }

    // Si no es un Error, devolver un mensaje genérico
    return response.status(500).json({ error: 'Ha ocurrido un error desconocido.' });
  }
}
