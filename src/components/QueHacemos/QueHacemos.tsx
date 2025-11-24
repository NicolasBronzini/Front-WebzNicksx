import { ImStatsDots } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineEmojiObjects, MdOutlineError } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill, BsCodeSlash } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaSitemap, FaNetworkWired } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { TbLamp2 } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';

const QueHacemos = () => {
    const { t } = useI18n();
    
    const processes = [
        {
            title: t.queHacemos.processes.idea.title,
            description: t.queHacemos.processes.idea.description,
            items: [
                { icon: <ImStatsDots />, text: t.queHacemos.processes.idea.items[0] },
                { icon: <HiUserGroup />, text: t.queHacemos.processes.idea.items[1] },
                { icon: <MdOutlineEmojiObjects />, text: t.queHacemos.processes.idea.items[2] },
                { icon: <BiTask />, text: t.queHacemos.processes.idea.items[3] },
            ]
        },
        {
            title: t.queHacemos.processes.design.title,
            description: t.queHacemos.processes.design.description,
            items: [
                { icon: <BsPencilFill />, text: t.queHacemos.processes.design.items[0] },
                { icon: <CgWebsite />, text: t.queHacemos.processes.design.items[1] },
                { icon: <FaSitemap />, text: t.queHacemos.processes.design.items[2] },
                { icon: <BsMenuButtonWideFill />, text: t.queHacemos.processes.design.items[3] },
            ]
        },
        {
            title: t.queHacemos.processes.development.title,
            description: t.queHacemos.processes.development.description,
            items: [
                { icon: <BsCodeSlash />, text: t.queHacemos.processes.development.items[0] },
                { icon: <AiOutlineCloudServer />, text: t.queHacemos.processes.development.items[1] },
                { icon: <FaNetworkWired />, text: t.queHacemos.processes.development.items[2] },
                { icon: <MdOutlineError />, text: t.queHacemos.processes.development.items[3] },
            ]
        }
    ];

    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
                        <TbLamp2 className="text-3xl text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.queHacemos.title}</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-white transition-colors">{process.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{process.description}</p>
                            <ul className="space-y-3">
                                {process.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                                        <span className="text-secondary mr-3 text-lg">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QueHacemos