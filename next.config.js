/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https", // คำผิด: "protocal" ควรเป็น "protocol"
          hostname: "*",      // อนุญาตให้ใช้ hostname ใด ๆ
          pathname: "/**",    // อนุญาตให้ใช้ path ใด ๆ
        },
      ],
    },
  };
  
  module.exports = nextConfig; // ส่งออกการตั้งค่าที่ถูกต้อง
  

