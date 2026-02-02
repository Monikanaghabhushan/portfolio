import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <ThreeBackground />

            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glass-card p-8 rounded-2xl max-w-lg border-l-4 border-cyan-500">
                        <div className="mb-4">
                            <span className="text-cyan-400 font-mono text-sm tracking-wider">HELLO, I'M</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                            Monika C N
                        </h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-light">
                            <span className="text-cyan-400">Electronics</span> & <span className="text-purple-400">Telecommunication</span> Engineer
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Specializing in IoT, Machine Learning, and Embedded Systems.
                            Building intelligent, sensor-driven solutions for the future.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow">
                                Contact Me
                            </a>
                            <a href="/Monika C N_M.S.Ramaiah Institute of Technology (6) (1).pdf" download="Monika_CN_Resume.pdf" className="px-8 py-3 glass rounded-full font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                                <Download size={18} /> Resume
                            </a>
                        </div>

                        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
                            <a href="https://github.com/Monikanaghabhushan/portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/monika-c-n-548132279" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:monikacn15@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right side - 3D element will go here */}
                <div className="hidden md:block h-full"></div>
            </div>
        </section>
    );
};

export default Hero;
