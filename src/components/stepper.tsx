import * as Tabs from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Define variants for step states and styles
const stepVariants = cva(
  [
    // Base styles for all steps
    "relative flex items-center justify-center",
    "transition-all duration-300 ease-in-out",
    "cursor-pointer",
    // Accessibility and focus states
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
  ],
  {
    variants: {
      // Different state variations
      status: {
        default: ["bg-gray-200 text-gray-500", "hover:bg-gray-300"],
        active: [
          "bg-blue-500 text-white",
          "ring-2 ring-blue-500 ring-offset-2",
          "hover:bg-blue-600",
        ],
        completed: ["bg-green-500 text-white", "hover:bg-green-600"],
        error: ["bg-red-500 text-white", "hover:bg-red-600"],
      },
      size: {
        sm: "h-8 w-8 rounded-full text-xs",
        md: "h-10 w-10 rounded-full text-sm",
        lg: "h-12 w-12 rounded-full text-base",
      },
    },
    defaultVariants: {
      status: "default",
      size: "md",
    },
  },
);

// Define connector line variants
const connectorVariants = cva(
  [
    "absolute top-1/2 transform -translate-y-1/2",
    "h-1 transition-colors duration-300",
  ],
  {
    variants: {
      status: {
        default: "bg-gray-200",
        completed: "bg-green-500",
        active: "bg-blue-500",
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);

// Stepper Component
interface StepperProps {
  steps: {
    label: string;
    content: React.ReactNode;
    status?: "default" | "active" | "completed" | "error";
  }[];
  activeStep?: number;
  onStepChange?: (step: number) => void;
}

export function Stepper({ steps, activeStep = 0, onStepChange }: StepperProps) {
  return (
    <Tabs.Root
      defaultValue={steps[activeStep].label}
      value={steps[activeStep].label}
      className="w-full"
    >
      {/* Step Indicators */}
      <Tabs.List className="relative flex items-center justify-between mb-8 w-min">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="relative flex-1 flex items-center min-w-20"
          >
            {/* Connector Line */}
            {index > 0 && (
              <div
                className={twMerge(
                  connectorVariants({
                    status: index <= activeStep ? "completed" : "default",
                    className: "left-0 right-1/2 -ml-1/2",
                  }),
                )}
              />
            )}

            {/* Step Indicator */}
            <Tabs.Trigger
              onClick={() => onStepChange?.(index)}
              value={step.label}
              className={twMerge(
                stepVariants({
                  status:
                    index < activeStep
                      ? "completed"
                      : index === activeStep
                        ? "active"
                        : "default",
                  size: "md",
                }),
              )}
            >
              {index + 1}
            </Tabs.Trigger>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={twMerge(
                  connectorVariants({
                    status: index < activeStep ? "completed" : "default",
                    className: "right-0 left-1/2 -mr-1/2",
                  }),
                )}
              />
            )}
          </div>
        ))}
      </Tabs.List>

      {/* Step Content */}
      {steps.map((step) => {
        return (
          <Tabs.Content
            key={step.label}
            value={step.label}
            className="p-4 border border-white text-white rounded-lg shadow w-full"
          >
            {step.content}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
