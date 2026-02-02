import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Hydroponics System',
            desc: 'IoT-based automated monitoring for pH, nutrients, and temp with real-time visualization.',
            tags: ['IoT', 'Sensors', 'Automation'],
            color: 'from-green-400 to-emerald-600'
        },
        {
            title: 'Smart Key Chain',
            desc: 'Bluetooth-enabled keychain with mobile app integration for real-time tracking.',
            tags: ['BLE', 'Mobile App', 'Embedded'],
            color: 'from-blue-400 to-indigo-600'
        },
        {
            title: 'Smart Door Lock',
            desc: 'RFID and password-based authentication with remote smartphone access.',
            tags: ['IoT', 'Security', 'RFID'],
            color: 'from-red-400 to-pink-600'
        },
        {
            title: 'Safety Monitoring',
            desc: 'Wearable sensor system for activity recognition and anomaly detection with alerts.',
            tags: ['Wearable', 'Safety', 'Sensors'],
            color: 'from-orange-400 to-amber-600'
        },
        {
            title: 'Human Detection',
            desc: 'Real-time human detection and counting using Python, OpenCV, and Machine Learning.',
            tags: ['Computer Vision', 'Python', 'ML'],
            color: 'from-cyan-400 to-blue-500'
        },
        {
            title: 'Emission Indicators',
            desc: 'Research on electro-photonic emission indicators for psycho-emotional state analysis.',
            tags: ['Research', 'ML', 'Healthcare'],
            color: 'from-purple-400 to-violet-600'
        }
    ];

    return (
        <section id="projects" className="py-12 md:py-20 relative bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing innovation in Embedded Systems, IoT, and AI.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 relative"
                        >
                            {/* Decorative Gradient Line */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <Github size={18} /> Code
                                    </button>
                                    <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <ExternalLink size={18} /> Demo
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
