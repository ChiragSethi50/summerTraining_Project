import React from 'react'
import { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const transition = {type: 'spring', duration: 3};
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className='Testimonials' id='testimonials'>
        <div className='left-t'>
            <span>testimonials</span>
            <span>what our members </span>
            <span>say about us</span>
            <motion.span
                initial={{opacity:0, x:-100}}
                transition={{...transition, duration:5}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:100}}
                >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'var(--red)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-t'>
            <motion.div 
            initial={{opacity: 0, x:-100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1, x:0}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x:100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1, x:0}}
            ></motion.div>

            <motion.img 
                key={selected}
                initial={{opacity:0, x:100}}
                transition={{...transition, duration:5}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
            src={testimonialsData[selected].image }></motion.img>
            <div className='arrows'>
                <img 
                onClick={()=>(
                    selected===0
                    ? setSelected(tLenght -1)
                    : setSelected((prev)=> prev -1)
                )}
                 src={leftArrow} alt="left"/>
                <img 
                onClick={()=> (
                    selected === tLenght - 1
                    ? setSelected(0)
                    : setSelected((prev)=> prev + 1)
                )}
                src={rightArrow} />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
