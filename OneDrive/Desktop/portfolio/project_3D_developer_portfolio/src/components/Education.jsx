import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={education.icon}
          alt={education.institution}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {education.institution}
      </p>
      <p className='text-secondary text-[14px] font-medium mt-1'>{education.board}</p>
      <p className='text-white text-[16px] font-bold mt-2'>{education.grade}</p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>My Educational Journey</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} education={edu} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
