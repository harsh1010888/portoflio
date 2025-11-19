import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import linkedin from "../assets/social/linkedin.png";
import github from "../assets/social/github.png";
import leetcode from "../assets/social/leetcode.png";

const SocialCard = ({ index, name, description, icon, link, isEmoji }) => (
  <Tilt className='xs:w-[350px] w-full mx-auto'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
          transition: true,
          reverse: true,
        }}
        onClick={() => window.open(link, "_blank")}
        className='bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer hover:bg-black-200 transition-all duration-300 ease-in-out transform hover:scale-[1.02]'
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-3xl shadow-xl">
          {isEmoji ? (
            <span className='text-5xl'>{icon}</span>
          ) : (
            <img
              src={icon}
              alt={name}
              className='w-16 h-16 object-contain'
            />
          )}
        </div>
        <h3 className='text-white text-[24px] font-bold text-center mt-4'>
          {name}
        </h3>
        <p className='text-secondary text-[16px] text-center mt-2'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Social = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/harshomar10",
      description: "Let's connect! Follow my professional journey and experience",
      icon: linkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/harsh1010888",
      description: "Explore my repositories, projects and open-source contributions",
      icon: github,
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/harshjord10/",
      description: "Check out my problem-solving skills and coding challenges",
      icon: leetcode,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Profiles</p>
        <h2 className={styles.sectionHeadText}>Social Links.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {socialLinks.map((social, index) => (
          <SocialCard 
            key={social.name}
            index={index}
            {...social}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Social, "social");
