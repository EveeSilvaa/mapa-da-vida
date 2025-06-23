import { useEffect, useState } from "react"
import { Home } from "./pages/Home"


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
    (window.matchMedia('(prefers-color-schema: dark)').matches)
  })

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white dark:bg-black text-gray-900 dark:text-white'
    }`}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
