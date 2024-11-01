"use client";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Informationpage() {
  const oid = useParams();
  const [cloth, setCloth] = useState([]);
  const id = oid.id;


  const getClothByID = async (id) => {
    try {
      const response = await axios.get(`/api/cloths/${id}`);
      setCloth(response.data.cloth);
      // console.log("res:", response.data.cloth);
      console.log("useStateCloth", cloth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClothByID(id);
  }, []);

  return (
    <div>
      <div className="flex w-[90vw] m-auto mt-10">
        {/* ส่วนของรูปภาพ */}
        <div className="w-3/5  flex items-center justify-center">
          <img
            src={cloth.url} // ปรับให้ใช้ URL ของรูปภาพจากข้อมูลของชุด
            alt={cloth.name}
            className="object-cover object-center w-full max-w-md h-auto" // ทำให้รูปภาพเต็มพื้นที่
          />
        </div>
        {/* ส่วนของข้อมูล */}
        <div className="w-2/5 p-6 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">{ cloth.name }</h2>
          <p className="text-gray-600 opacity-70">ประเภท {cloth.type}</p>
          <p className="text-gray-600 opacity-70">สี {cloth.color}</p>
          <p className="text-gray-600 opacity-70">ขนาด {cloth.size}</p>
          <p className="text-gray-600 opacity-70">ความยาว {cloth.length} ซม.</p>
          <p className="text-2xl font-bold"> {cloth.price} บาท/วัน</p>
          {cloth.shopID?.name && (
              <Link href= {`/shop/${cloth.shopID._id}`} rel="noopener noreferrer" className="m-3 text-center">
                ร้านค้า {cloth.shopID.name}
              </Link>
            )}
          <p className="text-2xl font-bold text-center"> ช่องทางติดต่อ </p>
          <div className="flex justify-center">
            {cloth.shopID?.facebook && (
              <Link href={cloth.shopID.facebook} target="_blank" rel="noopener noreferrer" className="m-3">
                <Image src="/images/facebook.png" alt="Facebook" width={60} height={60} />
              </Link>
            )}
            {cloth.shopID?.instagram && (
              <Link href={cloth.shopID.instagram} target="_blank" rel="noopener noreferrer" className="m-3">
                 <Image src="/images/instragram.png" alt="Instagram" width={60} height={60} className="rounded-2xl"/>
              </Link>
            )}
             {/* Line Link */}
             {cloth.shopID?.line && (
              <Link href={`https://line.me/R/msg/text/?${cloth.shopID.line}`} target="_blank" rel="noopener noreferrer" className="m-3">
                <Image src="/images/line.png" alt="Line" width={60} height={60} />
              </Link>
            )}
          
          </div>
        </div>
      </div>
      <div className="ml-[100px] mt-10">
      <div>
        เกี่ยวกับสินค้า
      </div>
      <div>
        รายละเอียด
      </div>
      <div>
        {cloth.description}
      </div>
      </div>
    </div>
  );
}
