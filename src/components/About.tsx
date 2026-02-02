import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BrainCircuit } from 'lucide-react';

const About = () => {


    const education = [
        {
            role: 'Bachelor of Engineering (B.E.)',
            subtitle: 'Electronics and Telecommunication Engineering',
            org: 'M.S. Ramaiah Institute of Technology',
            period: 'Nov 2022 – May 2026',
            icon: <GraduationCap size={24} className="text-cyan-400" />
        }
    ];

    const experience = [
        {
            role: 'Intern – Design Thinking, AI & Low-Code/No-Code',
            subtitle: 'Hybrid Mode',
            org: 'Internage',
            period: 'Internship',
            details: 'Applied design thinking, AI tools, and low-code platforms for rapid prototyping and user-centric solutions.',
            icon: <Briefcase size={24} className="text-purple-400" />
        },
        {
            role: 'Research Project',
            subtitle: 'Electro-Photonic Emission Indicators Analysis',
            org: 'Ongoing Research',
            period: 'Jan 2026 – Present',
            details: 'Analyzing psycho-emotional states using ML and electro-photonic emission indicators for healthcare insights.',
            icon: <BrainCircuit size={24} className="text-pink-400" />
        }
    ];



    return (
        <section id="about" className="py-12 md:py-20 relative bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        About Me
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Electronics and Telecommunication Engineering student at M.S. Ramaiah Institute of Technology with strong hands-on experience in IoT, embedded systems, machine learning, computer vision, and generative AI. Proven ability to design intelligent, sensor-driven systems and conduct research-oriented analysis combining signal data, psycho-emotional indicators, and AI techniques. Experienced in applying design thinking principles, AI tools, and low-code/no-code platforms to build scalable, user-centric solutions. Actively seeking full-time opportunities in Embedded Systems, AI/ML, IoT, Research, or Intelligent Product Development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <span className="p-2 bg-gray-800 rounded-lg"><GraduationCap size={20} /></span> Education
                        </h3>
                        <div className="flex flex-col gap-6">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-100">{item.role}</h4>
                                            <p className="text-cyan-400 text-sm mb-1">{item.subtitle}</p>
                                            <p className="text-gray-400 text-sm mb-2">{item.org}</p>
                                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <span className="p-2 bg-gray-800 rounded-lg"><Briefcase size={20} /></span> Experience
                        </h3>
                        <div className="flex flex-col gap-6">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-100">{item.role}</h4>
                                            <p className="text-purple-400 text-sm mb-1">{item.subtitle}</p>
                                            <p className="text-gray-400 text-sm mb-2">{item.org}</p>
                                            <p className="text-gray-500 text-sm mb-3 leading-relaxed">{item.details}</p>
                                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>


        </section>
    );
};

export default About;
