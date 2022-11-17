import { useContext } from "react"
import { VisorContext } from "../contexts/VisorContext"

interface ButtonProps {
  value: string
  onClick?: (e: MouseEvent) => void
}

export const Button = ({value}: ButtonProps) => {
  const {handleClickC, handleClickEqual, handleClickNumber, handleClickRemove} = useContext(VisorContext)

  return (
    <button className={`${value === 'C' ? 'text-[#a71d35]' :' text-[#E6F9AF]'} font-semibold text-lg`} value={value}
    onClick={ value === 'C' ? handleClickC : value === '=' ? handleClickEqual : value === '←' ? handleClickRemove : handleClickNumber}
    >{value}</button>
  )
}