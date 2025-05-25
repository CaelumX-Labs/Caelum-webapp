/* eslint-disable react/no-children-prop */
import { useRef, useState } from 'react'
import Arrow from '../../../app/assets/Arrow.svg'
import { Button } from '../Button'
import { motion, useInView } from 'framer-motion'

export const GetInTouch = () => {
    const contactDetails = [{
        label: 'Twitter',
        value: 'CaelumX'
    },
    {
        label: 'Email',
        value: 'founder@caelum-x.com'
    }]
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, {once:true, margin:'-40px'})

    const [hover, setHover] = useState(-1);
    return <section ref={sectionRef} id='ContactUs' className="m-12 mt-48">
        <div className='relative'>
            <motion.h1
            initial={{ width: '0%' }}
            animate={isInView ? { width: '100%' } : { width: '0%' }}
            transition={{
                ease: 'easeOut',
                duration: 4,

            }}
     className="absolute overflow-hidden text-nowrap top-0 text-7xl font-['Anton_SC'] text-teal-500  uppercase">Get In Touch</motion.h1>
            <h1 className="text-7xl   font-['Anton_SC'] text-[#9CB0A9]  uppercase">Get In Touch</h1>
        </div>
        <div className='mt-12 flex w-full justify-between items-start'>
            <div className='inline-flex w-1/3   '>
                <div className='flex flex-col gap-8 w-full '>
                    {
                        contactDetails.map(({ label, value }, index) => (

                            <div
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(-1)}
                            key={index}
                            className=' border-b-[1px] pb-3 relative border-b-zinc-600/30 inline-flex  flex-col  justify-between'
                            >
                                <motion.div
                                    initial={{width:'0%'}}
                                    animate={{width : hover === index ? '100%' : '0%'}}
                                    transition={{
                                        ease: 'linear',
                                        duration: 0.4,
                                    }}
                                className='inset-0 absolute border-b-[1px] pb-3 border-b-teal-500'></motion.div>
                                <h5 className='text-zinc-500'>{label}</h5>
                                <div className='inline-flex flex-row gap-4 items-center justify-start'>
                                    <div className='inline-flex relative'>
                                    <motion.h2
                                    initial={{width:'0%'}}
                                    animate={{width : hover === index ? '100%' : '0%'}}
                                    transition={{
                                        ease: 'linear',
                                        duration: 0.4,
                                    }}
                                    className='absolute text-nowrap left-0 overflow-clip text-3xl text-teal-500'>
                                         {label === 'Twitter' ? (
                            <a href="https://x.com/caelum_carbon" target="_blank" rel="noopener noreferrer">
                                {value}
                            </a>
                        ) : (
                            value
                        )}{value}</motion.h2>
                                    <h2 className='text-3xl text-zinc-200'>{value}</h2>
                                    </div>
                                    <div className='inline-flex items-center justify-center'>
                                        <motion.img
                                        initial={{rotate:'135deg'}}
                                        animate={{rotate : hover === index ? '180deg' : '135deg'}}
                                        transition={{
                                            ease: 'linear',
                                            duration: 0.4,
                                        }}
                                        src={Arrow.src} className={` size-12 `} alt="Arrow Icon" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-8 w-1/2'>
                <div className='flex flex-row items-center  gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='John' id='firstName' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Doe' id='lastName' />
                    </div>
                </div>
                <div className='flex flex-row items-center  gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="email">Email</label>
                        <input type="email" placeholder='john@gmail.com' id='email' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-zinc-100 ' htmlFor="message">Message</label>
                    <input className='h-32' type="text" placeholder='' id='message' />
                </div>
                <div className='inline-flex'>

                    <Button label='Submit' className={''} children={undefined} />
                </div>
            </div>
        </div>
    </section>
}
