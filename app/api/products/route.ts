import db from '../../../db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = db.prepare('SELECT * FROM products').all();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
