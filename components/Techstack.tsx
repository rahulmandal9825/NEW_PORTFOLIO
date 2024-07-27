import {Techstackimage} from "@/contant";
import Image from "next/image";
import React from "react";

interface techstackporps {
    label: string;
    src: string;
}
const Techstack = () => {
    return (
        <div id="#techstack" className="bg-black text-white pt-[72px] pb-[72px] md:pt-0">
            <div className="container">
                <h2 className="text-3xl text-center  font-semibold">My Tech Stack</h2>
                <div
                    className=' overflow-hidden ml-10 mt-9 before:content-[""] after:content-[""]  before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0  before:left-0 after:top-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))]'
                >
                    <div className="flex gap-16">
                        {Techstackimage.map(({label, src}: techstackporps) => (
                            <div key={label} className="flex items-center gap-2">
                                <Image src={src} alt={label} height={40} width={40} className="flex-none" />
                                <h1>{label}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Techstack;
