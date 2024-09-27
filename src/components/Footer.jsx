import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import FooterBottom from "./FooterBottom";




const Footer = () => {
    return (
        <div className="bg-stone-800 text-gray-100 px-8 mx-auto ">
            <div className="flex justify-between p-8">
                <div className="w-4/12 flex flex-col space-y-4">
                    <div><h3 className="text-xl font-bold">Design Hub</h3></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, distinctio. Omnis saepe doloribus impedit aliquid.</p>
                    <div className="flex gap-4">
                        <NavLink><FaFacebook className="text-2xl text-red-500 "></FaFacebook></NavLink>
                        <NavLink><AiFillTwitterCircle className="text-2xl text-red-500"></AiFillTwitterCircle></NavLink>
                        <NavLink><IoLogoYoutube className="text-2xl text-red-500"></IoLogoYoutube></NavLink>
                    </div>
                </div>
                <div className="w-2/12 flex flex-col space-y-4">
                    <div><h3 className="text-xl font-thin">Services</h3></div>
                    <div className="flex flex-col gap-2">
                        <p>UI/UX</p>
                        <p>Website Dev</p>
                        <p>Mobile Dev</p>
                        <p>SEO</p>
                    </div>
                </div>
                <div className="w-2/12 flex flex-col space-y-4">
                    <div><h3 className="text-xl font-thin">Reserces</h3></div>
                    <div className="flex flex-col gap-2">
                        <p>Compliance</p>
                        <p>Case Studies</p>
                        <p>Webinars</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div className="w-3/12 flex flex-col space-y-4 px-6 ">
                    <div><h3 className="text-xl font-thin">Contact Information</h3></div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center"><FaEnvelope/><p>designhub@gmail.com</p></div>
                        <div className="flex gap-2 items-center"><FaPhoneAlt/><p>+234 706 448 0655</p></div>
                        <div className="flex gap-2 items-center"><CiLocationOn /><p>Kuwait City</p></div>
                    </div>
                </div>

            </div>
            {/* footer bottom */}
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Footer;