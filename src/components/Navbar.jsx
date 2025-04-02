import logo from "../assets/loggo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // React Router for navigation

// Icon animation variants
const iconVariants = {
    hover: {
        scale: 1.2,
        rotate: 10,
        color: "#00FFFF", // Cyan on hover
        transition: { duration: 0.3 },
    },
};

const Navbar = () => {
    return (
        <nav className="mb-20 py-6 px-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
                {/* Logo (Left-aligned) */}
                <NavLink to="/" className="flex items-center flex-shrink-0">
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-13 h-12" // Fixed incorrect Tailwind size
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </NavLink>

                {/* Navigation Links and Icons (Right-aligned) */}
                <div className="flex items-center gap-8">
                    {/* Projects Button */}
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `relative px-6 py-2 text-lg font-bold uppercase tracking-wider text-white 
                             bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg 
                             shadow-lg shadow-cyan-400/50 transition-all duration-300 
                             hover:shadow-cyan-300/80 hover:bg-gradient-to-r 
                             hover:from-cyan-400 hover:to-blue-500 
                             ${isActive ? "bg-cyan-500" : ""}`
                        }
                    >
                        Projects
                    </NavLink>


                    {/* Social Icons */}
                    <div className="flex items-center gap-6 text-2xl">
                        <motion.a
                            href="https://www.linkedin.com/in/anandu-ajesh-90381a254/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={iconVariants}
                            whileHover="hover"
                            className="text-gray-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://github.com/anandu-ajesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={iconVariants}
                            whileHover="hover"
                            className="text-gray-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/_ananduajesh_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={iconVariants}
                            whileHover="hover"
                            className="text-gray-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </motion.a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
