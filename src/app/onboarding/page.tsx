'use client';

import { useState } from "react";
import Logo from '../assets/Logo.svg';
import BigBuisness from "../../../public/icons/BigBuisnessIcon.svg";
import SmallBuisness from "../../../public/icons/SmallBuisnessIcon.svg";
import BigCactus from "../../../public/images/BigCactus.png";
import SmallCactus from "../../../public/images/SmallCactus.png";
import { motion } from "framer-motion";

export default function OnBoarding() {

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const isActive = (card: string) => activeCard === card;
  const handleCardClick = (card: string) => {
    setActiveCard(card);
    if (card === 'Big') {
      window.location.href = 'https://www.caelum-x.com/login';
    }
  };
  return (
    <div className="w-full p-10 overflow-hidden h-screen bg-[#0C0B10] container m-auto bg-[#232228] h-full w-full rounded-3xl border border-white/10">
      <div className="flex flex-col h-full">
        <div className="flex flex-row items-center justify-start p-4 gap-3 pl-12 border-b-[1px] border-white/10">
          <div className="inline-flex justify-center items-center">
            <div className="outline size-10 outline-[1.5px] outline-zinc-600 bg-white/10 p-2 rounded-xl">
              <img src={Logo.src} alt="Logo" />
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <h2 className="text-3xl font-normal text-zinc-300">Are you looking for Offsetting Carbon?</h2>
            <p className="text-sm -mt-1 text-zinc-500">
              Choose your sides and contribute accordingly.
            </p>
          </div>
        </div>
        <div className="flex flex-row h-full items-center justify-evenly">
          {/* Big Company Card */}
          <motion.div
            initial={{
              scale: 1,
              boxShadow: "none",
              backgroundColor: "",
              opacity: 0.6,
            }}
            animate={
              isActive("Big")
                ? {
                    scale: 1.05,
                    boxShadow: "0px 2px 12px 0px #3D3D41",
                    backgroundColor: "#202028",
                    opacity: 1,
                  }
                : {}
            }
            whileHover={
              !isActive("Big")
                ? {
                    scale: 1.05,
                    boxShadow: "0px 2px 12px 0px #3D3D41",
                    backgroundColor: "#202028",
                    opacity: 1,
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
            onClick={() => handleCardClick('Big')}
            className="border-white/10 p-6 flex flex-col gap-6 rounded-3xl border-[1px] max-w-xs w-full"
          >
            {/* Card Content */}
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center justify-start w-full gap-3">
                <div className="inline-flex justify-center items-center">
                  <div className="outline size-8 outline-[1.5px] outline-zinc-600 bg-white/10 p-2 rounded-lg">
                    <img src={BigBuisness.src} alt="onBoardingIcon" />
                  </div>
                </div>
                <div className="flex flex-col gap-0">
                  <h2 className="text-xl font-normal text-zinc-300">Big Industry</h2>
                  <p className="text-[10px] -mt-1 text-zinc-500">
                    Big Industries: Carbon Offsetting Goals?
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-80 w-full inline-flex items-center justify-center outline-[1px] rounded-2xl outline-zinc-700 outline flex-col">
              <img className="h-36 w-32" src={BigCactus.src} alt="Big Company" />
             <div className="justify-between w-full flex flex-col items-start px-4 py-2">
             <ul className="text-[11px] list-disc text-zinc-500">
             <h3 className="text-base mb-1 -ml-2 font-normal text-zinc-400 whitespace-normal">
        Are you a big company?
             </h3>
            <li className="whitespace-normal break-words">Offset significant carbon emissions by investing in projects.</li>
            <li className="whitespace-normal break-words">Meet stringent regulations and showcase leadership in climate action.</li>
            <li className="whitespace-normal break-words">Enhance brand value with impactful sustainability initiatives.</li>
            </ul>
          </div>
          </div>

          </motion.div>
          {/* Small Company Card */}
          <motion.div
            initial={{
              scale: 1,
              boxShadow: "none",
              backgroundColor: "",
              opacity: 0.6,
            }}
            animate={
              isActive("Small")
                ? {
                    scale: 1.05,
                    boxShadow: "0px 2px 12px 0px #3D3D41",
                    backgroundColor: "#202028",
                    opacity: 1,
                  }
                : {}
            }
            whileHover={
              !isActive("Small")
                ? {
                    scale: 1.05,
                    boxShadow: "0px 2px 12px 0px #3D3D41",
                    backgroundColor: "#202028",
                    opacity: 1,
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCard("Small")}
            className="border-white/10 flex flex-col gap-6 p-6 rounded-3xl border-[1px] max-w-xs w-full"
          >
            {/* Card Content */}
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center justify-start w-full gap-3">
                <div className="inline-flex justify-center items-center">
                  <div className="outline size-8 outline-[1.5px] outline-zinc-600 bg-white/10 p-2 rounded-lg">
                    <img src={SmallBuisness.src} alt="onBoardingIcon" />
                  </div>
                </div>
                <div className="flex flex-col gap-0">
                  <h2 className="text-xl font-normal text-zinc-300">Small Businesses</h2>
                  <p className="text-[10px] -mt-1 text-zinc-500">
                    Choose your sides and contribute accordingly.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 h-80 w-full inline-flex items-center justify-between outline-[1px] rounded-2xl outline-zinc-700 outline flex-col overflow-hidden">
              <img className="h-36 w-32" src={SmallCactus.src} alt="Small Company" />
              <div className="justify-between w-full flex flex-col items-start px-4 py-2 overflow-hidden">
                <ul className="text-[11px] list-disc text-zinc-500">
                  <h3 className="text-base mb-1 -ml-2 font-normal text-zinc-400">
                    Are you a small business looking to offset Carbon?
                  </h3>
                  <li>Fractional ownership for scalability.</li>
                  <li>Gradual environmental contributions.</li>
                  <li>Embed sustainability in growth strategies.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
