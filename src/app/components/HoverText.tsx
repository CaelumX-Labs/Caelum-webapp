import { motion } from "framer-motion";
import { useState } from "react";




export const HoverableText = ({ name, year, align }: { name: string; year: string; align: string }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`flex flex-col items-${align} justify-center gap-1`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h4 className="text-sm text-teal-600">{year}</h4>
            <div className="relative">
                {/* Animated Reveal Text */}
                <motion.h3
                    initial={{ width: '0%' }}
                    animate={{ width: hovered ? '100%' : '0%' }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.8,
                    }}
                    className={`absolute text-nowrap bottom-0 left-0 text-4xl font-medium font-['Sofia_Pro'] uppercase text-[#14B7A6] overflow-hidden`}
                >
                    {name}
                </motion.h3>
                {/* Static Shadow Text */}
                <h3
                    className={`text-4xl font-medium font-['Sofia_Pro'] uppercase text-[#9CB0A9]`}
                >
                    {name}
                </h3>
            </div>
        </div>
    );
};

HoverableText.defaultProps = {

    align: 'start',

};
