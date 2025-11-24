import { motion } from 'framer-motion';
import { FaCheckCircle, FaRedo, FaLifeRing, FaCode, FaClock, FaDollarSign } from 'react-icons/fa';
import { useI18n } from '../../i18n';

const TrustBadges = () => {
    const { t } = useI18n();

    const badges = [
        { icon: <FaCheckCircle />, key: 'satisfaction' },
        { icon: <FaRedo />, key: 'revisions' },
        { icon: <FaLifeRing />, key: 'support' },
        { icon: <FaCode />, key: 'cleanCode' },
        { icon: <FaClock />, key: 'onTime' },
        { icon: <FaDollarSign />, key: 'fairPrices' }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {t.trustBadges.title}
                    </h2>
                    <p className="text-gray-400">
                        {t.trustBadges.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {badges.map((badge, index) => {
                        const badgeData = t.trustBadges.badges[badge.key as keyof typeof t.trustBadges.badges];
                        return (
                            <motion.div
                                key={badge.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="text-3xl text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                    {badge.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">
                                        {badgeData.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {badgeData.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
