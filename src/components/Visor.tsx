import { useContext } from "react"
import { VisorContext } from "../contexts/VisorContext"

export const Visor = () => {
  const {visorValue} = useContext(VisorContext)
  return (
    <input 
      className="w-full text-right bg-transparent border-0 text-slate-200 text-lg"
      type="text" 
      readOnly 
      value={visorValue}/>
  )
}