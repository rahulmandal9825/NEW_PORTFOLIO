import React from "react";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";



const Hero = () => {
    return (
        <Section className="pt-[75px] relative overflow-clip -mt-[3.25rem] bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] " crosses crossesOffset="lg:translate-y-[5.25rem]" customPadding="" id="hero">
            <div className=" flex flex-col container relative md:flex-row mx-auto mt-10 ">
                 <div className=" relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                  <div className=" relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
                    <div className=" relative bg-n-8 rounded-[1rem]">
                  
                <div className=" aspect-square rounded-b-[0.9rem] overflow-hidden ">
                  <Image src="/hero/robot.jpg" className="w-full rounded-xl " width={300} height={600} alt="hero"/>
                </div>
                  </div>
                  <Image src="/assets/images/cursor.png"  width={200} height={200} alt="floting cursor" className="absolute rotate-90 -top-[60px] -left-[150px] md:top-[280px] md:-left-[50px] md:rotate-0  "/>
                  </div>
                  
                </div>
               
                <div className="flex flex-col  relative z-1 mx-auto  mb-[4rem] mt-10 text-center md:text-start  lg:mb:[6rem] lg:w-[50%] text-[20px] gap-6 font-semibold text-zinc-300 md:mt-5 ">
                    <span className="inline-block relative  text-zinc-50 text-[30px] ">Rahul Raslal Mandal{" "} <Image src="/hero/curve.png" className=" absolute  left-[175px] md:left-0 mt-1 " width={290} height={30}alt="Curve"  /></span>
                    <h1 className=" text-zinc-50 ">Full Stack Web Developer</h1>

                    <h2 className="mb-6 w-full font-medium">
                        Hi, I'm Rahul Mandal, a Full Stack Web Developer skilled in HTML, CSS, JavaScript, Next.js,
                        React, Tailwind, Node.js, Express.js, Socket.io, RESTful APIs, MongoDB, Prisma, and SQL. I build
                        dynamic, responsive web applications and have experience with Prisma for deployment and scaling.
                    </h2>
                    <div className="flex md:gap-10 md:justify-normal mx-10 justify-between">
                     <Link href="/"  className="p-3 border-2 text-white hover:bg-white cursor-pointer transition hover:text-black border-white rounded-md text-[15px] font-normal  ">
                    See the Latest Works
                    </Link>
                    <Link href="/" className="p-3 border-2 text-white hover:bg-white cursor-pointer hover:text-black transition border-white rounded-md text-[15px] font-normal">
                      Contact Me
                    </Link> 
                    </div>
                    
                    <Image src="/assets/images/message.png"  width={200} height={200} alt="floting cursor" className=" absolute  -top-[120px]  md:top-[200px] -right-[50px] "/>
                </div>
                
            </div>
            <div className=" absolute h-[375px] w-[750px] md:w-[1750px] md:h-[490px] -bottom-[260px] left-1/2 -translate-x-1/2  rounded-[100%] bg-black border-[#B4BCDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] "></div>
        </Section>
    );
};

export default Hero;
