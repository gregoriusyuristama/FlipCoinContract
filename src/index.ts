import {
  Canister,
  bool,
  query,
  AzleText,
  update,
  AzleVoid,
  AzleVec,
} from "azle";

let flipHistory: string[] = [];

export default Canister({
  getFlipHistory: query([], new AzleVec(AzleText), () => {
    return flipHistory;
  }),
  flipCoin: update([], AzleText, () => {
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    flipHistory.push(result);
    return result;
  }),
});
