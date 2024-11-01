// "use client";

// // import Accordion from "./component/Accordion";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import CardShop from "../component/CardShop";
// import axios from "axios";
// import Link from "next/link";

// export default function Home() {
//   // const { data: session } = useSession();
//   // console.log(session);
//   const [cloths, setCloths] = useState({});
//   const getCloths = async () => {
//     try {
//       const response = await axios.get("api/cloths");
//       setCloths(response.data.cloths);
//       console.log("res", response.data.cloths);
//       console.log("cloths", cloths);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getCloths();
//   }, []);


//   return (
//     <div>
//       <div
//         className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url(/images/bg_homepage.jpg)" }}
//       >
//         <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
//           กำลังมองหาชุดที่ใช่อยู่ใช่หรือไม่
//         </h1>
//         <h1></h1>
//         <div className="flex space-x-4">
//           <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow hover:bg-gray-300 transition">
//             Button 1
//           </button>
//           <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow hover:bg-gray-300 transition">
//             Button 2
//           </button>
//         </div>
//       </div>
//       <div className="w-[90vw] bg-yellow-500 m-auto flex">
//         <div className="w-1/5 bg-green-500 p-[10px]">
//           <div className="flex border-b border-black mt-5 mb-5">
//             <div className="mr-8">ตัวกรอง</div>
//             <div className="text-red-500">ลบออกทั้งหมด</div>
//           </div>
//           <div className="mt-5"></div>
//         </div>
//         <div className="w-4/5 bg-red-500 p-[10px]">
//           {/* ส่วนค้นหา */}
//           <div className="mb-10 mt-5">
//             <form className="max-w-md mx-auto">
//               <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
//                 Search
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                   <svg
//                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="search"
//                   id="default-search"
//                   className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Search Mockups, Logos..."
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* ส่วนการ์ด */}
//           <div>
//             {cloths.length > 0 ? (
//               <div className="grid grid-cols-4 gap-4">
//                 {cloths.map((item) => (
//                   <div key={item._id}>
//                     <Link href={`/cloths/${item._id}`}>
//                       <CardShop item={item} />
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               "Loading..."
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
