import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { FaHome, FaRocket } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';

const NotFound = () => {
    const { t } = useI18n();
    
    return (
        <div className="min-h-screen bg-dark relative overflow-hidden flex items-center justify-center p-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ 
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        y: [0, -30, 0],
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"
                />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center">
                    {/* 404 Number with Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <motion.h1 
                                className="text-[180px] md:text-[280px] font-black leading-none bg-gradient-to-br from-primary via-blue-400 to-secondary bg-clip-text text-transparent"
                                animate={{ 
                                    textShadow: [
                                        "0 0 20px rgba(59, 130, 246, 0.5)",
                                        "0 0 40px rgba(59, 130, 246, 0.8)",
                                        "0 0 20px rgba(59, 130, 246, 0.5)",
                                    ]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                404
                            </motion.h1>
                            
                            {/* Floating Rocket Icon */}
                            <motion.div
                                animate={{ 
                                    y: [-10, 10, -10],
                                    rotate: [-5, 5, -5]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-8 -right-8 md:-right-16"
                            >
                                <FaRocket className="text-5xl md:text-7xl text-primary opacity-80" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Message Card with Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 max-w-3xl mx-auto"
                    >
                        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                            >
                                {t.notFound.title}
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
                            >
                                {t.notFound.message}
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link 
                                    to="/" 
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    <HiArrowLeft className="text-xl relative z-10" />
                                    <span className="relative z-10">{t.notFound.button}</span>
                                </Link>

                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700/50 backdrop-blur-sm text-white font-medium rounded-full border border-slate-600 hover:border-primary hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <FaHome className="text-lg" />
                                    <span>{t.notFound.contactSupport}</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Helpful Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-6 text-gray-400"
                    >
                        <Link to="/" className="hover:text-primary transition-colors">
                            {t.nav.home}
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link to="/presenta-tu-proyecto" className="hover:text-primary transition-colors">
                            {t.nav.presentProject}
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link to="/trabaja-con-nosotros" className="hover:text-primary transition-colors">
                            {t.nav.workWithUs}
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link to="/contact" className="hover:text-primary transition-colors">
                            {t.nav.contact}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default NotFound