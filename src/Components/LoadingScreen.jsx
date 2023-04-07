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
    <div className='h-screen bg-[#849E8F] flex justify-center items-end gap-6 p-10  text-xl text-white font-Adobe md:justify-between md:items-end'>
      <p className='mb-12'>Art roost presents...</p>
      <p className='mb-12'>{ filled }%</p>
    </div>
  )
}

export default LoadingScreen
