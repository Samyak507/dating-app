'use client'
import ArrowRight from '@/assets/arrow-right.svg';
import startImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return <section className="bg-gradient-to-b from-white to[#D2DCFF] py-24 overflow-x-clip ">
    <div className="container">
      <div className='section-heading relative'>
        <h2 className="section-title">
          Sign up for FREE Today
        </h2>
        <p className="section-description mt-5">
          Are You Ready to DATE ?
        </p>
        <motion.img src={startImage.src} alt='startImage' width={360} className='absolute -left-[350px] -top-[137px] '
          style={{
            translateY,
          }} />
        <motion.img src={springImage.src} alt='springImage' width={360} className='absolute -right-[331px] -top-[19px] ' style={{
          translateY,
        }} />
      </div>
      <div className="flex gap-2 mt-10 justify-center ">
        <button className="btn btn-primary">Download For Android</button>
        <button className="btn btn-text gap-1">
          <span>Learn More !</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

    </div>
  </section>;
};
