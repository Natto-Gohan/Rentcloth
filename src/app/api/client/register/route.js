import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../model/User";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try{
        const { name,email,size,password } = await req.json();
        const hashpassword = await bcrypt.hash(password,10)
        await connectMongoDB();
        await User.create({ name,email,password:hashpassword,size });
        return NextResponse.json({ message: "User Client registered."},{status:201})
    }catch(eror){
        return NextResponse.json({ message: "An eror occured while regitrating the user."},{status:500})
    }
}