import {featuresaboutme} from "@/constants";
import {ComputerIcon, SearchIcon} from "lucide-react";
import React from "react";
import AboutBox from "./AboutBox";

const Aboutus = () => {
    return (
        <div className="bg-black text-white py-[72px] ">
            <div className=" container pl-14">
                <h2 className="text-center font-bold text-5xl tracking-tighter">About me</h2>
                <div className="max-w-xl sm:max-w-3xl mx-auto">
                    <p className="text-center mt-5 text-xl text-white/70">
                        Passionate Full Stack Web Developer skilled in JavaScript, React, Node.js, Prisma , sql and
                        cloud technologies. Specializing in creating scalable web applications, secure authentication
                        systems, and advanced API integrations. Committed to Agile methodologies, delivering
                        high-quality solutions that enhance user experience and operational efficiency.
                    </p>
                </div>

                <div className=" mt-16 flex cursor-pointer  flex-col gap-4 sm:flex-row sm:flex-1 ">
                    {featuresaboutme.map(({title, description}) => (
                   <AboutBox title={title} description={description} key={title}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
