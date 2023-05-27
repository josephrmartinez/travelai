import { useState } from 'react'
import './App.css'
import useMultistepForm from './components/multistepForm/useMultistepForm';
import StepOne from './components/multistepForm/StepOne';
import StepTwo from './components/multistepForm/StepTwo';
import StepThree from './components/multistepForm/StepThree';
import StepFour from './components/multistepForm/StepFour';

import {
  Waves, Cactus, Mountains, TreeEvergreen,
  Buildings, CurrencyDollar, PersonSimpleBike, 
  PersonSimpleWalk, Boot, FlowerLotus, Palette,
  Bird, BowlFood, FlyingSaucer, Champagne,
  Bed, SketchLogo, Tent, HandCoins,
  Coins, PiggyBank, Grains
} from "@phosphor-icons/react";

const INITIAL_DATA = {}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  
  function updateFields(fields) {
        setData(prevData => {
            return {...prevData, ...fields}
        })
    }

  const { currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm([
            <StepOne {...data} updateFields={updateFields} />,
            <StepTwo {...data} updateFields={updateFields} />,
            <StepThree {...data} updateFields={updateFields} />,
            <StepFour {...data} updateFields={updateFields} />,
        ])
  
  function onSubmit(e) {
    e.preventDefault();
        
    if (!isLastStep) return next()
  }


  return (
    <form className="h-full w-full" onSubmit={onSubmit}>
                {step}
            <div className="flex flex-row justify-around items-center">
                {currentStepIndex === 0 && <div className="w-16"></div>}
                {currentStepIndex !== 0 && <button type="button" className="w-16 text-emerald-700/90" onClick={back}>back</button>}
                <button className="w-16 text-emerald-700/90" type="submit">{isLastStep ? "generate trip" : "next"}</button>
            </div>
            </form>
  )
}

export default App
