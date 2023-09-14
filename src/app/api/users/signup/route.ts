import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';

import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
    try {
        const { username, password, email } = await request.json();
        

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {  
            return NextResponse.json({error: 'User already exists'}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);

        const user = await User.create(
            {
                username: username, 
                password: hashedPassword, 
                email: email,
            }
            );

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            user
        }
        )

    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}