import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const certifications = [
        {
            title: 'Generative AI Mastermind',
            issuer: 'Outskill',
            desc: 'Completed an intensive certification program covering Generative AI concepts, prompt engineering, AI-powered workflows, and real-world applications of large language models in modern software and intelligent systems.',
            image: '/WhatsApp Image 2026-02-03 at 12.38.23 AM.jpeg', // Public folder path
            icon: <Award size={24} className="text-yellow-400" />
        }
    ];

    return (
        <section id="certifications" className="py-12 md:py-20 relative bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        Certifications
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Recognized credentials and professional achievements.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-all cursor-pointer group"
                            onClick={() => setSelectedImage(cert.image)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 group-hover:scale-110 transition-transform">{cert.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-100 group-hover:text-yellow-400 transition-colors">{cert.title}</h4>
                                    <p className="text-yellow-500 text-sm mb-1">{cert.issuer}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{cert.desc}</p>
                                    <p className="text-xs text-gray-500 mt-2 italic">Click to view certificate</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 md:-top-12 md:-right-12 z-10 text-white hover:text-red-400 transition-colors bg-black/50 md:bg-transparent rounded-full p-2 md:p-0"
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Certificate"
                                className="rounded-lg shadow-2xl border border-white/10 max-h-[85vh] w-auto object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
