"use client";
import { projectlist } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Project = () => {
  const ref = useRef(null);
 

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });


  return (
    <div ref={ref} className=" relative bg-black py-[72px] text-white bg-gradient-to-b from-black to-[#5D2CA8]">

      <div className="flex flex-col pt-10   ">
        <h1 className="text-5xl font-bold px-5 mb-3 text-center">Projects</h1>
      </div>
      <motion.div style={{ scaleX }} className="h-1.5 rounded-xl sticky top-0 left-0 z-10 w-full  bg-[#5D2CA8] mb-5 self-center"></motion.div>
      {projectlist.map(({ projectname, projectdes, projectstack, projectimg }) => (
       <ProjectItem key={projectname} projectname={projectname} projectdes={projectdes} projectstack={projectstack} projectimg={projectimg}/>
      ))}
    </div>
  );
};

export default Project;

interface ProjectitemProps{
  projectname: string;
  projectdes: string;
  projectimg:string;
  projectstack:string;
}


const ProjectItem = ({projectname , projectdes , projectimg , projectstack}:ProjectitemProps) =>{

  const imageref =useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageref,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0 ,1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])


  return(
    <motion.div    className="px-auto  flex flex-col justify-center items-center gap-12 py-[72px]">
    <div  className="  ">
      <h2 className="text-center text-3xl font-bold tracking-tighter">{projectname}</h2>
      <p className="text-xl text-center md:px-20 text-white/70 mt-5 mx-10">{projectdes}</p>
      <p className="text-xl text-center md:px-20 text-white/70 mt-5 mx-10">{projectstack}</p>
    </div>

    <motion.div 
    style={{
      opacity:opacity,
      rotateX:rotateX,
      transformPerspective: "800px",
    }} ref={imageref}
    className="h-[400px] w-[80%] relative">
      <Image src={projectimg} fill className=" object-contain aspect-square rounded-xl" alt="project img" />
    </motion.div>
  </motion.div>
  )
}