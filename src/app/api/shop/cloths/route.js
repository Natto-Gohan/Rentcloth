import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Cloths from "../../../../../model/cloths";
import Shop from "../../../../../model/Shop"; 

export async function POST(req) {
    try{
        const { name,size,type,occasion,shopID,description,length,price,url,color } = await req.json();
        await connectMongoDB();
        console.log({name,size,type,occasion,shopID,description,length,price,url,color})
        const newCloth = await Cloths.create({ 
        name,
        size,
        type,
        shopID,
        description,
        length,
        price,
        url,
        color,
        });
        console.log(newCloth)
        return NextResponse.json({ message: "Cloths registered."},{status:201})
    }catch(error){
        return NextResponse.json(error)
    }
}



