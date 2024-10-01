import db from '../../../db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = db.prepare('SELECT * FROM products').all();
    return NextResponse.json(products);
  } catch (error) {
    // Verificar si el error es una instancia de Error y tiene un mensaje
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Si no es un Error, devolver un mensaje genérico
    return NextResponse.json({ error: 'Ha ocurrido un error desconocido.' }, { status: 500 });
  }
}
