import React from "react";
import Image from "next/image";

export default function cardShop({ item }) {
  const { name, type, size, length, price,url } = item;
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Image
        src={url}
        size="100vw"
        width={10}
        height={10}
        alt=""
        className="rounded-t-lg object-cover" 
        layout="responsive"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          size {size}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          {length} ซม.
        </p>
        <div className="mb-3 font-normal text-gray-700">
          { price } บาท/วัน
        </div>
      </div>
    </div>
  );
}
