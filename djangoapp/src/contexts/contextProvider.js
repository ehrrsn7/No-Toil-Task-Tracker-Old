import React from 'react'

const Context = React.createContext()

const actionIconStates = {
   chat: false,
   cart: false,
   userProfile: false,
   notification: false,
}

const cornerIconStates = {
   darkMode: false,
   settings: false,
}

export function ContextProvider({ children }) {
   const [ activeSidebar,    setActiveSidebar    ] = React.useState(true)
   const [ activeSettings,   setActiveSettings   ] = React.useState(false)
   const [ darkMode,         setDarkMode         ] = React.useState(false)
   const [ screenSize,       setScreenSize       ] = React.useState(undefined)
   const [ currentColor,     setCurrentColor     ] = React.useState('#03C9D7')
   const [ currentMode,      setCurrentMode      ] = React.useState('Light')
   const [ themeSettings,    setThemeSettings    ] = React.useState(false)
   const [ getActionIconStates, setActionIconStates ] = React.useState(actionIconStates)
   const [ getCornerIconStates, setCornerIconStates ] = React.useState(cornerIconStates)
 
   // const setMode = (e) => {
   //    setCurrentMode(e.target.value)
   //    localStorage.setItem('themeMode', e.target.value)
   // }
 
   // const setColor = (color) => {
   //    setCurrentColor(color)
   //    localStorage.setItem('colorMode', color)
   // }
 
   // const handleActionIconStates = (clicked) => setActionIconStates({ 
   //    ...actionIconStates,
   //    [clicked]: true 
   // })
 
 
   // const handleCornerIconStates = (clicked) => setCornerIconStates({ 
   //    ...cornerIconStates,
   //    [clicked]: true 
   // })
 
   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <Context.Provider value={{ 
         activeSidebar,    setActiveSidebar,       
         activeSettings,   setActiveSettings,      
         darkMode,         setDarkMode,            
         screenSize,       setScreenSize,          
         currentColor,     setCurrentColor,        
         currentMode,      setCurrentMode,         
         themeSettings,    setThemeSettings,       
         getActionIconStates, setActionIconStates, 
         getCornerIconStates, setCornerIconStates, 
      }}>
         {children}
      </Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)