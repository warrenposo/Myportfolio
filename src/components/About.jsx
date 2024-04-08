import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
          <img src={icon} alt={title} className='w-16 h-16 object-contain ' />
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>

      </motion.div>
    </Tilt>)
};

const About = () => {
  return (

    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
    >
      <span className='hash-span ' id="about">
        &nbsp;
      </span>
      <motion.div variants={textVariant()} className=''>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '>
        I am a versatile IT professional with a proven track record in software development, networking,database management , article writting , technical writing With a passion for technology and a commitment to excellence, I bring a diverse skill set that enables me to tackle complex challenges and drive innovation in diverse environments.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </motion.section>
  )
}


export default About;

