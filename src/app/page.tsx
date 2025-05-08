"use client";
import BackToTop from "@/componentes/BackToTop";
import CardComponent from "@/componentes/card";
import Navbar from "@/componentes/nav";
import SkillBadge from "@/componentes/skill";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useState } from 'react';
import Modal from "@/componentes/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" scroll-smooth">
      <Navbar />
      {/* <nav className="flex justify-between items-center p-2 container mx-auto md:px-6 lg:px-20">
        <h1 className="text-2xl font-bold">Brand</h1>
        <button className="flex bg-amber-600 hover:bg-amber-700 duration-500 text-white items-center px-6 py-3 rounded-full gap-2 transition-colors cursor-pointer border-2 hover:border-2 hover:border-amber-800 ">
          <span className="text-sm font-medium">Contact Now</span>
          <MdArrowOutward className="text-base" />
        </button>
      </nav> */}

      <BackToTop />



      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto px-4 md:px-6 lg:px-20 mt-24">
        <div className="text-gray-800 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-1 text-gray-900 mt-10 ">
            Digital Products
          </h1>
          <h1 className="text-2xl lg:text-5xl font-semibold mb-4 text-amber-600">
            Creator Agency
          </h1>
          <p className="text-md lg:text-lg mb-6 text-gray-600 leading-relaxed max-w-lg">
            Ensure form fields are labeled correctly, with error states and
            clear instructions, making it easy for all users to complete forms.
          </p>
          <button onClick={() => setIsOpen(true)} className="flex w-fit bg-amber-600 hover:bg-amber-700 duration-500 text-white items-center px-6 py-3 rounded-full gap-2 transition-colors border-2 hover:border-2 hover:border-amber-800 cursor-pointer">
            <span className="text-sm font-medium">Connect with our team</span>
            <MdArrowOutward className="text-base" />
          </button>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Feel Free To Contact">
        <p>This is a simple modal content</p>
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </Modal>

          <div className="border-t-2 border-gray-400 mt-16 w-2/3 pt-4">
            <h1 className="text-sm mb-6 text-gray-600 leading-relaxed max-w-lg">
              Ensure form fields are labeled correctly, with error states and
              clear instructions, making it easy for all users to complete
              forms.
            </h1>
          </div>
        </div>

        <div>
          <Image
            src="/images/main.png"
            alt="Main content"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>

      <div className="container px-4  mx-auto md:px-6 lg:px-20 py-12 text-center">
        <h1 className="mb-6 font-semibold">We are skilled in</h1>
        <div className="overflow-auto">
        <div className="flex justify-center flex-wrap gap-6">
          <SkillBadge
            imageSrc="/images/figma.png"
            altText="Sketch"
            label="Figma"
          />

          <SkillBadge
            imageSrc="/images/flutter.svg"
            altText="Sketch"
            label="Flutter"
          />

          <SkillBadge
            imageSrc="/images/react.svg"
            altText="Sketch"
            label="React"
          />

          <SkillBadge
            imageSrc="/images/photoshop.svg"
            altText="Sketch"
            label="Photoshop"
          />

          <SkillBadge
            imageSrc="/images/next2.svg"
            altText="Sketch"
            label="Next js"
          />
        </div>
        </div>
      </div>

      <div className="container mx-auto px-4  md:px-6 lg:px-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardComponent
            title="UI UX Design"
            items={["Dashboard", "Profile", "Settings", "Notifications"]}
            logo="images/demo.svg" 
          />
          <CardComponent
            title="Web Development"
            items={["Dashboard", "Profile", "Settings", "Notifications"]}
            logo="images/demo.svg" 
          />
          <CardComponent
            title="App Development"
            items={["Dashboard", "Profile", "Settings", "Notifications"]}
            logo="images/demo.svg" 
          />
          <CardComponent
            title="Graphic Design"
            items={["Dashboard", "Profile", "Settings", "Notifications"]}
            logo="images/demo.svg" 
          />
        </div>
      </div>

      <div className="delete h-56">






      </div>
    </div>
  );
}
