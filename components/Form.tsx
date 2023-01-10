import React, { useState } from 'react'
import Heading from './Heading'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'

export const Form = () => {
  const [step, setStep] = useState(0)

  const formHeadings = [
    {
      title: 'Personal info',
      description: 'Please provide your name, emall address, and phone number',
    },
    {
      title: 'Select your plan',
      description: 'You have the option of monthly or yearly billing.',
    },
    {
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
    },
    {
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
    },

    {
      title: '',
      description: '',
    },
  ]

  const handleBack = () => {
    if (step != 0) {
      setStep((pre) => pre - 1)
    }
  }

  const handleNext = () => {
    if (step < formHeadings.length) {
      setStep((pre) => pre + 1)
    }
  }

  const handleSubmit = () => {
    if (step == formHeadings.length - 2) {
      // submit functionality
      setStep((pre) => pre + 1)
    }
  }

  const formSteps = () => {
    if (step == 0) {
      return (
        <>
          <Step1 />
        </>
      )
    } else if (step == 1) {
      return (
        <>
          <Step2 />
        </>
      )
    } else if (step == 2) {
      return (
        <>
          <Step3 />
        </>
      )
    } else if (step == 3) {
      return (
        <>
          <Step4 />
        </>
      )
    } else {
      return (
        <>
          <Step5 />
        </>
      )
    }
  }

  return (
    <div>
      <div className="formContainer">
        <Heading
          title={formHeadings[step].title}
          description={formHeadings[step].description}
        />
        <div className="formBody">{formSteps()}</div>
        <div className="formFooter">
          <button
            disabled={step == 0}
            style={{
              display:
                step == 0
                  ? 'none'
                  : step == formHeadings.length - 1
                  ? 'none'
                  : 'inline',
            }}
            onClick={() => handleBack()}
          >
            Go Back
          </button>
          {step < formHeadings.length - 2 ? (
            <button
              disabled={step == formHeadings.length - 2}
              onClick={() => handleNext()}
            >
              Next Step
            </button>
          ) : step == formHeadings.length - 2 ? (
            <button onClick={() => handleSubmit()}>Confirm</button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
