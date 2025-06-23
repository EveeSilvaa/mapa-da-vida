import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'


import { useEffect, useState } from 'react'

export const PersonalInfo = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled (using Tailwind's dark class on html or body)
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <AnimatedText 
          text="Maria Evellyn - Mapa da Minha Vida" 
          className={`text-4xl font-bold  mb-4" ${
          isDark ? 'text-purple-400' : 'text-pink-500'} `}
        />
        <AnimatedText
          text="Do Pará para o mundo: uma jornada de resiliência e sonhos"
          className={`text-xl font-bold" ${
          isDark ? 'text-pink-500' : 'text-purple-700'} `}
          delay={0.3}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className=" p-8 mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-3 ">Minha História</h3>
        <p className="text-white-700 mb-4 d">
          Natural do Pará, comecei a trabalhar aos 17 anos como menor aprendiz em uma indústria têxtil, 
          na área de RH. Mesmo com todas as dificuldades de morar sozinha aos 18 anos, nunca desisti dos 
          meus sonhos.
        </p>
        <p className="text-white-700 mb-4">
          Estudava à noite, trabalhava de manhã e ainda vendia bolos que eu mesma fazia para complementar 
          a renda. Com muita determinação, fui efetivada na área de mecânica após o programa de aprendizagem.
        </p>
        <p className="text-white-700">
          Em 2022 descobri minha paixão pela tecnologia como forma de ajudar pessoas e realizar meu sonho 
          de criança de "mudar o mundo". Em 2023 comecei minha faculdade e me mudei para Goiânia, onde 
          trabalhei nas Lojas Renner e conheci pessoas incríveis com sonhos similares aos meus.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-3">Sonho Profissional</h3>
        <p className="text-white-700">
          Quero usar a tecnologia para criar soluções que impactem positivamente a vida das pessoas, 
          especialmente aquelas que, como eu, precisam de oportunidades para transformar suas realidades. 
          Acredito que na Globo posso contribuir para conectar milhões de brasileiros através da inovação 
          tecnológica, representando a diversidade e a força do nosso povo.
        </p>
      </motion.div>
    </div>
  )
}