
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";


const Contacts = () => {

   
// Add this inside the component
useEffect(() => {
  emailjs.init("7t1X7GfVM3Mcu722W"); // Initialize with your Public Key
}, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            await emailjs.send(
                "service_vtcruxn", // Replace with your EmailJS Service ID
                "template_s3urubd", // Replace with your EmailJS Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "7t1X7GfVM3Mcu722W" // Replace with your EmailJS Public Key
            );
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message. Try again.");
            console.error("EmailJS error:", error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="relative py-20 overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 bg-neutral-950" />

            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative max-w-lg mx-auto px-6"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                >
                    Get In Touch
                </motion.h1>

                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
                >
                    <div className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full p-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full p-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows="4"
                                className="w-full p-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all"
                        >
                            Send Message
                        </motion.button>
                    </div>

                    {status && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-center mt-4 ${status.includes("success") ? "text-cyan-400" : "text-red-400"
                                }`}
                        >
                            {status}
                        </motion.p>
                    )}
                </motion.form>
            </motion.section>
        </div>
    );
};

export default Contacts;