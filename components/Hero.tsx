"use client";
import React from "react";
import Section from "./Section";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {

    const textVariants = {
        initial: {
            x: +500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
                
            },
        },}
        const imgVariants = {
            initial: {
                y: +500,
                opacity: 0,
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    staggerChildren: 0.1,
                    
                },
            },}
    return (
        <Section
            className="pt-[75px] relative overflow-clip md:-mt-[40px]  bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] "
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPadding=""
            id="hero"
        >
            <div  className=" flex flex-col container relative md:flex-row mx-auto mt-10  ">
                <div className=" relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className=" relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
                        <div className=" relative bg-n-8 rounded-[1rem]">
                            <div className=" aspect-square rounded-b-[0.9rem] overflow-hidden ">
                                <Image
                                    src="/hero/robot.jpg"
                                    className="w-full rounded-xl "
                                    width={300}
                                    height={600}
                                    alt="hero"
                                />
                            </div>
                        </div>
                        <motion.div
                        drag
                        dragSnapToOrigin
                        variants={imgVariants} initial="initial" animate="animate" 
                        className="absolute  -bottom-[60px] -left-[100px] md:top-[280px] md:-left-[50px] md:rotate-0 ">
                        <Image
                            src="/assets/images/cursor.png"
                            width={200}
                            height={200}
                            alt="floting cursor"
                            className=" "
                            draggable="false"
                        />
                        </motion.div>
                        
                    </div>
                </div>

                <motion.div variants={textVariants} initial="initial" animate="animate" className="flex flex-col  relative z-1 mx-auto  mb-[4rem] mt-10 text-center md:text-start  lg:mb:[6rem] lg:w-[50%] text-[20px] gap-6 font-semibold text-zinc-300 md:mt-5 ">
                    <motion.span variants={textVariants} className="inline-block relative  text-zinc-50 text-[30px] ">
                        Rahul Raslal Mandal{" "}
                        <Image
                            src="/hero/curve.png"
                            className=" absolute  left-[36px] md:left-0 mt-1 "
                            width={290}
                            height={30}
                            alt="Curve"
                        />
                    </motion.span>
                    <motion.h1 variants={textVariants} className=" text-zinc-50 ">Full Stack Web Developer</motion.h1>

                    <motion.h2  variants={textVariants} className="mb-6 w-full font-medium">
                        Hi, Im Rahul Mandal, a Full Stack Web Developer skilled in HTML, CSS, JavaScript, Next.js,
                        React, Tailwind, Node.js, Express.js, Socket.io, RESTful APIs, MongoDB, Prisma, and SQL. I build
                        dynamic, responsive web applications and have experience with Prisma for deployment and scaling.
                    </motion.h2>
                    <motion.div variants={textVariants}  className="flex md:gap-10 md:justify-normal  md:mx-10 justify-between">
                        <Link
                            to="project"
                            className="p-3 border-2 text-white hover:bg-white cursor-pointer transition hover:text-black border-white rounded-md text-[15px] font-normal  "
                        >
                            See the Latest Works
                        </Link>
                        <Link
                            to="contactme"
                            className="p-3 border-2 text-white hover:bg-white cursor-pointer hover:text-black transition border-white rounded-md text-[15px] font-normal"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                      <motion.div     
                       drag
                       dragSnapToOrigin
                      className=" absolute  hidden -top-[470px] md:block md:top-[200px] -right-[50px] "
                       >

                      <Image
                        src="/assets/images/message.png"
                        width={200}
                        height={200}
                        alt="floting cursor"
                       draggable="false"
                    />     
                      </motion.div>
                 
                </motion.div>
            </div>
            <div className=" absolute h-[375px] w-[750px] md:w-[1750px] md:h-[490px] -bottom-[260px] left-1/2 -translate-x-1/2  rounded-[100%] bg-black border-[#B4BCDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] transition-all "></div>
        </Section>
    );
};

export default Hero;
