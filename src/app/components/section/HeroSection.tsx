/* eslint-disable @typescript-eslint/no-unused-vars */
import CardImage from '../../../app/assets/Card.jpeg'
import Noice from '../../../app/assets/Background.svg'
import Card_1 from '../../../app/assets/Card1.png'
import Card_2 from '../../../app/assets/Card2.png'
import Card_3 from '../../../app/assets/Card3.png'
import { motion } from 'framer-motion'
// import { Button } from '../Button'

export const HeroSection = () => {
    const cardDetails = [{
        lable : "ForestForFututre",
        task : "Afforestaion",
        country : "Brazil",
        tags : [{
            svg :         <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40346 2.12321C8.40369 2.44715 8.2879 2.76047 8.07706 3.00641L7.37434 3.80513C6.94835 4.31108 6.94835 5.05022 7.37434 5.55617L8.0617 6.37409C8.39843 6.77618 8.47217 7.33677 8.25088 7.81226C8.02958 8.28776 7.5532 8.59232 7.02874 8.59361H4.07194C3.54677 8.59381 3.06903 8.28981 2.84677 7.814C2.62451 7.33819 2.69796 6.77671 3.03514 6.37409L3.73018 5.54465C4.15226 5.04307 4.15226 4.31055 3.73018 3.80897L3.03514 2.97953C2.69796 2.57691 2.62451 2.01543 2.84677 1.53962C3.06903 1.06381 3.54677 0.759811 4.07194 0.76001H7.05178C7.41227 0.759997 7.75783 0.903986 8.01165 1.15997C8.26548 1.41596 8.40653 1.76273 8.40346 2.12321ZM4.49443 7.08057H6.62946C6.73246 7.09294 6.83338 7.04495 6.88878 6.95726C6.94419 6.86956 6.94419 6.75781 6.88878 6.67012C6.83338 6.58242 6.73246 6.53443 6.62946 6.54681H4.49443C4.39143 6.53443 4.29051 6.58242 4.23511 6.67012C4.1797 6.75781 4.1797 6.86956 4.23511 6.95726C4.29051 7.04495 4.39143 7.09294 4.49443 7.08057Z" fill="white"/>
            </svg>,
            lable : 'C100+'
        },{
            svg : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
          </svg>,
            lable : 'SDG'
        }],
        carbonCredits : 76,
        vintageYear : 2022,
        price : 220
    },
    {
        Lable : "ForestForFututre",
        Task : "Afforestaion",
        Country : "Brazil",
        Tags : [{
            svg :         <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40346 2.12321C8.40369 2.44715 8.2879 2.76047 8.07706 3.00641L7.37434 3.80513C6.94835 4.31108 6.94835 5.05022 7.37434 5.55617L8.0617 6.37409C8.39843 6.77618 8.47217 7.33677 8.25088 7.81226C8.02958 8.28776 7.5532 8.59232 7.02874 8.59361H4.07194C3.54677 8.59381 3.06903 8.28981 2.84677 7.814C2.62451 7.33819 2.69796 6.77671 3.03514 6.37409L3.73018 5.54465C4.15226 5.04307 4.15226 4.31055 3.73018 3.80897L3.03514 2.97953C2.69796 2.57691 2.62451 2.01543 2.84677 1.53962C3.06903 1.06381 3.54677 0.759811 4.07194 0.76001H7.05178C7.41227 0.759997 7.75783 0.903986 8.01165 1.15997C8.26548 1.41596 8.40653 1.76273 8.40346 2.12321ZM4.49443 7.08057H6.62946C6.73246 7.09294 6.83338 7.04495 6.88878 6.95726C6.94419 6.86956 6.94419 6.75781 6.88878 6.67012C6.83338 6.58242 6.73246 6.53443 6.62946 6.54681H4.49443C4.39143 6.53443 4.29051 6.58242 4.23511 6.67012C4.1797 6.75781 4.1797 6.86956 4.23511 6.95726C4.29051 7.04495 4.39143 7.09294 4.49443 7.08057Z" fill="white"/>
            </svg>,
            lable : 'C100+'
        },{
            svg : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
          </svg>,
            lable : 'SDG'
        }],
        CarbonCredits : 76,
        VintageYear : 2022,
        Price : 220
    },
    {
        Lable : "ForestForFututre",
        Task : "Afforestaion",
        Country : "Brazil",
        Tags : [{
            svg :         <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40346 2.12321C8.40369 2.44715 8.2879 2.76047 8.07706 3.00641L7.37434 3.80513C6.94835 4.31108 6.94835 5.05022 7.37434 5.55617L8.0617 6.37409C8.39843 6.77618 8.47217 7.33677 8.25088 7.81226C8.02958 8.28776 7.5532 8.59232 7.02874 8.59361H4.07194C3.54677 8.59381 3.06903 8.28981 2.84677 7.814C2.62451 7.33819 2.69796 6.77671 3.03514 6.37409L3.73018 5.54465C4.15226 5.04307 4.15226 4.31055 3.73018 3.80897L3.03514 2.97953C2.69796 2.57691 2.62451 2.01543 2.84677 1.53962C3.06903 1.06381 3.54677 0.759811 4.07194 0.76001H7.05178C7.41227 0.759997 7.75783 0.903986 8.01165 1.15997C8.26548 1.41596 8.40653 1.76273 8.40346 2.12321ZM4.49443 7.08057H6.62946C6.73246 7.09294 6.83338 7.04495 6.88878 6.95726C6.94419 6.86956 6.94419 6.75781 6.88878 6.67012C6.83338 6.58242 6.73246 6.53443 6.62946 6.54681H4.49443C4.39143 6.53443 4.29051 6.58242 4.23511 6.67012C4.1797 6.75781 4.1797 6.86956 4.23511 6.95726C4.29051 7.04495 4.39143 7.09294 4.49443 7.08057Z" fill="white"/>
            </svg>,
            lable : 'C100+'
        },{
            svg : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
          </svg>,
            lable : 'SDG'
        }],
        CarbonCredits : 76,
        VintageYear : 2022,
        Price : 220
    }]

        // Define the animation variants
        const floatAnimation = (delay = 0) => ({
          animate: {
            y: [-8, 8],
            rotate: 0  ,
            transition: {
              delay,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
            },
          },
          whileHover: {
            scale: 1.2,
          },
        });


    return <section id='Hero' className=''>

        <div className="z-0 overflow-hidden inline-flex items-center justify-center mt-20">
           <div className='w-full flex items-center justify-center'>
           <h1
                className="pl-4 text-[116px] tracking-[0.02em] tracking-tight leading-[120px]  uppercase font-extrabold font-['Anton_SC'] text-[#CDCDCD]"
            >Building a <span className="text-[#39B79F]">Carbon-Neutral</span> World with Blockchain </h1>
           </div>
        </div>
        <div className='flex-row flex justify-between  items-end p-5'>
            <div className='inline-flex w-2/3 items-center '>
                <h3 className='text-zinc-400 text-sm leading-[24px]'>Unlock the power of fractional ownership and make carbon offsetting accessible to everyone. Our platform allows individuals and businesses to buy and trade tokenized carbon credits, ensuring transparency at every step with blockchain technology. With real-time tracking and a decentralized system, you can confidently participate in the carbon market, knowing that every transaction is secure, verifiable, and impactful. Join the waitlist to be part of the future or track your progress with transparency on X.</h3>
            </div>
            <div className='inline-flex gap-3 mr-2  flex-col justify-end items-end'>
            <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block text-sm group  -mb-10"
                    onClick={() => window.location.href = '/waitlist'}
                >
                    <span className="relative z-10 block px-5  bg-black/5   py-2.5 overflow-hidden font-semibold leading-tight text-zinc-200 shadow-md shadow-teal-200/5 transition-colors duration-300 ease-out outline outline-1 outline-teal-100/20 backdrop-blur-lg rounded-lg group-hover:text-zinc-800">
                        <span className="absolute left-0 w-40 h-40  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#ccc] group-hover:-rotate-180 ease"></span>
                        <span className="relative px-[2px]">Join Waitlist</span>
                    </span>
                </motion.button>
            </div>
            <div className='inline-flex gap-3 mr-2  flex-col justify-end items-end'>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block text-sm group  -mb-10"
                    onClick={() => window.location.href = '/onboarding'}
                >
                    <span className="relative z-10 block px-5  bg-black/5   py-2.5 overflow-hidden font-semibold leading-tight text-zinc-200 shadow-md shadow-teal-200/5 transition-colors duration-300 ease-out outline outline-1 outline-teal-100/20 backdrop-blur-lg rounded-lg group-hover:text-zinc-800">
                        <span className="absolute left-0 w-40 h-40  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#ccc] group-hover:-rotate-180 ease"></span>
                        <span className="relative px-[2px]">Join Journey</span>
                    </span>
                </motion.button>
            </div>
        </div>
            <div className="inset-0 absolute -z-20 "  >
                <img src={Noice.src} className='w-full opacity-10' alt="" />
            </div>
        <div className="h-80  w-full absolute top-0  flex items-center justify-center -z-40 overflow-x-clip" >

                <div className="inline-flex items-center justify-center">
                    <div className="size-[600px] bg-[#D3FFCA]/30 blur-[300px] rounded-full absolute -top-40 left-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[400px] bg-[#07B782]/20 blur-[300px] rounded-full absolute top-[200px] right-[300px] -z-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[400px] bg-[#07B782]/30 blur-[300px] rounded-full absolute -top-[100px] right-[300px] -z-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[500px] bg-[#8AEE98]/30 blur-[300px] rounded-full absolute top-0 -right-20 -z-40"></div>
                </div>

            {/* <div className="size-60 bg-[#07B782]/40 blur-[300px] rounded-full absolute"></div> */}
        </div>
    <div className='flex  p-6  shadow-sm '>
        <div
        className='inline-flex overflow-clip h-[500px] w-[4000px]  rounded-[40px] drop-shadow-md'
        style={{
            backgroundImage: `url(${CardImage.src})`,
            backgroundSize: "cover", // Ensures the image covers the parent
            backgroundPosition: "bottom", // Centers the image within the parent
            backgroundRepeat: "no-repeat", // Prevents image repetition

        }}
        >
        </div>


    </div>

                    {/* <Card cardDetails={cardDetails[0]} /> */}
                    <motion.div {...floatAnimation(0)} className=' absolute -bottom-20 left-1/3 size-60 shadow-lg'>
                        <img src={Card_1.src} alt="" />
                    </motion.div >


                    {/* <Card cardDetails={cardDetails[1]} /> */}
                    <motion.div {...floatAnimation(0.4)} className='bg-none absolute -bottom-40 right-10 size-60 shadow-lg'>
                        <img src={Card_2.src} alt="" />
                    </motion.div >

                    {/* <Card cardDetails={cardDetails[2]} /> */}
                    <motion.div {...floatAnimation()} className='bg-none absolute -bottom-96 left-10 size-60 shadow-lg'>
                        <img src={Card_3.src} alt="" />
                    </motion.div >

    </section>
}
