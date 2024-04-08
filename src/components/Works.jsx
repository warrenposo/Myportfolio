import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { staggerContainer } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, _blank)} className='black-gradient w-10 h-10 rounded-full flex justify-center curser-pointer'>
              <img src={github} alt='github' className='hover:underline w-1/2 h-1/2 object-contain ' />

            </div>
            <div onClick={() => window.open(live_link, _blank)} className='w-10 h-10 rounded-full flex justify-center curser-pointer'>
              <h1 className='text-red-900 text-center font-bold text-xl '>Live</h1>

            </div>
          </div>
        </div>
        <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-[14px] text-secondary mt-2'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2 '>{tags.map((tag)=>{
          return <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        })}</div>
      </Tilt>
    </motion.div>)
}



const Works = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
  >
    <span className='hash-span ' id="work">
      &nbsp;
    </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary texty-[17px] max-w-3xl leading-[30px]'
        >These are my work so far
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} index={index} {...project} />
        })}
      </div>
    </motion.section>
  )
}

export default Works 