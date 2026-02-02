
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {

    return (
        <section id="contact" className="py-12 md:py-20 relative bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto flex justify-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full glass-card p-10 rounded-2xl border border-white/5"
                    >
                        <h3 className="text-3xl font-bold text-white mb-10 text-center">Contact Information</h3>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center text-gray-300 text-center">
                                <div className="p-4 glass rounded-full text-cyan-400 mb-4 bg-cyan-500/10">
                                    <Mail size={32} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                    <a href="mailto:monikacn15@gmail.com" className="hover:text-cyan-400 transition-colors text-lg">monikacn15@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-gray-300 text-center">
                                <div className="p-4 glass rounded-full text-purple-400 mb-4 bg-purple-500/10">
                                    <Phone size={32} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                                    <a href="tel:+918618466016" className="hover:text-purple-400 transition-colors text-lg">+91 8618466016</a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-gray-300 text-center">
                                <div className="p-4 glass rounded-full text-pink-400 mb-4 bg-pink-500/10">
                                    <MapPin size={32} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                                    <p className="text-lg">Bengaluru, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-white font-bold mb-6 text-xl">Connect on Socials</h4>
                            <div className="flex gap-6">
                                <a href="https://www.linkedin.com/in/monika-c-n-548132279" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                                    <Linkedin size={28} />
                                </a>
                                <a href="https://github.com/Monikanaghabhushan/portfolio" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                                    <Github size={28} />
                                </a>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
