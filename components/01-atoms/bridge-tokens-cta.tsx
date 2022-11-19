import { useSelector, useDispatch } from "react-redux";
import { setShow, setStep } from "../../store/panelSelector";

export const BridgeTokensCta = () => {
  const originToken = useSelector(
    (state: any) => state.originTransactionInfo.token
  );
  const originChain = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const destinyToken = useSelector(
    (state: any) => state.destinyTransactionInfo.token
  );
  const destinyChain = useSelector(
    (state: any) => state.destinyTransactionInfo.chain
  );
  const dispatch = useDispatch();

  const continueBridgeProcess = () => {
    if (!originToken) {
      dispatch(setStep(1));
      dispatch(setShow(true));
      return;
    } else if (!originChain) {
      dispatch(setStep(2));
      dispatch(setShow(true));
      return;
    } else if (!destinyToken) {
      dispatch(setStep(3));
      dispatch(setShow(true));
      return;
    } else if (!destinyChain) {
      dispatch(setStep(4));
      dispatch(setShow(true));
      return;
    } else {
      // TODO: Confirmation screen
    }
  };

  return (
    <button
      onClick={continueBridgeProcess}
      className="w-full bg-black text-white font-semibold text-base p-6 rounded-3xl hover:animate-pulse transition"
    >
      <p>Proceed to transaction information</p>
    </button>
  );
};

export default BridgeTokensCta;
