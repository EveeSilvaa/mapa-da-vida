import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'

const projects = [
  {
    title: "TaskMaster",
    description: "Gerenciador de tarefas com autenticação e drag-and-drop",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vercel"],
    repoUrl: "https://github.com/EveeSilvaa/todo-list",
    deployUrl: "https://todo-list-r7xi-eveesilvaas-projects.vercel.app/",
  },
  {
    title: "Memory Game",
    description: "Jogo da memória avançado com animações e efeitos sonoros, com tema de Hora de Aventura",
    technologies: ["JavaScript", "HTML5", "CSS3", "Python"],
    repoUrl: "https://github.com/EveeSilvaa/memorygame-adv", 
    deployUrl: "https://memorygame-adv-gvx8.vercel.app/",
  },
  {
    title: "Portfólio Pessoal",
    description: "Site para mostrar meus projetos",
    technologies: ["React", "Framer Motion", "TailwindCSS", "Vercel", "TypeScript"],
    repoUrl: "https://github.com/EveeSilvaa/meu-portifolio",
    deployUrl: "https://meu-portifolio-eveesilvaa-zeta.vercel.app/"
  },
  {
    title: "ZveHamburguer",
    description: "Aplicativo de pedidos de hambúrgueres",
    technologies: ["Java", "Android Studio", "Kotlin"],
    repoUrl: "https://github.com/EveeSilvaa/ZveHamburguer"
  },
]

export const Projects = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <AnimatedText 
        text="Meus Projetos" 
        className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.deployUrl || project.repoUrl} 
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              Ver projeto →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}