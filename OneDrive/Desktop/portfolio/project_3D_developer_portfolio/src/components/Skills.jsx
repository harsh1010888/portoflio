import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import { styles } from '../styles';
import { skillCategories } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const SkillCard = ({ name, icon, index }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card'
    >
      <div className='bg-tertiary rounded-[10px] py-3 px-4 min-h-[60px] flex justify-evenly items-center'>
        <img src={icon} alt={name} className='w-8 h-8 object-contain' />
        <h3 className='text-white text-[16px] font-semibold text-center ml-3'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const SkillCategory = ({ title, skills }) => (
  <div className='mb-10'>
    <h2 className='text-white font-bold text-[24px] mb-5'>{title}</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} index={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-10'>
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
