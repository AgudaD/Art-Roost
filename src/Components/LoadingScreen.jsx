// import { motion as m } from 'framer-motion';
import { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [filled, setIsFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRunning(true), 200);
  }, []);

  useEffect(() => {
    if(filled < 100 && isRunning){
      setTimeout(() => setIsFilled(prev => prev += 10 ), 150)
    }
  }, [filled, isRunning])

  return (
    <div className='h-screen bg-[#849E8F] flex justify-between items-end px-10 pt-10 text-2xl text-white font-Adobe italic md:p-20' onClick={() => setIsRunning(true)}>
      <p>Art roost presents...</p>
      <p>{ filled }%</p>
    </div>
  )
}

export default LoadingScreen
