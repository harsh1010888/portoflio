import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-8 px-8 h-[320px] flex flex-col justify-between items-center'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain mb-4'
        />

        <h3 className='text-white text-[20px] font-bold text-center mb-4'>
          {title}
        </h3>
        {description && (
          <p className='text-secondary text-[14px] text-center leading-[1.5]'>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Full Stack Developer.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a curious and motivated Computer Science student passionate about JavaScript, React, databases, and Machine Learning. I
enjoy tackling DSA challenges, solving real-world problems, and constantly learning new tech. I'm a strong team player who thrives
in collaborative environments and is always ready to take on new challenges. Excited to contribute to web and AI projects in a
professional software development role while growing my skills and learning from experienced teams
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
