import { motion } from 'framer-motion'


const timelineData = [
  {
    year: '2021',
    title: 'Primeiro emprego',
    description: 'Comecei como menor aprendiz na área de RH em uma indústria têxtil no Pará',
    icon: '💼'
  },
  {
    year: '2022',
    title: 'Efetivação',
    description: 'Contratada na área de mecânica após o programa de aprendizagem',
    icon: '🔧'
  },
  {
    year: '2022',
    title: 'Independência',
    description: 'Fui morar sozinha aos 18 anos, enfrentando desafios mas persistindo nos estudos',
    icon: '🏠'
  },
  {
    year: '2023',
    title: 'Descoberta da TI',
    description: 'Encontrei na tecnologia uma forma de realizar meu sonho de ajudar pessoas',
    icon: '💻'
  },
  {
    year: '2023',
    title: 'Grandes mudanças',
    description: 'Comecei a faculdade, me mudei para Goiânia e depois para o Rio de Janeiro',
    icon: '🚀'
  }
]

export const Timeline = () => {

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">Linha do Tempo</h2>
      
      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-purple-300 transform -translate-x-1/2"></div>
        
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            <div className="w-1/2 px-4">
              <div className={`p-6 rounded-lg shadow-md bg-white p-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'bg-pink-100' : 'bg-purple-100'}`}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-400">{item.title}</h3>
                <p className="text-white-600">{item.description}</p>
              </div>
            </div>
            <div className="w-1/2 px-4 text-center">
              <div className="inline-block bg-white p-2 rounded-full shadow-lg text-purple-800 dark:bg-gray-800 dark:text-purple-300">
                <span className="font-bold text-pink-400">{item.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}