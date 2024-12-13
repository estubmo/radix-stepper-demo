"use client";

import React from "react";
import { Stepper } from "@/components/stepper";

export function StepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Personal Info",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        </div>
      ),
    },
    {
      label: "Address",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Address Details</h2>
        </div>
      ),
    },
    {
      label: "Confirmation",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Confirm Details</h2>
        </div>
      ),
    },
  ];

  return (
    <Stepper
      steps={steps}
      activeStep={activeStep}
      onStepChange={setActiveStep}
    />
  );
}
