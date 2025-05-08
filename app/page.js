import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Working from "@/components/Working";
import Choosing from "@/components/Choosing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import ChatBot from "@/components/Chatbot";

export default function Home() {
  return (
    <div>
      <div>
        <nav className="bg-gray-100 rounde-lg shadow-white shadow-xs h-auto md:h-20 w-full md:flex-row md:justify-between md:items-center px-4 md:px-8 flex flex-col p-4">
          <div className="flex justify-center items-center gap-2 md:p-2 p-2">
            <Image src='/logo.png' width={72} height={72} alt='logo' className="rounded" />
            <div className="md:text-3xl text-xl text-center font-bold font-serif">SoftSell</div></div>
          <Link href='/' className="bg-gray-300 md:p-2 p-1 text-xs hover:border-2 md:px-3  font-semibold md:text-xl rounded md:rounded-lg hover:bg-gradient-to-r from-gray-100 to-gray-500">Home</Link>
        </nav>
        <div className="bg-blue-950 w-full h-0.5"></div>
        <div className="">
          <Hero />
          <Working />
          <Choosing />
          <Reviews />
          <Contact />
          <ChatBot />
        </div>
      </div>
    </div>
  );
}
