enum StepsPossibleStatus {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
}

interface ProgressBarProps {
  stepsNumber: number;
  currentStep: number;
}

export const ProgressBar = ({ stepsNumber, currentStep }: ProgressBarProps) => {
  const getStepStatus = (index: number) => {
    if (index + 1 <= currentStep) {
      return StepsPossibleStatus.ACTIVE;
    } else {
      return StepsPossibleStatus.INACTIVE;
    }
  };

  return (
    <ul
      className={`w-full grid gap-2 inline-grid px-2 ${
        stepsNumber && "grid-cols-4"
      }`}
    >
      {[...Array(stepsNumber)].map((e: any, index: number) => (
        <li
          key={index}
          aria-label={`Step ${index + 1} is ${getStepStatus(index)}`}
          className="h-2 border-[1px] rounded-2xl bg-gray-1"
        >
          <div
            className={`bg-blue w-full h-full rounded-2xl transition ${
              getStepStatus(index) === StepsPossibleStatus.ACTIVE
                ? "opacity-100"
                : "opacity-0"
            }`}
          ></div>
        </li>
      ))}
    </ul>
  );
};
