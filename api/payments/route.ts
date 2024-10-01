/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import mp from '../mercadoPago.config'; // Asegúrate de que la ruta sea correcta

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const body = await request.body; // Utiliza request.body en lugar de request.json()
    const { title, quantity, price } = body;

    if (!title || !quantity || !price) {
      return response.status(400).json({ error: 'Faltan datos' });
    }

    const preference = await mp.preferences.create({
      items: [
        {
          title,
          unit_price: parseFloat(price).toFixed(2),
          quantity: parseInt(quantity),
        },
      ],
      back_urls: {
        success: '(link unavailable)',
        failure: '(link unavailable)',
      },
      auto_return: 'approved',
    });

    return response.json({ init_point: preference.body.init_point });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: error.message });
  }
}
