import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/contactus";

export default function Home() {
  return (
    <div className="flex-itme-center justify-center min-h-screen">
      <h1 className="font-bold text-5xl text-center text-emerald-500 underline">"HELLO WORLD!"</h1>
      <Header/>
      <About/>
      <ContactUs/>
    </div>
  );
}
