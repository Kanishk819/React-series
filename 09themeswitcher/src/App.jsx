
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/themes'
import ThemeBtn from './components/themeBtn';
import Card from './components/Card';


function App() {

  const [themeMode,setThemeMode] = useState("light");

  const lighttheme = () =>{
    setThemeMode("light")
 }
  const darktheme = () =>{
    setThemeMode("dark")
 }


 //actual change in theme

 useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])

  return (
    <ThemeProvider  value={{themeMode,darktheme,lighttheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*themeBtn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*Card */}
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
