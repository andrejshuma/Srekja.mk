import React from 'react'
import Stepper, { Step } from './Stepper/Stepper'
function Register() {
    return (
        <>
            <Stepper
                initialStep={1}
                onStepChange={(step) => {
                    console.log(step);
                }}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="Назад"
                nextButtonText="Продолжи"
            >
                <Step>
                    <h2>Welcome to the React Bits stepper!</h2>
                    <p>Check out the next step!</p>
                </Step>
                <Step>
                    <h2>Step 2</h2>
                    <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
                    <p>Custom step content!</p>
                </Step>
                <Step>
                    <h2>How about an input?</h2>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
                </Step>
            </Stepper>
        </>
    )
}

export default Register
