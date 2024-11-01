import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Shop from "../../../../../model/Shop";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try{
        const { name,email,password,facebook,instagram,line } = await req.json();
        const hashpassword = await bcrypt.hash(password,10)
        await connectMongoDB();
        await Shop.create({ 
        name,
        email,
        password:hashpassword,
        facebook,
        instagram,
        line
        });
        return NextResponse.json({ message: "User Shop registered."},{status:201})
    }catch(eror){
        return NextResponse.json({ message: "An eror occured while regitrating the user."},{status:500})
    }
}