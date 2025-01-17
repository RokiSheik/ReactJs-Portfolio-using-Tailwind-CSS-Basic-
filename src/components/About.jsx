import aboutImg from "../assets/images/about.png";
import {ABOUT_TEXT} from "./../assets/constants"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-lg h-[50%]" src={aboutImg} alt="" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start px-10">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;