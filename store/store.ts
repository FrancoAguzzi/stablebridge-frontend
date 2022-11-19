import { configureStore } from "@reduxjs/toolkit";
import originTransactionSlice from "./originTransactionInfo";
import destinyTransactionSlice from "./destinyTransactionInfo";
import panelSelectorSlice from "./panelSelector";
import accountSlice from "./accountSlice";
import testnetsSlice from "./testnetsSlice";
import rampInfoSlice from "./rampInfoSlice";

export default configureStore({
  reducer: {
    // Bridge related
    originTransactionInfo: originTransactionSlice,
    destinyTransactionInfo: destinyTransactionSlice,
    panel: panelSelectorSlice,
    account: accountSlice,
    testnets: testnetsSlice,

    // On Ramp related
    rampInfo: rampInfoSlice,
  },
});
