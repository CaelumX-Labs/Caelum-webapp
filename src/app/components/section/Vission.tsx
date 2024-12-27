import Vission_1 from '../../../app/assets/VissionCard1.png';
import Vission_2 from '../../../app/assets/VissionCard2.png';
import { motion } from 'framer-motion';

export const Vission = () => {
  return (
    <section id="Vission" className="my-72 pl-6 mx-12 relative">
      {/* First Line */}
      <div
                    className="overflow-hidden w-full"

      >
        <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
        className=" text-7xl font-['Anton_SC'] tracking-wider text-[#CDCDCD] uppercase">
          To drive a
          <motion.div className="size-60 top-0 left-[360px] absolute">
            <img src={Vission_1.src} alt="Forest and boat" />
          </motion.div>
          <span className="text-teal-600 ml-[290px]">carbon-neutral</span>
        </motion.h1>
      </div>

      {/* Second Line */}
      <div
        className="overflow-hidden w-full"

      >
        <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className=" text-7xl font-['Anton_SC'] tracking-wider text-[#CDCDCD] uppercase">
            future through transparent
          <motion.div className="size-44 right-8 top-[76px] absolute">
            <img src={Vission_2.src} alt="River and bear" />
          </motion.div>
        </motion.h1>
      </div>
      <div
        className="overflow-hidden w-full"
      >
      <motion.h1
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
className=" text-7xl font-['Anton_SC'] tracking-wider text-[#CDCDCD] uppercase">
          <motion.span> accessible</motion.span>
          <motion.span className="text-teal-600 ml-5">blockchain</motion.span> innovations
        </motion.h1>
      </div>
    </section>
  );
};
