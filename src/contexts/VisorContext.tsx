import {createContext, useState, MouseEvent } from "react"

interface VisorProviderProps {
  children: JSX.Element
}

interface VisorContextData {
  visorValue: string
  handleClickNumber: (e: MouseEvent) => void
  handleClickC: (e: MouseEvent) => void
  handleClickEqual: () => void
  handleClickRemove: () => void
}

export const VisorContext = createContext({} as VisorContextData)

export function VisorProvider({children}: VisorProviderProps) {
  const [visorValue, setVisorValue] = useState('0')

  const handleClickC = () =>{
    setVisorValue('0')
  }

  const handleClickNumber = (event: MouseEvent) => {
    const value = (event.target as HTMLInputElement).value
    
    visorValue === '0' || visorValue === 'Operação inválida' ? setVisorValue(value) : setVisorValue(visorValue + value)
  }

  const handleClickEqual = () => {
    try {
      setVisorValue(eval(visorValue))
    } catch (e) {
      if(e instanceof SyntaxError){
        setVisorValue('Operação inválida')
        throw("Operação inválida")
      }
    }
    const result = eval(visorValue)
    setVisorValue(result.toString())
  }

  const handleClickRemove = () => {
    setVisorValue(visorValue.slice(0, -1))
  }

  return (
    <VisorContext.Provider value={{visorValue, handleClickNumber, handleClickC, handleClickEqual, handleClickRemove}}>
      {children}
    </VisorContext.Provider>
  )
}