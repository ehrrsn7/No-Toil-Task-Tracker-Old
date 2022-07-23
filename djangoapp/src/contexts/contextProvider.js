import React from 'react'

const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ activeSidebar,  setActiveSidebar  ] = React.useState(false)
   const [ activeSettings, setActiveSettings ] = React.useState(false)
   const [ darkMode,       setDarkMode       ] = React.useState(false)
   const [ screenSize,     setScreenSize     ] = React.useState(undefined)
   const [ todoModel,      setTodoModel      ] = React.useState({})
   const [ websocket,      setWebsocket      ] = React.useState({})
 
   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <Context.Provider value={{ 
         activeSidebar,    setActiveSidebar,       
         activeSettings,   setActiveSettings,      
         darkMode,         setDarkMode,            
         screenSize,       setScreenSize,          
         todoModel,        setTodoModel,
         websocket,        setWebsocket,
      }}>
         {children}
      </Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)