"use client";

import { useEffect, useState } from "react";
import CardShop from "../../component/CardShop";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ShopPage() {
  // const { data: session } = useSession();
  // console.log(session);
  const oid = useParams();
  const id = oid.id;
  const [cloths, setCloths] = useState([]);
  const [shop,setShop] = useState([]);

  const getCloths = async () => {
    try {
      const response = await axios.get(`/api/shop/cloths/${id}`);
      setCloths(response.data.cloth);
    } catch (error) {
      console.error(error);
    }
  };

  const getShop = async () => {
    try {
      const response = await axios.get(`/api/shop/${id}`);
      setShop(response.data.shop);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCloths();
    getShop();
  }, []);

  return (
    <div>
      <div className="w-[90vw] m-auto">
        <div className="text-3xl p-[10px] text-center m-5">
            ร้าน { shop.name }
        </div>
        <div className=" p-[10px]">
          {/* ส่วนการ์ด */}
          <div>
            {cloths.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                {cloths.map((item) => (
                  <div key={item._id}>
                    <Link href={`/cloths/${item._id}`}>
                      <CardShop item={item} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
