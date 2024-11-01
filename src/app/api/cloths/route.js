import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Cloths from "../../../../model/cloths";

export async function GET(req) {
  try {
    await connectMongoDB();
    const cloths = await Cloths.find();
    // console.log(cloths)
    return NextResponse.json(
      { cloths, message: "Cloths found." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
