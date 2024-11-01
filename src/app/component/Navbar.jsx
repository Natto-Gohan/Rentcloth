"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="bg-[#4566AD] text-white p-6 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M4.12572 15.3668L10.1284 11.9903C10.7234 11.6556 11.3252 11.5 12 11.5C12.6748 11.5 13.2766 11.6556 13.8716 11.9903L19.8743 15.3668C20.5697 15.7579 21 16.4937 21 17.2916C21 18.5113 20.0113 19.5 18.7916 19.5H5.20841C3.98874 19.5 3 18.5113 3 17.2916C3 16.4937 3.43034 15.7579 4.12572 15.3668Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.40476C10 5.35279 10.8954 4.5 12 4.5C13.1046 4.5 14 5.35279 14 6.40476C14 7.12453 13.5808 7.75106 12.9623 8.07498C12.473 8.33119 12 8.75724 12 9.30952V11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            </Link>
          </div>
          <ul className="flex">
            <li className="mx-3 hover:underline">
              <Link href="/login">เข้าสู่ระบบ</Link>
            </li>
            <li className="mx-3 hover:underline">
              <Link href="/register">สมัครสมาชิก</Link>
            </li>
            {/* <li className="mx-3">
              <a
                onClick={() => signOut()}
                className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
              >
                Log out
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
