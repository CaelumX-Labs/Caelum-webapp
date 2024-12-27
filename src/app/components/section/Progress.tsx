/* eslint-disable react/jsx-key */
import ProgressCard from '../../../app/assets/Container.png'
import Arrow from '../../../app/assets/Arrow.svg'
import { useRef, useState } from 'react'
import {  motion, useInView } from 'framer-motion'

export const Progress = () => {
    const progressList = [{
        year: 2024,
        title: 'Tokenized Carbon Credits',
        desc: 'Tokenized Carbon Credits: Successfully tokenized over carbon credits on the Solana Devnet, laying the foundation for decentralized trading and ownership.'
    },
    {
        year: 2024,
        title: 'Registry for Carbon Credits',
        desc: 'Building trust and transperency with CaelumX-Reistry for Carbon Credits. We will be working with Strandard Registries to create a registry for carbon credits, ensuring that they are authentic and traceable.'
    }, {
        year: 2024,
        title: 'CaelumX-Ledger for Carbon Credits',
        desc: 'CaelumX-Ledger for Carbon Credits: We are building a blockchain-based ledger for carbon credits, which will be used to track the ownership and trading of carbon credits.'
    },
    ]


    const progressSectionRef = useRef(null)
    const isInView = useInView(progressSectionRef, { once: true, margin: '-10px' })

    const [isOpenProgress, setIsOpenProgress] = useState(-1)

    return <section
        ref={progressSectionRef}
        id='Progress' className="mt-[360px] overflow-hidden mb-[240px] px-12">
        <div className="mb-12 relative inline-flex">
            <motion.h3
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : { width: '0%' }}
                transition={{
                    ease: 'easeOut',
                    duration: 2,

                }}
                className={`absolute text-nowrap  text-7xl font-['Anton_SC'] uppercase text-[#14B7A6] overflow-hidden`}
            >
                Progress
            </motion.h3>
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Progress</h1>
        </div>
        <div className='flex flex-row w-full  items-center mt-12 justify-between '>
            <div

                className='inline-flex w-2/3   flex-col gap-8'>
                {progressList.map(({ year, title, desc }, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.8 }}
                        onClick={() => isOpenProgress === index ? setIsOpenProgress(-1) : setIsOpenProgress(index)}
                        className='inline-flex relative  border-b-[1px] py-2 border-b-zinc-700'>
                            <motion.div

                            initial={{width:'0%'}}
                            animate={ isOpenProgress === index ?  { width :  '100%'} : {width :  '0%'}}
                            transition={{
                                duration: 0.6,
                                ease : 'linear'
                            }}
                            className='inset-0 border-b-[1px] py-4 border-b-teal-700 absolute'></motion.div>
                        <div className='flex  flex-col  items-start justify-center w-full '>
                            <h5 className="text-sm text-teal-600">{year}</h5>
                            <div className='inline-flex flex-row w-full items-center justify-between  '>
                                <h3 className="text-[20px] text-nowrap  font-['Sofia_Pro'] uppercase text-zinc-300">{title}</h3>
                                <div className='inline-flex  ' >
                                    <motion.img
                                        initial={{rotate:'135deg'}}
                                        animate={{rotate : isOpenProgress === index ? '180deg' : '135deg'}}
                                        transition={{
                                            ease: 'linear',
                                            duration: 0.4,
                                        }}
                                    className={`size-8  `} src={Arrow.src} alt="Arrow" />
                                </div>
                            </div>
                            <motion.div
                           initial={{height:'0%'}}
                           animate={ isOpenProgress === index ?  { height :  '100%'} : {height :  '0%'}}
                           transition={{
                               duration: 0.6,
                               ease : 'linear'
                           }}
                            className={`overflow-clip  relative text-zinc-400 text-sm`}>
                            <p className={`  `}>{desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}

            </div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className='w-2/3 p-0   inline-flex items-center justify-center'>
                <img src={ProgressCard.src} alt="Progress Forest" />
            </motion.div>
        </div>
    </section>
}
