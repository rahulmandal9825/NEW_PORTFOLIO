"use client";

import {navLinks} from "@/constants";
import Image from "next/image";
import {Cross, Menu, Plus} from "lucide-react";
import React, {useState} from "react";
import {HamburgerMenu} from "./design/Headermovnav";
import {disablePageScroll, enablePageScroll} from "scroll-lock";

const Header = () => {
    const [openNavigation, setopenNavigation] = useState(true);

    const toggleNavigation = () => {
        if (openNavigation) {
            setopenNavigation(false);
            enablePageScroll();
        } else {
            setopenNavigation(true);
            disablePageScroll();
        }
    };

    const hanndleonClick = () => {
        if (!openNavigation) {
            return;
        }
        setopenNavigation(false);
        enablePageScroll();
    };

    return (
        <div
            className={`flex py-2  fixed top-0 z-50 w-full bg-n-8/20  lg:bg-n-8/90  ${
                openNavigation ? "bg-n-8" : " bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 ">
                <a className="flex items-center relative">
                    {/* <div className=" hidden md:block absolute w-full top-1 bottom-0 bg-[linear-gradient(to_right,#f87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div> */}
                    <div className="  relative flex items-center pr-3 rounded-xl">
                        <Image
                            src="/assets/images/logosaas.png"
                            width={60}
                            height={60}
                            alt="logo"
                            className=" "
                        />
                        <h1 className="text-xl font-bold uppercase text-n-1 transition-colors hover:text-color-1 cursor-pointer ">
                            Rahul Portfolio
                        </h1>
                    </div>
                </a>
            </div>
            <nav
                className={`${
                    openNavigation ? "flex" : "hidden"
                } fixed top-[5rem]  left-0 right-0 items-center bottom-0  lg:static lg:flex lg:ml-auto lg:mr-5 lg:flex-row `}
            >
                <div
                    className={` ${
                        openNavigation && "gap-15  max-lg:mt-10 "
                    } relative z-2 flex flex-col items-center justify-center m-auto lg:gap-3 lg:flex-row`}
                >
                    {navLinks.map((link) => (
                        <a
                            onClick={hanndleonClick}
                            href={link.route}
                            className={`block relative text-2xl font-code md:text-lg uppercase text-n-1 transition-colors hover:text-color-1  px-6  lg:font-semibold `}
                            key={link.label}
                        >
                            {" "}
                            {link.label}
                        </a>
                    ))}
                </div>
                <HamburgerMenu />
            </nav>
            <div onClick={toggleNavigation} className=" absolute top-3 right-5 cursor-pointer  ">
                {openNavigation ? (
                    <Plus className=" rotate-45 h-7 w-7 lg:hidden " />
                ) : (
                    <Menu className=" h-7 w-7 lg:hidden" />
                )}
            </div>
        </div>
    );
};

export default Header;
