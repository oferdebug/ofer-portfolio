import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { Prisma } from '@/app/lib/prismaclient';




export async function POST(request: Request) {
    const { email, name, password } = await request.json();


    //Check If User Already Exists
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
        return NextResponse.json({ error: 'User Already Exists,Please Try Again With A Different Email&Username' }, { status: 409 });
    }

    //Hash The Password
    const hashed = await bcrypt.hash(password, 10);

    //Create New User To DB
    const user = await prisma.user.create({
        data: { email, name, hashedPassword: hashed },
        select: { id: true, email: true, name: true },
    });


    return NextResponse.json({ user }, { status: 201 });
}