import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import { AuthProvider } from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="flex flex-col min-h-screen">
          <AuthProvider>
            <Navbar/>
              {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
