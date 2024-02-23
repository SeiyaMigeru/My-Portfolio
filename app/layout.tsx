import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seiya [Portfolio]",
  description: "A full stack developer portfolio with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={
          "${inter.className} bg-slate-200 text-gray-900 relative pt-28 sm:pt-36 h-[5000px]"
        }
      >
        <div
          className=" bg-cyan-300 absolute top-[-6rem] -z-10 right-[11rem] h-[32rem] 
          w-[32rem] rounded-full blur-[10rem] sm:w-[69rem]"
        ></div>
        <div
          className=" bg-red-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[32rem] 
          w-[50rem] rounded-full blur-[10rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem] 
          xl:left=[-15rem] 2xl:left[-5rem]"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  );
}
