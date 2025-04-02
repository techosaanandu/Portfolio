
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// New card animation variants with slide-in, fade, and twist effect
const cardVariants = {
    hidden: ({ index }) => ({
        opacity: 0,
        x: index % 2 === 0 ? -150 : 150, // Even-indexed cards slide from left, odd from right
        rotate: index % 2 === 0 ? -15 : 15, // Slight twist in opposite directions
    }),
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            duration: 0.9,
            ease: "easeInOut",
            type: "tween",
        },
    },
    hover: {
        scale: 1.05,
        boxShadow: "0px 15px 40px rgba(255, 105, 180, 0.3)",
        transition: { duration: 0.4 },
    },
};

// Button animation variants
const buttonVariants = {
    hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
};

const Projects = () => {
    // Unique gradient colors for each card
    const cardGradients = [
        "from-purple-600 to-indigo-500",
        "from-teal-500 to-cyan-600",
        "from-pink-500 to-rose-600",
        "from-orange-500 to-yellow-600",
        "from-green-500 to-emerald-600",
        "from-blue-500 to-sky-600",
    ];

    return (
        <div className="bg-neutral-950 py-24">
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-center text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-fuchsia-500"
            >
                Projects
            </motion.h1>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={{ index }} // Pass index to variants
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }} // Animation plays once when in view
                            className={`bg-gradient-to-b ${cardGradients[index % cardGradients.length]} rounded-xl overflow-hidden shadow-lg flex flex-col w-full h-[450px]`}
                        >
                            {/* Project Image */}
                            <div className="relative h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="bg-gradient-to-r from-lime-400 to-teal-500 text-white font-bold py-2 px-6 rounded-full no-underline shadow-md"
                                    >
                                        Live Demo
                                    </motion.a>
                                </motion.div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6 flex flex-col h-[calc(100%-12rem)] bg-opacity-80 bg-black">
                                <h4 className="text-xl font-semibold text-white mb-2 truncate">{project.title}</h4>
                                <p className="text-gray-200 mb-4 text-ellipsis overflow-hidden line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="rounded bg-gradient-to-r from-fuchsia-500 to-purple-600 px-2 py-1 text-sm font-medium text-white whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;