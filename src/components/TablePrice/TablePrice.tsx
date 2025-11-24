import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useI18n } from '../../i18n';

interface TablePriceProps {
  onSelectProject?: (projectType: string) => void;
}

const TablePrice = ({ onSelectProject }: TablePriceProps) => {
  const { t } = useI18n();
  
  const projects = [
    {
      type: t.tablePrice.projects.landingPage.type,
      description: t.tablePrice.projects.landingPage.description,
      price: t.tablePrice.projects.landingPage.price,
      time: t.tablePrice.projects.landingPage.time,
      features: t.tablePrice.projects.landingPage.features
    },
    {
      type: t.tablePrice.projects.ecommerceBasic.type,
      description: t.tablePrice.projects.ecommerceBasic.description,
      price: t.tablePrice.projects.ecommerceBasic.price,
      time: t.tablePrice.projects.ecommerceBasic.time,
      features: t.tablePrice.projects.ecommerceBasic.features
    },
    {
      type: t.tablePrice.projects.ecommerceAdvanced.type,
      description: t.tablePrice.projects.ecommerceAdvanced.description,
      price: t.tablePrice.projects.ecommerceAdvanced.price,
      time: t.tablePrice.projects.ecommerceAdvanced.time,
      features: t.tablePrice.projects.ecommerceAdvanced.features
    },
    {
      type: t.tablePrice.projects.corporatePage.type,
      description: t.tablePrice.projects.corporatePage.description,
      price: t.tablePrice.projects.corporatePage.price,
      time: t.tablePrice.projects.corporatePage.time,
      features: t.tablePrice.projects.corporatePage.features
    },
    {
      type: t.tablePrice.projects.webApp.type,
      description: t.tablePrice.projects.webApp.description,
      price: t.tablePrice.projects.webApp.price,
      time: t.tablePrice.projects.webApp.time,
      features: t.tablePrice.projects.webApp.features
    },
    {
      type: t.tablePrice.projects.apiBasic.type,
      description: t.tablePrice.projects.apiBasic.description,
      price: t.tablePrice.projects.apiBasic.price,
      time: t.tablePrice.projects.apiBasic.time,
      features: t.tablePrice.projects.apiBasic.features
    },
    {
      type: t.tablePrice.projects.apiAdvanced.type,
      description: t.tablePrice.projects.apiAdvanced.description,
      price: t.tablePrice.projects.apiAdvanced.price,
      time: t.tablePrice.projects.apiAdvanced.time,
      features: t.tablePrice.projects.apiAdvanced.features
    },
    {
      type: t.tablePrice.projects.maintenance.type,
      description: t.tablePrice.projects.maintenance.description,
      price: t.tablePrice.projects.maintenance.price,
      time: t.tablePrice.projects.maintenance.time,
      features: t.tablePrice.projects.maintenance.features
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.tablePrice.title} <span className="text-primary">{t.tablePrice.titleHighlight}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.tablePrice.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.type}</h3>
                <p className="text-sm text-gray-400 h-20 overflow-hidden">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">{project.price}</span>
                <span className="text-xs text-gray-500 block mt-1">{t.tablePrice.estimatedTime} {project.time}</span>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.features && project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <FaCheckCircle className="text-secondary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectProject && onSelectProject(project.type)}
                className="w-full py-2 px-4 bg-slate-700 hover:bg-primary text-white rounded-lg transition-colors font-medium text-sm"
              >
                {t.tablePrice.requestQuote}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TablePrice;
