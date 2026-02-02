import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Users } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: 'Programming & Software',
            icon: <Code size={30} className="text-cyan-400" />,
            items: ['C / C++', 'C#', 'Python', 'Java', 'MATLAB', 'Full-Stack Development']
        },
        {
            category: 'Hardware & IoT',
            icon: <Cpu size={30} className="text-purple-400" />,
            items: ['IoT & Embedded Systems', 'Microcontrollers', 'VLSI', 'RTOS', 'Digital Signal Processing']
        },
        {
            category: 'AI & Data Science',
            icon: <Brain size={30} className="text-pink-400" />,
            items: ['Machine Learning', 'Computer Vision (OpenCV)', 'Generative AI', 'Data Structures & Algorithms']
        },
        {
            category: 'Soft Skills',
            icon: <Users size={30} className="text-teal-400" />,
            items: ['Leadership', 'Design Thinking', 'Problem Solving', 'Communication', 'Time Management']
        }
    ];

    return (
        <section id="skills" className="py-12 md:py-20 relative bg-[#050505] overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Technical Arsenal
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A diverse set of tools and technologies I use to turn ideas into reality.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-6 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-all"
                        >
                            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-100 mb-6">{skill.category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
