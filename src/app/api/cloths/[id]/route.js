import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import Cloths from "../../../../../model/cloths";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = await params;
    // const cloth = await Cloths.findOne({ _id: id });
    // console.log(cloths)
    const cloth = await Cloths.findById(id).populate({
      path: "shopID",
      select: "name line facebook instagram"
    });
    return NextResponse.json({ cloth }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = await params;
    const cloths = await Cloths.findByIdAndDelete({ _id: id });
    if (!cloths) {
      return;
    }
    return NextResponse.json(
      { cloths, message: "Cloths found." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
