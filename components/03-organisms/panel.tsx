import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShow, setStep } from "../../store/panelSelector";
import { ProgressBar } from "../01-atoms/progress-bar";
import { TokensList, ChainsList } from "../02-molecules";

export const Panel = () => {
  const showPanel = useSelector((state: any) => state.panel.show);
  const panelStep = useSelector((state: any) => state.panel.step);
  const originChain = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const originToken = useSelector(
    (state: any) => state.originTransactionInfo.token
  );
  const destinyChain = useSelector(
    (state: any) => state.destinyTransactionInfo.chain
  );
  const destinyToken = useSelector(
    (state: any) => state.destinyTransactionInfo.token
  );
  const dispatch = useDispatch();
  const [progressError, setProgressError] = useState(false);

  const stepsTitles = [
    "Origin Token",
    "Origin Chain",
    "Destiny Token",
    "Destiny Chain",
  ];

  useEffect(() => {
    if (panelStep === 0 || !showPanel) {
      dispatch(setShow(false));
      dispatch(setStep(1));
    } else if (panelStep === 5) {
      dispatch(setShow(false));
      dispatch(setStep(4));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelStep, showPanel]);

  useEffect(() => {
    checkValidSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originChain, originToken, destinyChain, destinyToken]);

  const getCurrentStepPanel = () => {
    switch (panelStep) {
      case 1:
        return <TokensList isOrigin />;
      case 2:
        return <ChainsList isOrigin />;
      case 3:
        return <TokensList isOrigin={false} />;
      case 4:
        return <ChainsList isOrigin={false} />;
    }
  };

  const checkValidSubmit = () => {
    if (!originChain || !originToken || !destinyChain || !destinyToken) {
      setProgressError(true);
    } else {
      setProgressError(false);
    }
  };

  return (
    <section
      className={`absolute z-50 bg-white transform top-0 left-0 px-4 py-6 rounded-[40px] shadow-custom h-full w-full transition ${
        showPanel
          ? "translate-y-0"
          : "translate-y-[200vh] opacity-0 visibility-hidden"
      }`}
    >
      <nav className="w-full flex flex-col items-center">
        <button onClick={() => dispatch(setShow(false))} className="mb-4">
          <img src="/icons/down-chevron.png" alt="Close steps panel cta" />
        </button>
        <ProgressBar stepsNumber={4} currentStep={panelStep} />
      </nav>

      <section className="mt-10">
        <div className="px-4 mb-10">
          <h1 className="font-medium text-2xl">{stepsTitles[panelStep - 1]}</h1>
          <p className="font-medium text-base text-gray-400 mt-2">
            Select a {stepsTitles[panelStep - 1]}
          </p>
        </div>

        {getCurrentStepPanel()}
      </section>

      <section className="inline-flex flex justify-between">
        <button
          onClick={() => dispatch(setStep(panelStep - 1))}
          aria-label="Go to previous bridge step"
          className="bg-black rounded-full p-4 absolute bottom-6 left-6"
        >
          <img src="/icons/arrow-white.png" alt="" className="w-6" />
        </button>
        <button
          onClick={() => dispatch(setStep(panelStep + 1))}
          aria-label="Go to next bridge step"
          className={`bg-black rounded-full p-4 absolute bottom-6 right-6 rotate-180 ${
            panelStep === 4 &&
            progressError &&
            "pointer-events-none cursor-auto bg-gray-100"
          }`}
        >
          <img src="/icons/arrow-white.png" alt="" className="w-6" />
        </button>
      </section>
    </section>
  );
};

export default Panel;
