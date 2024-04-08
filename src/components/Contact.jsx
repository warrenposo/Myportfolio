import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';;
import { staggerContainer } from '../utils/motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''

  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // TWC_BgRu7mpDsxQBW
  // template_mkcjjpo
  // service_bjkztlc

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_bjkztlc",
      "template_mkcjjpo",
      {
        from_name: form.name,
        to_name: 'warren',
        from_email: form.email,
        to_email: 'warrenokumu98@gmail.com',
        message: form.message
      },
      'TWC_BgRu7mpDsxQBW'
    ).then(() => {
      setLoading(false);
      alert("Thank you. Warren will reach out to you soon.");
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false);
      console.log(console.error(error.message));
      alert("Something went wrong")
    })
  }

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
    >
      <span className='hash-span ' id='contact'>
        &nbsp;
      </span>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}
          className='flex[0.75] bg-black-100 p-8 rounded-2xl '>
          <p className={`${styles.sectionSubText}`}>Get Intouch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Name
              </span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Email
              </span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Message
              </span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="what do you want to say"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-empty shadow-primary rounded-xl black-gradient'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px]  h-[350px] '
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact