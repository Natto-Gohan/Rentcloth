import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../../lib/mongodb";
import Cloths from "../../../../../../model/cloths";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = params;
    // console.log(id)
    const cloth = await Cloths.find({ shopID: id });
    // console.log(cloth);
    return NextResponse.json(
      { cloth },
      { message: "Cloths found." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
