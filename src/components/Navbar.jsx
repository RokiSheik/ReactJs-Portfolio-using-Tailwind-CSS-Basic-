
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
    return (
        <nav className=" p-3 mb-10 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-[200px] mx-2" src={logo} alt="Rokisheik" />
            </div>
            <div className=" m-8 flex item-center justify-center text-2xl gap-4">
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
                <FaSquareXTwitter/>
            </div>
        </nav>
    );
};
export default Navbar;