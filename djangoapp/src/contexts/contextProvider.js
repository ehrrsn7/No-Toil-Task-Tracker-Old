import React from "react"

const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ sortedBy,       setSortedBy,      ] = React.useState("")
   const [ activeSidebar,  setActiveSidebar, ] = React.useState(false)
   const [ addMoreIsOpen,  setAddMoreIsOpen, ] = React.useState(false)
   const [ darkMode,       setDarkMode,      ] = React.useState(false)
   const [ isPrinting,     setIsPrinting,    ] = React.useState(false)
   const [ wsConnected,    setWsConnected,   ] = React.useState(false)
   const [ todoModel,      setTodoModel,     ] = React.useState([])
   const [ addedTasks,     setAddedTasks,    ] = React.useState([])
   const [ screenSize,     setScreenSize,    ] = React.useState(undefined)
   const [ websocket,      setWebsocket,     ] = React.useState(undefined)
 
   return (
      <Context.Provider value={{ 
         sortedBy,         setSortedBy,
         activeSidebar,    setActiveSidebar,           
         addMoreIsOpen,    setAddMoreIsOpen,
         darkMode,         setDarkMode,            
         isPrinting,       setIsPrinting,
         wsConnected,      setWsConnected,
         screenSize,       setScreenSize,          
         todoModel,        setTodoModel,
         websocket,        setWebsocket,
         addedTasks,       setAddedTasks,
      }}>{children}</Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)