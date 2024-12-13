import Image from "next/image";
import { StepperDemo } from "./components/stepper-demo";
import { VerticalStepperDemo } from "./components/vertical-stepper-demo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full max-w-screen-md">
        <StepperDemo />
        <VerticalStepperDemo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/estubmo/radix-stepper-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert"
            aria-hidden
            src="/github.svg"
            alt="Github"
            width={16}
            height={16}
          />
          Source
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.radix-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert"
            aria-hidden
            src="/radix.svg"
            alt="Radix UI"
            width={16}
            height={16}
          />
          Radix UI
        </a>
      </footer>
    </div>
  );
}
