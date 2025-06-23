import { PersonalInfo } from '../components/PersonalInfo'
import { Timeline } from '../components/TimeLine'
import { GloboValues } from '../components/GloboValues'
import { Projects } from '../components/Projects'
import { RoleInCompany } from '../components/RoleInCompany'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

interface HomeProps {
  darkMode: boolean
  setDarkMode: (mode: boolean) => void
}

export const Home = ({ darkMode, setDarkMode }: HomeProps) => {
  return (
    <div className="pb-20">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-600 to-purple-500 py-16 text-center relative"
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Oficina de Ideias</h1>
        <p className="text-xl text-white opacity-90">"Você no Futuro da Globo"</p>
      </motion.header>

      <PersonalInfo />
      <Timeline />
      <Projects />
      <RoleInCompany />
      <GloboValues />
    </div>
  )
}