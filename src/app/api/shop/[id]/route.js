import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Shop from "../../../../../model/Shop";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = await params;
    const shop = await Shop.findOne({ _id: id });
    // console.log(cloths)
    return NextResponse.json({ shop }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

