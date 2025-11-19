import React from "react";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

// Contact section with WhatsApp button above Earth globe
const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {/* WhatsApp Button */}
      <div className='mb-8'>
        <a
          href="https://wa.me/918887419753?text=Hi%20Harsh,%20I%20would%20like%20to%20connect%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg'
        >
          <span className='text-xl'>💬</span>
          <span>Connect via WhatsApp</span>
        </a>
      </div>

      {/* Earth Globe */}
      <div className='w-full h-[400px] md:h-[520px] xl:h-[600px] flex items-center justify-center'>
        <div className='w-full h-full'>
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
