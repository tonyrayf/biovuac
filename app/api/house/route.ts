import { NextResponse } from 'next/server';
import houses from '@/app/data/houses.json';


export async function POST(req: Request) {
    const { id } = await req.json();

    // Trying to find house
    const house = houses.find((house) => house.id === id);

    if (house)  return NextResponse.json({ message: JSON.stringify(house) }, { status: 200 });
    else        return NextResponse.json({ status: 401 });
}