import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'

export const RoleInCompany = () => {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <AnimatedText 
        text="Meu Papel em uma Empresa Conectiva" 
        className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-8 text-center"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Em uma empresa que conecta milhões de brasileiros, vejo meu papel como:
        </p>
        
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-semibold">Facilitadora de conexões:</span> Criando soluções tecnológicas que aproximam pessoas
          </li>
          <li>
            <span className="font-semibold">Promotora de diversidade:</span> Garantindo que nossas soluções atendam a todos os públicos
          </li>
          <li>
            <span className="font-semibold">Agente de inovação:</span> Implementando novas tecnologias para melhorar a experiência do usuário
          </li>
          <li>
            <span className="font-semibold">Ponte entre tecnologia e pessoas:</span> Traduzindo necessidades humanas em soluções digitais
          </li>
        </ul>
        
        <p className="text-gray-700 dark:text-gray-300 mt-6">
          Minha experiência em diferentes áreas e minha capacidade de adaptação me permitem entender diversas realidades e criar soluções inclusivas que realmente conectam pessoas.
        </p>
      </motion.div>
    </div>
  )
}