import { useRef } from 'react'
import Feature_1 from '../../../app/assets/Feature1.png'
import Feature_2 from '../../../app/assets/Feature2.png'
import Feature_3 from '../../../app/assets/Feature3.png'
import { motion, useInView } from 'framer-motion'

export const Feature = () => {

    const featureRef = useRef(null)

    const collaborationSectionRef = useRef(null)
    const isInView = useInView(collaborationSectionRef, {once:true, margin: '-50px'})

    return <motion.section
    ref={collaborationSectionRef}
    initial={{ opacity: 0, y: 25 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    id='Feature' className="mt-[360px] overflow-hidden mb-[240px] px-12">
        <div className="mb-12 relative inline-flex">
        <motion.h3
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{
                        ease: 'easeOut',
                        duration: 2,

                    }}
                    className={`absolute text-nowrap text-7xl font-['Anton_SC'] uppercase text-[#14B7A6] overflow-hidden`}
                >
                    Feature
                </motion.h3>
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Feature</h1>
        </div>

        <div className=' flex flex-col gap-16 mt-12'>
            <div className='flex w-full flex-row items-center justify-between '>
            <motion.div
                            ref={featureRef}
                            initial={{ opacity: 0, x: -100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 2, ease: 'easeOut',  }}

                 className='inline-flex items-center justify-center'>
                    <img src={Feature_1.src} alt="Feature Card" />
                </motion.div>
                <motion.div
                             ref={featureRef}
                             initial={{ opacity: 0, x: 100 }}
                             animate={isInView ? { opacity: 1, x: 0 } : {}}
                             transition={{ duration: 2, ease: 'easeOut',  }}

                className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Tokenisation & Ownership Unlocked</h5>
                    <h3 className='text-3xl text-zinc-200'>Unlock the power of <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Tokenization</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Fractional Ownership</span> Carbon Credits with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Caelum</span></h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Caelum makes carbon offsetting accessible to all through tokenized, fractional carbon credits—empowering a transparent and inclusive path to a greener future.</p>
                </motion.div>
            </div>
            <div className='flex w-full flex-row items-center justify-between '>
            <motion.div
            ref={featureRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, ease: 'easeOut', delay: 1.2 }}

                className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Accessibility Unlocked</h5>
                    <h3 className='text-3xl text-zinc-200'><span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Sustainability</span> isn’t just for the big players anymore.</h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Explore a diverse range of verified carbon credit projects with ease. Our advanced search tools allow you to find projects that align with your values and sustainability goals. Whether you want to buy, trade, or support impactful initiatives, our platform ensures a seamless and transparent experience for every user.</p>
                </motion.div>
                <motion.div
                            ref={featureRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 2, ease: 'easeOut', delay:1.2 }}

                 className='inline-flex items-center justify-center'>
                    <img src={Feature_2.src} alt="Feature Card" />
                </motion.div>
            </div>
            <div
            className='flex w-full flex-row items-center justify-between '>
                <motion.div
                            ref={featureRef}
                            initial={{ opacity: 0, x: -100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 2, ease: 'easeOut', delay:2.4 }}

                 className='inline-flex items-center justify-center'>
                    <img src={Feature_3.src} alt="Feature Card" />
                </motion.div>
                <motion.div
                            ref={featureRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 2, ease: 'easeOut', delay:2.4 }}

                className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Powerpacked Fetures</h5>
                    <h3 className='text-3xl text-zinc-200'>Additional Features To <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Manage</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6 ]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Track</span>    Carbon Credits with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Caelum</span></h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Our platform offers a comprehensive suite of tools to help you easily manage, track, and trade carbon credits. With features like customizable impact reports, real-time notifications, and seamless integration with external verified sources, you can stay on top of your environmental contributions and make informed decisions with ease.</p>
                </motion.div>
            </div>

        </div>
    </motion.section>
}
