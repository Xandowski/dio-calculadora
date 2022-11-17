import './App.css'
import { Button } from './components/Button'
import { Visor } from './components/Visor'
import { VisorProvider } from './contexts/VisorContext'

function App() {

  return (
    <VisorProvider>
      <div className='absolute top-1/4 left-[calc(50vw-125px)] rounded-xl bg-gradient-to-r p-[6px] from-[#c8f152] via-[#a71d35] to-[#4c9c59]'>
        <div className="bg-[#081d36] w-64 h-[410px] rounded-md">
        
          <div className="bg-[#18314f] w-full h-2/6 p-5 flex items-end">
            <Visor
              
            />
          </div>

          <div className="w-full grid grid-cols-4 gap-4 p-1 items-center ">
            <Button value='('/>
            <Button value=')'/>
            <Button value='←'/>
            <Button value='/'/>

            <Button value='1'/>
            <Button value='2'/>
            <Button value='3'/>
            <Button value='*'/>

            <Button value='4'/>
            <Button value='5'/>
            <Button value='6'/>
            <Button value='-'/>

            <Button value='7'/>
            <Button value='8'/>
            <Button value='9'/>
            <Button value='+'/>

            <Button value='C'/>
            <Button value='0'/>
            <Button value='.'/>
            <Button value='='/>
          </div>
        </div>
      </div>
    </VisorProvider>
  )
}

export default App
