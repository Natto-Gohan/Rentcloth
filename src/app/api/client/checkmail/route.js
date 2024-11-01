
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../model/User";

export async function POST(req) {
    try{
        const { email } = await req.json();
        await connectMongoDB();
        const user = await User.findOne({ email }).select("_id");
        return NextResponse.json({ user })
    }catch(error){
        return NextResponse.json(error)
    }
}


