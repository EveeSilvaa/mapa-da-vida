import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'

const values = [
  {
    title: 'Inovação',
    description: 'A Globo sempre esteve na vanguarda da tecnologia, desde o rádio até a TV digital e streaming.'
  },
  {
    title: 'Pluralidade',
    description: 'Representatividade e diversidade são pilares fundamentais para conectar com todos os brasileiros.'
  },
  {
    title: 'Impacto Coletivo',
    description: 'A Globo tem o poder de unir o país através do entretenimento, informação e cultura.'
  },
  {
    title: 'Brasilidade',
    description: 'Contar histórias que refletem a identidade e os valores do povo brasileiro.'
  }
]

export const GloboValues = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <AnimatedText 
        text="Valores da Globo que se conectam com minha trajetória" 
        className="text-3xl font-bold text-purple-400 mb-8 text-center"
        delay={0.2}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white p-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-pink-400 mb-3">{value.title}</h3>
            <p className="text-white-700">{value.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-3">Diversidade e Tecnologia na Globo</h3>
        <p className="text-white-700 mb-4">
          A Globo tem sido pioneira em promover a diversidade cultural brasileira através de suas produções, 
          enquanto abraça a tecnologia para inovar na forma de contar histórias e conectar pessoas.
        </p>
        <p className="text-white-700">
          Como alguém que veio do Pará para o Rio em busca de oportunidades, me identifico com a missão da Globo 
          de representar todo o Brasil e usar a tecnologia para criar impacto positivo.
        </p>
      </motion.div>
    </div>
  )
}