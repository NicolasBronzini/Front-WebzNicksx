import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiVite, SiGit } from 'react-icons/si';
import { useI18n } from '../../i18n';

const TechStack = () => {
    const { t } = useI18n();

    const technologies = [
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
        { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
        { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
        { icon: <SiGit />, name: 'Git', color: '#F05032' }
    ];

    return (
        <section className="py-16 px-4 bg-dark">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {t.techStack.title}
                    </h2>
                    <p className="text-gray-400">
                        {t.techStack.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800/20 border border-white/5 hover:border-primary/30 transition-all group"
                        >
                            <div 
                                className="text-6xl transition-all duration-300 grayscale group-hover:grayscale-0"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </div>
                            <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
