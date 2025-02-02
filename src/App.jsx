import React, { useContext, useEffect, useState } from 'react';
import { multiStepContext } from './components/StepContext';
import Footer from './components/Footer';
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import { Stepper, StepLabel, Step, ThemeProvider, createTheme } from '@mui/material'
import { RiSurveyLine } from 'react-icons/ri'
import DisplayData from './components/DisplayData';

const App = () => {
  const { currentStep, finalData } = useContext(multiStepContext);
  
  const showStep = (step) => {
    switch(step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default:
        return null;
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(',')
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <main className='h-screen flex flex-col justify-between overflow-x-hidden antialiased p-5 bg-white dark:bg-slate-950 text-neutral-800 dark:text-neutral-300 transition-all duration-500'>
        <div>
          <a href="/">
            <div className='flex items-center justify-center gap-2 font-thin text-3xl'>
                <RiSurveyLine size={25} />
                Multi-Step App
            </div>
          </a>
        </div>
        <div>
          <div className="hidden sm:flex mt-10 justify-center">
            <Stepper style={{ width: '45%' }} activeStep={currentStep - 1} orientation='horizontal'>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="sm:hidden mt-10 flex justify-center">
            <Stepper style={{ width: '100%' }} activeStep={currentStep - 1} orientation='horizontal'>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="mt-4 flex justify-center"> 
            { showStep(currentStep) }
          </div>
        </div>
        {finalData.length > 0 && (
          <DisplayData />
        )}

        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App