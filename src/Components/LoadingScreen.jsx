// import { motion as m } from 'framer-motion';
import { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [filled, setIsFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(filled < 100 && isRunning){
      setTimeout(() => setIsFilled(prev => prev += 10 ), 250)
    }
  }, [filled, isRunning])

  return (
    <div className='h-screen bg-[#849E8F] flex justify-between items-end p-20 text-2xl text-white font-helvetica' onLoad={() => setIsRunning(true)}>
      <p>Art Roost...</p>
      <p>{ filled }%</p>
    </div>
  )
}

export default LoadingScreen
