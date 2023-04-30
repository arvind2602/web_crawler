import React from "react";
import "./style.css";
import CycloneIcon from "@mui/icons-material/Cyclone";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Enter your personal information",
    description: `Facial recognition is a way of recognizing a human face through technology. A facial recognition system uses biometrics to map facial features from a photograph or video. It compares the information with a database of known faces to find a match. Facial recognition can help verify personal identity, but it also raises privacy issues.`,
  },
  {
    label: "Facial Recognition",
    description:
      "A facial recognition system uses biometrics to map facial features from a video. It will compare the information with a database of your face to find a match.To verify personal identity.", },
  
];
const Login = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="head">
    <div className="container" id="container">
      <h2 className="logot">
        {" "}
        <span className="logo">
          <CycloneIcon /></span>
        
          Smart Crawler
      </h2>
      <div className="sub">
        <div className="sub2 sub0">
          <h1>Watchful 👀 Eye <br/>on Dark Web 🕸️<br/>Trace the Untraceable.</h1>
          <p className="par-h">🤖AI-enabled technological solution for 🚨 actionable Crime Intelligence 🕵️‍♂️ from the Deep and Dark Web</p>
          <input type="text" required placeholder="Enter Your Username" />
          <input type="password" placeholder="Password" required />
          <button type="submit"><a href="http://localhost:3000/admin">Continue</a></button>
        </div>
        <div className="sub1 sub0">
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    <span className="label">{step.label}</span>
                  </StepLabel>
                  <StepContent>
                    <Typography><span className="des">{step.description}</span></Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button 
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1,color:"white",backgroundColor:"white"}}
                        >
                         {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          <span>Back</span>
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  <span>Reset</span>
                </Button>
              </Paper>
            )}
          </Box>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
