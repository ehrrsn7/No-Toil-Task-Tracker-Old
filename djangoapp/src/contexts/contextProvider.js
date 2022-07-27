import React from 'react'

const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ activeSidebar,  setActiveSidebar  ] = React.useState(false)
   const [ addMoreIsOpen,  setAddMoreIsOpen  ] = React.useState(false)
   const [ darkMode,       setDarkMode       ] = React.useState(false)
   const [ screenSize,     setScreenSize     ] = React.useState(undefined)
   const [ todoModel,      setTodoModel      ] = React.useState(undefined)
   const [ websocket,      setWebsocket      ] = React.useState(undefined)
 
   return (
      <Context.Provider value={{ 
         activeSidebar,    setActiveSidebar,           
         addMoreIsOpen,    setAddMoreIsOpen,
         darkMode,         setDarkMode,            
         screenSize,       setScreenSize,          
         todoModel,        setTodoModel,
         websocket,        setWebsocket,
      }}>{children}</Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)