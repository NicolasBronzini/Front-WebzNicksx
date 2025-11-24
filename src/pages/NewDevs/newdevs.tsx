import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/base/footer/Footer';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserAstronaut, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useI18n } from '../../i18n';

const Newdevs = () => {
    const { t } = useI18n();
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedin: "",
        portfolio: "",
        message: ""
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            linkedin: formData.linkedin,
            portfolio: formData.portfolio,
            message: `
                Nombre: ${formData.name}
                Correo: ${formData.email}
                LinkedIn: ${formData.linkedin}
                Portafolio: ${formData.portfolio}
                Mensaje: ${formData.message}
            `,
            to_email: 'nicolasbronzini7@gmail.com'
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert(t.newDevs.alerts.success);
                setFormData({ name: "", email: "", linkedin: "", portfolio: "", message: "" });
                setIsSending(false);
            }, (error) => {
                console.log(error.text);
                alert(t.newDevs.alerts.error);
                setIsSending(false);
            });
    };

    const benefits = [
        {
            icon: <FaCode />,
            title: t.newDevs.benefits.technology.title,
            description: t.newDevs.benefits.technology.description
        },
        {
            icon: <FaLaptopCode />,
            title: t.newDevs.benefits.projects.title,
            description: t.newDevs.benefits.projects.description
        },
        {
            icon: <FaUserAstronaut />,
            title: t.newDevs.benefits.growth.title,
            description: t.newDevs.benefits.growth.description
        }
    ];

    return (
        <div className="bg-dark min-h-screen flex flex-col">
            <NavBar />
            
            <main className="flex-grow pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.newDevs.title} <span className="text-primary">{t.newDevs.titleHighlight}</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {t.newDevs.description}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center"
                            >
                                <div className="text-4xl text-primary mb-6 flex justify-center">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">{t.newDevs.formTitle}</h2>
                        <p className="text-gray-300 mb-8 text-center">
                            {t.newDevs.formDescription} <br/>
                            <span className="text-primary font-bold">{t.newDevs.formDescriptionHighlight}</span>
                        </p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">{t.newDevs.labels.name}</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500" placeholder={t.newDevs.placeholders.name} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">{t.newDevs.labels.email}</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500" placeholder={t.newDevs.placeholders.email} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-300 ml-1">{t.newDevs.labels.linkedin}</label>
                                    <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500" placeholder={t.newDevs.placeholders.linkedin} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="portfolio" className="text-sm font-medium text-gray-300 ml-1">{t.newDevs.labels.portfolio}</label>
                                    <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500" placeholder={t.newDevs.placeholders.portfolio} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">{t.newDevs.labels.message}</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 resize-none" placeholder={t.newDevs.placeholders.message}></textarea>
                            </div>
                            
                            <button type="submit" disabled={isSending} className="w-full py-4 bg-white text-dark font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSending ? t.newDevs.buttonSending : t.newDevs.button} <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Newdevs