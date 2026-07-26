import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiNextdotjs, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiVite, SiExpress, SiFigma,
  SiFirebase, SiDotnet,
} from 'react-icons/si';

const technologies = [
  { icon: <SiReact />,       name: 'React',       color: '#61DAFB' },
  { icon: <SiTypescript />,  name: 'TypeScript',  color: '#3178C6' },
  { icon: <SiNodedotjs />,   name: 'Node.js',     color: '#339933' },
  { icon: <SiNextdotjs />,   name: 'Next.js',     color: '#FFFFFF' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS',color: '#06B6D4' },
  { icon: <SiExpress />,     name: 'Express',     color: '#FFFFFF' },
  { icon: <SiMongodb />,     name: 'MongoDB',     color: '#47A248' },
  { icon: <SiPostgresql />,  name: 'PostgreSQL',  color: '#4169E1' },
  { icon: <SiFirebase />,    name: 'Firebase',    color: '#FFCA28' },
  { icon: <SiDotnet />,      name: '.NET',        color: '#512BD4' },
  { icon: <SiDocker />,      name: 'Docker',      color: '#2496ED' },
  { icon: <SiGit />,         name: 'Git',         color: '#F05032' },
  { icon: <SiVite />,        name: 'Vite',        color: '#646CFF' },
  { icon: <SiFigma />,       name: 'Figma',       color: '#F24E1E' },
];

const Tecnologias = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-slate-900 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tecnologías que <span className="text-primary">dominamos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Usamos las herramientas más modernas del mercado para construir productos rápidos, escalables y de calidad.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-3 bg-slate-800/50 border border-slate-700 hover:border-primary/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-default"
            >
              <span
                className="text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
