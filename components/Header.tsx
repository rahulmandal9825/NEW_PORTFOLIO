"use client";

import {navLinks} from "@/constants";
import Image from "next/image";
import {Cross, Menu, Plus} from "lucide-react";
import React, {useState} from "react";
import {HamburgerMenu} from "./design/Headermovnav";
import {disablePageScroll, enablePageScroll} from "scroll-lock";
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy} from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
    const [openNavigation, setopenNavigation] = useState(false);

    const navVariants = {
        initial: {
            y: +50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

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
            className={`flex py-2  absolute top-0 z-50 w-full bg-n-8/20  lg:bg-n-8/90  ${
                openNavigation ? "bg-n-8" : " bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 ">
                <a className="flex items-center relative">
                    {/* <div className=" hidden md:block absolute w-full top-1 bottom-0 bg-[linear-gradient(to_right,#f87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div> */}
                    <div className="  relative flex items-center pr-3 rounded-xl">
                        <Image src="/assets/images/logosaas.png" width={60} height={60} alt="logo" className=" " />
                        <h1 className="text-xl font-bold uppercase text-n-1 transition-colors hover:text-color-1 cursor-pointer ">
                            Rahul Portfolio
                        </h1>
                    </div>
                </a>
            </div>
            <motion.nav 
                className={`${
                    openNavigation ? "flex backdrop-blur-lg z-10 transition-all " : "hidden"
                } fixed top-[5rem]  left-0 right-0 items-center bottom-0  lg:static lg:flex lg:ml-auto lg:mr-5 lg:flex-row `}
            >
                <motion.div variants={navVariants} initial="initial" whileInView="animate"
                    className={` ${
                        openNavigation && "gap-15  max-lg:mt-10  "
                    } relative z-2 flex   flex-col items-center justify-center m-auto lg:gap-3 lg:flex-row`}
                >
                    {navLinks.map((link) => (
                        <Link
                            to={link.route}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={200}
                            onClick={hanndleonClick}
                            className={`block cursor-pointer relative text-2xl font-code md:text-lg uppercase text-n-1 transition-colors hover:text-color-1  px-6  lg:font-semibold `}
                            key={link.label}
                        >
                            {" "}
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
                <HamburgerMenu />
            </motion.nav>
            <div onClick={toggleNavigation} className=" absolute top-5 right-5 cursor-pointer  ">
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
