/* eslint-disable @typescript-eslint/no-explicit-any */
import mercadopago from 'mercadopago';
import { NextResponse } from 'next/server';

const mp = new mercadopago({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, quantity, price } = body;

    if (!title || !quantity || !price) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    const preference = await mp.preferences.create({
      items: [
        {
          title,
          unit_price: price,
          quantity,
        },
      ],
      back_urls: {
        success: '(link unavailable)',
        failure: '(link unavailable)',
      },
      auto_return: 'approved',
    });

    return NextResponse.json({ init_point: preference.body.init_point });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
