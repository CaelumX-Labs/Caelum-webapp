/* eslint-disable react/no-unescaped-entities */
import Logo from '../../../app/assets/Logo.svg'
import X from '../../../app/assets/X.svg'
import Whatsapp from '../../../app/assets/Whatsapp.svg'
import Instagram from '../../../app/assets/Instagram.svg'
import Gmail from '../../../app/assets/Gmail.svg'

export const Footer = () => {
    return <section id='Footer' className="bg-black mt-48 pt-12 ">
        <div className='pb-6 border-b-[1px] border-b-zinc-600/60 mx-12 '>
            <h1 className="text-7xl  font-['Inter'] text-[#9CB0A9]">founder<span className='text-teal-500/80'>@caelum-x</span>.com</h1>
        </div>
        <div className='flex flex-row justify-between items-start p-12 '>
            <div className='inline-fle flex-col '>
                <div className='size-10 inline-flex gap-4 items-center justify-start '>
                    <img src={Logo.src} alt="Logo" />
                    <div className='text-3xl font-["Sofia_Pro"] text-stone-100'>CaelumX</div>
                </div>
                <div className='mt-4'>
                    <h3 className='text-zinc-400 text-lg'>Mission</h3>
                    <p className='text-zinc-500 text-[12px] max-w-[520px]'><span className='text-teal-500/60'>"</span>Our mission is to empower individuals, businesses, and communities to actively participate in the fight against climate change by providing a decentralized platform for transparent carbon credit management, seamless trading, fractional ownership, and real-time impact tracking.<span className='text-teal-500/60'>"</span></p>
                </div>
            </div>
            <div className='inline-flex  flex-row gap-24 justify-end'>
                <div className='flex flex-col gap-2'>
                    <div className="text-zinc-300 ">
                        <h3 className='text-base '>Sitemap</h3>
                    </div>
                    <div className="text-zinc-400 flex flex-col text-sm gap-2">
                        <a href='#Home'>Home</a>
                        <a href='#Features'>Features</a>
                        <a href='#Questions'>Questions</a>
                        <a href='#AboutUs'>Testimonials</a>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="text-zinc-300 text-sm">
                        <h3 className='text-base'>Company</h3>
                    </div>
                    <div className="text-zinc-400 flex flex-col text-sm gap-2">
                        <a href='https://x.com/caelum_carbon'>Progress</a>
                        <a href='#Collaboration'>Collaboration</a>
                        <a href='#AboutUs'>About Us</a>
                        <a href='https://x.com/rhul_am'>Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row  justify-between items-center px-12 py-6 border-t-[1px] border-zinc-500/30' >
            <div className='text-zinc-400 text-sm'>
                <p>&copy; 2024 Blockforge. All rights reserved.</p>
            </div>
            <div className='flex flex-row gap-4 justify-end '>
                <img src={X.src} alt="X" />
                <img src={Whatsapp.src} alt="Whatsapp" />
                <img src={Instagram.src} alt="Instagram" />
                <img src={Gmail.src} alt="Gmail" />
            </div>
        </div>
    </section>
}
