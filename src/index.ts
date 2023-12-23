import { Canister, query, AzleText, update, AzleVec, Result } from "azle";

let flipHistory: string[] = [];

export default Canister({
  getFlipHistory: query([], AzleVec(AzleText), () => {
    return flipHistory;
  }),

  flipCoin: update([], Result(AzleText, AzleText), () => {
    try {
      let result = Math.random() < 0.5 ? "Heads" : "Tails";
      flipHistory.push(result);
      return Result.Ok(result);
    } catch (error) {
      return Result.Err(`Error flipping coin: ${error}`);
    }
  }),
});
