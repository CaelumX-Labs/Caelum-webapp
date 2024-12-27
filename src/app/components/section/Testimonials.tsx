import { TestimonialCard } from "../TestimonialCard";
// import Profile_1 from '../assets/Profile.png';
// import Profile_2 from '../assets/Profile2.png';
import { motion, useInView } from "framer-motion";
import {  useRef, useState } from "react";

export const Testimonials = () => {
    const testimonials = [
        {
            keyPhrase: 'Traditional carbon markets often suffer from opacity, with limited visibility into credit origins and usage.',
            testimonial: 'CaelumX: Powered by the Solana blockchain, every transaction is fully transparent, enabling users to verify the source, authenticity, and lifecycle of each carbon credit.',
            name: 'Transparency and Trust',
            position: '',
           
        },
        {
            keyPhrase: 'Many platforms restrict carbon credit purchases to whole units, limiting accessibility for individuals or small businesses',
            testimonial: 'CaelumX: Offers fractional ownership through tokenized carbon credits, allowing anyone to contribute to carbon offsetting regardless of budget.',
            name: 'Fractional Ownership',
            position: '',
           
        },
        {
            keyPhrase: 'Traditional systems often involve slow manual processes for credit verification and trading.',
            testimonial: 'CaelumX: Leverages Solana’s high-speed blockchain for near-instant transactions and streamlined credit verification.',
            name: 'Speed and Efficiency',
            position: '',
           
        },
        {
            keyPhrase: 'Legacy platforms struggle to keep pace with the growing demand for carbon credits.',
            testimonial: 'CaelumX: Designed with scalability in mind, ensuring it can support the increasing demand for carbon offsets in a rapidly evolving climate landscape.',
            name: 'Innovation and Scalability',
            position: '',
            
        },
        {
            keyPhrase: 'Centralized marketplaces dominate, leaving users with limited control over their credits.',
            testimonial: 'CaelumX: Decentralized by design, giving users complete ownership and control of their tokenized credits.',
            name: 'Empowering Decentralization',
            position: '',
            
        },
        {
            keyPhrase: 'Platforms often cater primarily to enterprises, leaving individuals underrepresented.',
            testimonial: 'CaelumX: Provides tools for individuals to offset their personal carbon footprints, empowering climate-conscious consumers.',
            name: 'User-Centric Features',
            position: '',
            
        },
    ];

    const testimonialRef = useRef(null);
    const isInView = useInView(testimonialRef, { once: true, margin: '-10px' });

    // State to track if a card is hovered
    const [isHovered, setIsHovered] = useState(-1);

    return (
        <section ref={testimonialRef} id="Testimonials" className="m-12 mt-48">
            <div className="relative inline-flex">
                <motion.h1
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{
                        ease: 'easeOut',
                        duration: 2,
                    }}
                    className="text-7xl text-nowrap overflow-clip absolute left-0 font-['Anton_SC'] text-teal-500 uppercase"
                >
                    How We Stand Out
                </motion.h1>
                <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9] uppercase">
                How We Stand Out
                </h1>
            </div>
            <div className="overflow-x-clip w-full">
                <motion.div
                    className="flex flex-row gap-4"
                    initial={{ x: 0 }}
                    animate={{ x: '-80%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 10 ,
                    }}
                    whileHover={{
                    transition: {
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 80 ,}}}
                >
                    {[...testimonials,...testimonials, ...testimonials].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(-1)}
                            whileHover={{
                                scale: 1.2,
                                transition: { type: 'spring', stiffness: 300,damping: 30  },
                            }}
                            className="testimonial-card "
                        >
                            <TestimonialCard {...testimonial} hover={isHovered === index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
