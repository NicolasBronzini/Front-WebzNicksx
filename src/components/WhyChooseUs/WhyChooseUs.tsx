import { motion } from 'framer-motion';
import { FaRocket, FaHeadset, FaDollarSign, FaShieldAlt, FaCode, FaClock } from 'react-icons/fa';
import { useI18n } from '../../i18n';

const WhyChooseUs = () => {
    const { t } = useI18n();

    const reasons = [
        { icon: <FaRocket />, key: 'modernTech' },
        { icon: <FaClock />, key: 'fastResponse' },
        { icon: <FaDollarSign />, key: 'transparentPricing' },
        { icon: <FaHeadset />, key: 'support' },
        { icon: <FaCode />, key: 'quality' },
        { icon: <FaShieldAlt />, key: 'guarantee' }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t.whyChooseUs.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.whyChooseUs.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const reasonData = t.whyChooseUs.reasons[reason.key as keyof typeof t.whyChooseUs.reasons];
                        return (
                            <motion.div
                                key={reason.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {reasonData.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {reasonData.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
