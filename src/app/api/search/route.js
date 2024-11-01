import { NextResponse } from "next/server";
import Cloth from "../../../../model/cloths"; 

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const type = searchParams.get("type") || "";
    const size = searchParams.get("size") || "";
    const color = searchParams.get("color") || "";
    const price = searchParams.get("price") || "";
    const sort = searchParams.get("sort") || "desc";

    const query = {
      name: {
        $regex: search,
        $options: 'i'
      }
    };

    if (type) {
      query.type = type; 
    }
    if (size) {
      query.size = size; 
    }
    if (color) {
      query.color = color;
    }
    if (price) {
      query.price = { $lt: price }; // ค้นหาราคาน้อยกว่าค่า price ที่กำหนด
    }

    const sortOption = sort === "asc" ? { createdAt: 1 } : { createdAt: -1 };

    const cloths = await Cloth.find(query).sort(sortOption);
    
    return NextResponse.json({
      results: cloths
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
