import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '@/app/lib/prismaclient';


const { JWT_SECRET } = process.env;

export async function POST(request: Request) {
    const { email, password } = await request.json();

    //Check If User Is Exists In Database
    const user = await prisma.user.findUnique({
			where: { email },
            select: { id: true, email: true, name: true, hashedPassword: true },
    });
    
    if (!user) {
        return NextResponse.json({ error: 'Invalid Credentials' }, { status: 401 });
    }


    const valid = await bcrypt.compare(password, user.hashedPassword);

    if (!valid) {
        return NextResponse.json({ error: 'Invalid Credentials' }, { status: 401 });
    }

    //Create JWT  Token
    const token = jwt.sign(
        { sub: user.id, email: user.email },
        JWT_SECRET!,
        { expiresIn: '1h' }
    );


    //Return The Token&User Details
    return NextResponse.json({
        token,
        user: { id: user.id, email: user.email, name: user.name }
    });
}







