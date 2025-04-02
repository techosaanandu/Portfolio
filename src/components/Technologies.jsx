
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiRedux, SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiFlutter, SiClerk, SiFirebase, SiArduino, SiRaspberrypi, SiOpencv , SiSupabase  } from "react-icons/si";
import { BiLogoBootstrap } from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { motion } from "framer-motion";

// Animation variants for icons
const iconVariants = (duration) => ({
    initial: { y: 0, scale: 1 },
    hover: {
        y: -10,
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    animate: {
        y: [0, -10, 0],
        transition: { duration: duration, ease: "easeInOut", repeat: Infinity },
    },
});

// Category animation
const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Technologies = () => {
    return (
        <div className="bg-neutral-950 text-white py-24">
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-center text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            >
                Technologies
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4">
                {/* Frontend */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Frontend</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: ImHtmlFive, color: "text-orange-500", duration: 2.5, tag: "HTML5" },
                            { Icon: SiCss3, color: "text-blue-600", duration: 4, tag: "CSS3" },
                            { Icon: SiJavascript, color: "text-yellow-400", duration: 2, tag: "JavaScript" },
                            { Icon: FaReact, color: "text-cyan-400", duration: 3, tag: "React" },
                            { Icon: SiNextdotjs, color: "text-white", duration: 2.8, tag: "Next.js" },
                            { Icon: SiTailwindcss, color: "text-cyan-400", duration: 3.5, tag: "Tailwind CSS" },
                            { Icon: BiLogoBootstrap, color: "text-violet-700", duration: 2.5, tag: "Bootstrap" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Backend</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: FaNodeJs, color: "text-green-500", duration: 2.5, tag: "Node.js" },
                            { Icon: SiExpress, color: "text-gray-300", duration: 3, tag: "Express.js" },
                            { Icon: SiMongodb, color: "text-green-600", duration: 2.8, tag: "MongoDB" },
                            { Icon:  SiSupabase , color: "text-green-500", duration: 3.2, tag: "Supabase" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* State Management & Authentication */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">State Management & Authentication</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: SiRedux, color: "text-purple-600", duration: 2.5, tag: "Redux" },
                            { Icon: SiFirebase, color: "text-yellow-500", duration: 3, tag: "Firebase" },
                            { Icon: SiClerk, color: "text-violet-300", duration: 3, tag: "Clerk" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Machine Learning & AI */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Machine Learning & AI</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: FaPython, color: "text-blue-400", duration: 2.5, tag: "Python" },
                            { Icon: SiTensorflow, color: "text-orange-600", duration: 3, tag: "TensorFlow" },
                            { Icon: SiPytorch, color: "text-red-500", duration: 2.8, tag: "PyTorch" },
                            { Icon: SiPandas, color: "text-teal-600", duration: 3.2, tag: "Pandas" },
                            { Icon: SiNumpy, color: "text-blue-600", duration: 2.5, tag: "NumPy" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Robotics & IoT */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Robotics & IoT</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: SiArduino, color: "text-teal-500", duration: 2.5, tag: "Arduino" },
                            { Icon: SiRaspberrypi, color: "text-red-600", duration: 3, tag: "Raspberry Pi" },
                            { Icon: SiOpencv, color: "text-green-500", duration: 2.8, tag: "OpenCV" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Development */}
                <motion.div variants={categoryVariants} initial="hidden" whileInView="visible" className="mb-12">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Mobile Development</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { Icon: SiFlutter, color: "text-blue-500", duration: 2.5, tag: "Flutter" },
                            { Icon: DiDart, color: "text-cyan-600", duration: 3, tag: "Dart" },
                        ].map(({ Icon, color, duration, tag }, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(duration)}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                <Icon className={`text-5xl ${color}`} />
                                <span className="mt-2 text-sm text-neutral-400">{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;