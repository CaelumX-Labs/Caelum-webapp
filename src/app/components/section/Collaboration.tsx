/* eslint-disable react/jsx-key */
import Globe from '../../../app/assets/Globe.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HoverableText } from '../../components/HoverText';
import turbin3 from '../../../app/assets/turbin3.png';
export const Collaboration = () => {
    const collaborationList = [
        { name: 'Turbin3', year: 2024 },

    ];

    // Ref for the section
    const sectionRef = useRef(null);

    // Check if the section is in view
    const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

    return (
        <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}

        className="flex flex-col gap-16 px-12"
        >
            <div className="mb-12 relative inline-flex">
                <motion.h3
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{
                        ease: 'easeOut',
                        duration: 4,

                    }}
                    className={`absolute text-nowrap text-7xl font-['Anton_SC'] uppercase text-[#14B7A6] overflow-hidden`}
                >
                    Collaboration
                </motion.h3>
                <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9] uppercase">
                    Collaboration
                </h1>
            </div>
            <div className="relative w-full mt-12">
                <div className="flex flex-row w-full justify-between items-center mt-4">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center gap-16">
                        {collaborationList.map(({ name, year },index) => (
                            <motion.div
                            ref={sectionRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut', delay:index*0.4 }}

                            >
                            <HoverableText key={name} name={name} year={year.toString()} align="start" />
                            </motion.div>
                        ))}
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col items-end justify-center gap-16">
                        <div className="relative">
                            <img src={turbin3.src} alt="Turbin3" />
                        </div>
                    </div>
                </div>
                {/* Globe Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <img src={Globe.src} alt="3D globe" />
                </div>
            </div>
        </motion.section>
    );
};
