import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
export const NavBar = () => {
      const navItems = [
        {
            name: 'Home',
            id : '#Hero'
         },
        {
            name: 'Progress',
            id : '#Progress'
         },
        {
            name: 'Testimonial',
            id : '#Testimonial' },
        {
            name: 'About Us',
            id : '#AboutUs'
         },
        {
            name: 'Contact',
            id : '#ContactUs' },
      ];


        const [isActive, setIsActive] = useState('');

        const activeNavButton =
        ' text-zinc-800  bg-teal-300/90 backdrop-blur-md shadow-sm ';

        const { scrollY } = useScroll()
        const [isFixed, setIsFixed] = useState(false)
        useMotionValueEvent(scrollY, "change", (latest) => {
            setIsFixed(latest > 1600)
        })



    return       <motion.div
    initial={{y: 0, x:'50%'}}
    animate={{ y: isFixed ? 0 : [-600 , 0] }} // Smooth transition
    transition={{ ease: 'easeOut', duration: 2 }}

        className={`flex shadow-lg shadow-emerald-50/5 z-50 top-5 transform-gpu duration-100 ease-in ${ isFixed  ? 'fixed' : 'absolute' }  w-1/2 flex-row  justify-between items-center rounded-[10px] px-2 py-2 outline outline-1 outline-teal-100/20 backdrop-blur-lg`}
      >
        {navItems.map(({ name, id }) => (
          <a
            href={id}
            onClick={() => setIsActive(name)}
            key={name}
            className={`cursor-pointer font-['inter'] text-sm font-md rounded-[6px] px-4 py-1 transform-gpu duration-100 ease-linear ${
              isActive === name ? activeNavButton : 'text-zinc-300'
            }`}
          >
            {name}
          </a>
        ))}
      </motion.div>
}
