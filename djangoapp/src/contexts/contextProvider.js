import React from "react"

const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ activeSidebar,  setActiveSidebar, ] = React.useState(false)
   const [ addMoreIsOpen,  setAddMoreIsOpen, ] = React.useState(false)
   const [ darkMode,       setDarkMode,      ] = React.useState(false)
   const [ isPrinting,     setIsPrinting,    ] = React.useState(false)
   const [ screenSize,     setScreenSize,    ] = React.useState(undefined)
   const [ todoModel,      setTodoModel,     ] = React.useState(undefined)
   const [ websocket,      setWebsocket,     ] = React.useState(undefined)
   const [ sortedBy,       setSortedBy,      ] = React.useState("")
 
   return (
      <Context.Provider value={{ 
         activeSidebar,    setActiveSidebar,           
         addMoreIsOpen,    setAddMoreIsOpen,
         darkMode,         setDarkMode,            
         isPrinting,       setIsPrinting,
         screenSize,       setScreenSize,          
         todoModel,        setTodoModel,
         websocket,        setWebsocket,
         sortedBy,         setSortedBy,
      }}>{children}</Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)