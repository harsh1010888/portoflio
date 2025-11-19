import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Background</p>
        <h2 className={styles.sectionHeadText}>My Resume.</h2>
      </motion.div>

      <div className="mt-20 flex justify-center">
        <Tilt
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className="w-full max-w-xl"
        >
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className='green-pink-gradient p-[1px] rounded-2xl'
          >
            <div className='bg-tertiary rounded-2xl p-8 flex flex-col items-center justify-center min-h-[280px] w-full'>
              <p className='text-white text-[20px] text-center mb-8'>
                Download my resume to learn more about my skills, experience, and qualifications
              </p>

              <motion.a
                href="https://drive.google.com/drive/folders/1k1zMjaLj-rxMFfgcxthL-l24p8akj8yZ?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary py-3 px-8 outline-none w-fit 
                text-white font-bold shadow-md shadow-primary rounded-xl 
                flex items-center justify-center gap-2 cursor-pointer
                transition-colors duration-300 ease-in-out hover:bg-secondary'
              >
                <span>View Resume on Drive</span>
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7h4m0 0v4m0-4l-5 5m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
