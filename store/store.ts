import { configureStore } from "@reduxjs/toolkit";
import originTransactionSlice from "./originTransactionInfo";
import destinyTransactionSlice from "./destinyTransactionInfo";
import panelSelectorSlice from "./panelSelector";
import accountSlice from "./accountSlice";
import testnetsSlice from "./testnetsSlice";
import rampInfoSlice from "./rampInfoSlice";
import vaultInfoSlice from "./vaultInfoSlice";

export default configureStore({
  reducer: {
    // Bridge
    originTransactionInfo: originTransactionSlice,
    destinyTransactionInfo: destinyTransactionSlice,
    panel: panelSelectorSlice,
    account: accountSlice,
    testnets: testnetsSlice,

    // On Ramp
    rampInfo: rampInfoSlice,

    // Profit
    vaultInfo: vaultInfoSlice,
  },
});
